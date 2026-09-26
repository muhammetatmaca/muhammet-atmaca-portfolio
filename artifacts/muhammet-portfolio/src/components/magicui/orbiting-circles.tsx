import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface OrbitingCirclesProps {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
  style?: React.CSSProperties;
}

export function OrbitingCircles({
  className,
  children,
  reverse = false,
  duration = 20,
  delay = 0,
  radius = 120,
  path = true,
  iconSize = 32,
  speed = 1,
  style,
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed;
  const childCount = React.Children.count(children);

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <circle
            className="stroke-white/15"
            strokeDasharray="4 4"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const angle = childCount > 1 ? (360 / childCount) * index : 0;
        return (
          <motion.div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: iconSize,
              height: iconSize,
              marginLeft: -iconSize / 2,
              marginTop: -iconSize / 2,
            }}
            animate={{
              rotate: reverse ? [angle, angle - 360] : [angle, angle + 360],
            }}
            transition={{
              duration: calculatedDuration,
              repeat: Infinity,
              ease: 'linear',
              delay,
            }}
            className="pointer-events-none flex items-center justify-center transform-gpu"
          >
            <div
              style={{
                transform: `translateY(${radius}px)`,
              }}
              className="pointer-events-auto flex items-center justify-center"
            >
              <motion.div
                animate={{
                  rotate: reverse ? [-angle, -angle + 360] : [-angle, -angle - 360],
                }}
                transition={{
                  duration: calculatedDuration,
                  repeat: Infinity,
                  ease: 'linear',
                  delay,
                }}
                className={cn('flex items-center justify-center', className)}
                style={style}
              >
                {child}
              </motion.div>
            </div>
          </motion.div>
        );
      })}
    </>
  );
}
