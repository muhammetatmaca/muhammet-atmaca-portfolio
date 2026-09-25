# react-native-teleflow-prompter

[![npm version](https://img.shields.io/npm/v/react-native-teleflow-prompter.svg?style=flat-square)](https://www.npmjs.com/package/react-native-teleflow-prompter)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg?style=flat-square)](https://www.typescriptlang.org/)
[![React Native](https://img.shields.io/badge/React%20Native-Compatible-61dafb.svg?style=flat-square)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-Compatible-black.svg?style=flat-square)](https://expo.dev/)

> High-performance 60 FPS teleprompter scrolling engine, Words-Per-Minute (WPM) speed calculator, speech timing math, and mirror optics transform generator for **React Native**, **Expo**, and **Web**.

Extracted from and powering the production mobile app [**TeleFlow Prompter**](https://muhammetatmaca.com.tr/apps/teleflow-prompter) by [**Muhammet Atmaca**](https://muhammetatmaca.com.tr/) ([VirelonSoft](https://www.linkedin.com/company/virelonsoft/)).

---

## ✨ Features

- 🏎️ **Butter-Smooth 60 FPS Scrolling**: Frame-independent delta timing via `requestAnimationFrame` preventing jitter on low-end devices.
- ⏱️ **Words-Per-Minute (WPM) Calculator**: Compute exact speech durations based on conversational, presentation, or reading speeds (120–180 WPM).
- 🪞 **Beam-Splitter Mirror Optics**: Native style transformations (`scaleX: -1`, `scaleY: -1`) for physical teleprompter glass reflection rigs.
- 🧩 **Zero Dependencies**: Pure TypeScript, ultra-lightweight (< 3 kB gzipped).
- 📱 **Universal Compatibility**: Works out of the box with React Native (Bare & Expo), React Web, Next.js, and Node.js.

---

## 📦 Installation

```bash
# npm
npm install react-native-teleflow-prompter

# pnpm
pnpm add react-native-teleflow-prompter

# yarn
yarn add react-native-teleflow-prompter
```

---

## 🚀 Quick Start (React Native & Expo)

```tsx
import React, { useRef, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useTeleprompter, getMirrorTransform } from 'react-native-teleflow-prompter';

export default function PrompterScreen() {
  const scrollViewRef = useRef<ScrollView>(null);

  const script = `
    Welcome to this presentation. Today we are demonstrating
    the TeleFlow teleprompter engine running smoothly at 60 FPS
    with automatic Words-Per-Minute speed calculation.
  `;

  const {
    isPlaying,
    scrollOffset,
    progress,
    elapsedSeconds,
    remainingSeconds,
    totalDurationSeconds,
    wpm,
    toggle,
    reset,
    setWpm,
  } = useTeleprompter({
    text: script,
    initialWpm: 145,
    contentHeight: 1200,
    viewportHeight: 500,
    onComplete: () => console.log('Speech finished!'),
  });

  // Automatically scroll to calculated pixel offset
  useEffect(() => {
    scrollViewRef.current?.scrollTo({ y: scrollOffset, animated: false });
  }, [scrollOffset]);

  return (
    <View style={styles.container}>
      {/* Mirror transform support for teleprompter glass rigs */}
      <View style={[styles.viewport, getMirrorTransform('none')]}>
        <ScrollView ref={scrollViewRef} scrollEnabled={false}>
          <Text style={styles.scriptText}>{script}</Text>
        </ScrollView>
      </View>

      {/* Controller HUD */}
      <View style={styles.hud}>
        <Text style={styles.timer}>
          {Math.floor(elapsedSeconds / 60)}:{(elapsedSeconds % 60).toString().padStart(2, '0')} / 
          {Math.floor(totalDurationSeconds / 60)}:{(totalDurationSeconds % 60).toString().padStart(2, '0')}
        </Text>
        <Text style={styles.wpm}>{wpm} WPM ({(progress * 100).toFixed(0)}%)</Text>

        <View style={styles.buttons}>
          <TouchableOpacity onPress={toggle} style={styles.btn}>
            <Text style={styles.btnText}>{isPlaying ? 'Pause' : 'Play'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={reset} style={styles.btn}>
            <Text style={styles.btnText}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setWpm(wpm + 10)} style={styles.btn}>
            <Text style={styles.btnText}>+10 WPM</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setWpm(wpm - 10)} style={styles.btn}>
            <Text style={styles.btnText}>-10 WPM</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a' },
  viewport: { height: 500, padding: 24 },
  scriptText: { color: '#f8fafc', fontSize: 32, lineHeight: 48, fontWeight: '600' },
  hud: { padding: 20, borderTopWidth: 1, borderColor: '#334155' },
  timer: { color: '#38bdf8', fontSize: 20, fontWeight: 'bold' },
  wpm: { color: '#94a3b8', fontSize: 14, marginBottom: 12 },
  buttons: { flexDirection: 'row', gap: 10 },
  btn: { backgroundColor: '#2563eb', paddingVertical: 10, paddingHorizontal: 16, borderRadius: 8 },
  btnText: { color: '#ffffff', fontWeight: 'bold' },
});
```

---

## 🛠️ Standalone Calculation Utilities

You can use the math utilities without React or React Native:

```ts
import { 
  countWords, 
  calculateDuration, 
  calculateWpm, 
  calculateScrollVelocity, 
  getMirrorTransform,
  chunkScript 
} from 'react-native-teleflow-prompter';

// 1. Count words accurately
const wordCount = countWords("Hello world! Teleprompter math is easy."); // 6

// 2. Estimate speech duration (at 150 WPM)
const durationSeconds = calculateDuration(wordCount, 150); // seconds

// 3. Calculate target WPM from fixed video length (e.g., 300 words in 120s)
const targetWpm = calculateWpm(300, 120); // 150 WPM

// 4. Calculate exact scroll velocity (pixels per second)
const velocity = calculateScrollVelocity(2400, 800, 120); // px/sec

// 5. Mirror transform for hardware beam-splitter glass
const mirrorStyle = getMirrorTransform('horizontal'); // { transform: [{ scaleX: -1 }] }
```

---

## 🎙️ Words-Per-Minute (WPM) Benchmark Guide

| Speech Type | WPM Range | Typical Use Case |
| :--- | :--- | :--- |
| **Deliberate / Slow** | 100 – 125 WPM | Formal speeches, technical training, audiobooks |
| **Conversational** | 130 – 160 WPM | Video podcasts, YouTube videos, YouTube Shorts / Reels |
| **Rapid / Energetic** | 165 – 190 WPM | TV broadcast reporting, auctioneers, fast-paced marketing |

---

## 👨‍💻 Author & Credits

Developed with ❤️ by **[Muhammet Atmaca](https://muhammetatmaca.com.tr)**:
- 🌐 **Official Website**: [https://muhammetatmaca.com.tr](https://muhammetatmaca.com.tr)
- 📱 **TeleFlow Prompter Mobile App**: [View on Portfolio](https://muhammetatmaca.com.tr/apps/teleflow-prompter)
- 🐙 **GitHub**: [@muhammetatmaca](https://github.com/muhammetatmaca)
- 💼 **LinkedIn**: [Muhammet Atmaca](https://www.linkedin.com/in/muhammet-atmaca-857481252/)
- 🏢 **Company**: [VirelonSoft](https://www.linkedin.com/company/virelonsoft/)

---

## 📄 License

MIT © [Muhammet Atmaca](https://muhammetatmaca.com.tr)
