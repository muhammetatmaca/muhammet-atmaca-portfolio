/**
 * react-native-teleflow-prompter
 * 
 * High-performance 60fps teleprompter scroll engine, speech timing math,
 * and mirror optics for React Native, Expo, and Web applications.
 * 
 * Developed by Muhammet Atmaca (VirelonSoft)
 * Website: https://muhammetatmaca.com.tr
 * Portfolio App: TeleFlow Prompter (https://muhammetatmaca.com.tr/apps/teleflow-prompter)
 * License: MIT
 */

import { useState, useEffect, useRef, useCallback } from 'react';

export type MirrorMode = 'none' | 'horizontal' | 'vertical' | 'both';

export interface ScriptChunk {
  id: number;
  text: string;
  wordCount: number;
  estimatedDurationSeconds: number;
}

export interface TeleprompterOptions {
  /** The text content to be displayed and spoken */
  text: string;
  /** Initial speech speed in Words Per Minute (typical: 130 - 170 WPM) */
  initialWpm?: number;
  /** Total height of the scrollable content view in pixels */
  contentHeight?: number;
  /** Height of the visible screen/viewport in pixels */
  viewportHeight?: number;
  /** Auto-scroll frame rate target (default: 60) */
  fps?: number;
  /** Callback fired when scrolling reaches the end */
  onComplete?: () => void;
}

export interface TeleprompterController {
  /** Whether the prompter is currently actively scrolling */
  isPlaying: boolean;
  /** Progress through the text from 0.0 to 1.0 */
  progress: number;
  /** Calculated scroll offset in pixels */
  scrollOffset: number;
  /** Elapsed time in seconds */
  elapsedSeconds: number;
  /** Estimated remaining time in seconds */
  remainingSeconds: number;
  /** Total estimated speech duration in seconds */
  totalDurationSeconds: number;
  /** Current speech speed in words per minute */
  wpm: number;
  /** Total word count of the script */
  wordCount: number;
  /** Start scrolling */
  play: () => void;
  /** Pause scrolling */
  pause: () => void;
  /** Toggle play/pause state */
  toggle: () => void;
  /** Reset prompter to start (0 offset) */
  reset: () => void;
  /** Change speed in Words Per Minute */
  setWpm: (newWpm: number) => void;
  /** Seek directly to a progress position (0.0 to 1.0) */
  seek: (progressRatio: number) => void;
}

/**
 * Counts words accurately across multiple languages and whitespace boundaries.
 */
export function countWords(text: string): number {
  if (!text || typeof text !== 'string') return 0;
  const trimmed = text.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).filter(Boolean).length;
}

/**
 * Calculates estimated speech duration in seconds based on word count and WPM.
 */
export function calculateDuration(wordCount: number, wpm: number = 140): number {
  if (wordCount <= 0 || wpm <= 0) return 0;
  return Math.round((wordCount / wpm) * 60);
}

/**
 * Calculates the Words Per Minute rate from word count and duration.
 */
export function calculateWpm(wordCount: number, durationSeconds: number): number {
  if (wordCount <= 0 || durationSeconds <= 0) return 0;
  return Math.round((wordCount / durationSeconds) * 60);
}

/**
 * Calculates pixel scroll velocity (pixels per second) needed to finish
 * the entire content within the target duration.
 */
export function calculateScrollVelocity(
  contentHeight: number,
  viewportHeight: number = 0,
  durationSeconds: number
): number {
  if (durationSeconds <= 0) return 0;
  const scrollableDistance = Math.max(0, contentHeight - viewportHeight);
  return scrollableDistance / durationSeconds;
}

/**
 * Returns React Native compatible transform style for beam-splitter mirror optics.
 * Physical teleprompter glass reflects text reversed, requiring horizontal or vertical inversion.
 */
export function getMirrorTransform(mode: MirrorMode = 'none'): { transform: Array<{ scaleX?: number; scaleY?: number }> } {
  switch (mode) {
    case 'horizontal':
      return { transform: [{ scaleX: -1 }] };
    case 'vertical':
      return { transform: [{ scaleY: -1 }] };
    case 'both':
      return { transform: [{ scaleX: -1 }, { scaleY: -1 }] };
    case 'none':
    default:
      return { transform: [{ scaleX: 1 }, { scaleY: 1 }] };
  }
}

/**
 * Splits a long script into digestible chunks with word counts and time estimates.
 */
export function chunkScript(text: string, maxWordsPerChunk: number = 40): ScriptChunk[] {
  if (!text) return [];
  const words = text.trim().split(/\s+/).filter(Boolean);
  const chunks: ScriptChunk[] = [];
  let currentWords: string[] = [];

  for (let i = 0; i < words.length; i++) {
    currentWords.push(words[i]);
    const isLastWord = i === words.length - 1;
    const reachedLimit = currentWords.length >= maxWordsPerChunk;
    const endsWithPeriod = /[.!?]$/.test(words[i]);

    if (isLastWord || (reachedLimit && endsWithPeriod) || currentWords.length >= maxWordsPerChunk * 1.5) {
      const chunkText = currentWords.join(' ');
      const chunkCount = currentWords.length;
      chunks.push({
        id: chunks.length + 1,
        text: chunkText,
        wordCount: chunkCount,
        estimatedDurationSeconds: calculateDuration(chunkCount, 140),
      });
      currentWords = [];
    }
  }

  return chunks;
}

/**
 * React Hook providing a high-precision, 60fps auto-scroll controller for teleprompters.
 */
export function useTeleprompter(options: TeleprompterOptions): TeleprompterController {
  const {
    text,
    initialWpm = 140,
    contentHeight = 1000,
    viewportHeight = 400,
    onComplete,
  } = options;

  const wordCount = countWords(text);
  const [wpm, setWpmState] = useState<number>(initialWpm);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [scrollOffset, setScrollOffset] = useState<number>(0);

  const totalDurationSeconds = calculateDuration(wordCount, wpm);
  const scrollableDistance = Math.max(0, contentHeight - viewportHeight);

  const lastFrameTimeRef = useRef<number | null>(null);
  const rafIdRef = useRef<number | null>(null);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  const play = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const pause = useCallback(() => {
    setIsPlaying(false);
    lastFrameTimeRef.current = null;
  }, []);

  const toggle = useCallback(() => {
    setIsPlaying((prev: boolean) => !prev);
  }, []);

  const reset = useCallback(() => {
    setIsPlaying(false);
    setScrollOffset(0);
    lastFrameTimeRef.current = null;
  }, []);

  const setWpm = useCallback((newWpm: number) => {
    if (newWpm > 20 && newWpm <= 400) {
      setWpmState(newWpm);
    }
  }, []);

  const seek = useCallback(
    (progressRatio: number) => {
      const clamped = Math.max(0, Math.min(1, progressRatio));
      setScrollOffset(clamped * scrollableDistance);
    },
    [scrollableDistance]
  );

  // 60 FPS animation loop
  useEffect(() => {
    if (!isPlaying || scrollableDistance <= 0 || totalDurationSeconds <= 0) {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      lastFrameTimeRef.current = null;
      return;
    }

    const velocityPxPerSec = scrollableDistance / totalDurationSeconds;

    const tick = (now: number) => {
      if (lastFrameTimeRef.current === null) {
        lastFrameTimeRef.current = now;
      }

      const deltaSeconds = (now - lastFrameTimeRef.current) / 1000;
      lastFrameTimeRef.current = now;

      setScrollOffset((prev: number) => {
        const next = prev + velocityPxPerSec * deltaSeconds;
        if (next >= scrollableDistance) {
          setIsPlaying(false);
          if (onCompleteRef.current) onCompleteRef.current();
          return scrollableDistance;
        }
        return next;
      });

      rafIdRef.current = requestAnimationFrame(tick);
    };

    rafIdRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [isPlaying, scrollableDistance, totalDurationSeconds]);

  const progress = scrollableDistance > 0 ? Math.min(1, scrollOffset / scrollableDistance) : 0;
  const elapsedSeconds = Math.round(progress * totalDurationSeconds);
  const remainingSeconds = Math.max(0, totalDurationSeconds - elapsedSeconds);

  return {
    isPlaying,
    progress,
    scrollOffset,
    elapsedSeconds,
    remainingSeconds,
    totalDurationSeconds,
    wpm,
    wordCount,
    play,
    pause,
    toggle,
    reset,
    setWpm,
    seek,
  };
}
