
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";

interface OrbitingCirclesProps {
  className?: string;
  children?: React.ReactNode;
  radius?: number;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
}

export function OrbitingCircles({
  className,
  children,
  radius = 160,
  reverse = false,
  duration = 20,
  delay = 0,
  path = true,
  iconSize = 30,
  speed = 1,
}: OrbitingCirclesProps) {
  const childCount = React.Children.count(children);
  const childrenArray = React.Children.toArray(children);
  
  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center",
        className
      )}
    >
      {path && (
        <div
          className="absolute rounded-full border border-dashed border-gray-400/50 dark:border-gray-600/50"
          style={{
            width: radius * 2,
            height: radius * 2,
          }}
        />
      )}
      {childrenArray.map((child, index) => {
        const degree = (index / childCount) * 360;
        
        return (
          <div
            key={index}
            className="absolute"
            style={{
              width: iconSize,
              height: iconSize,
              transform: `rotate(${degree}deg) translateX(${radius}px)`,
              animation: `${reverse ? "orbit-reverse" : "orbit"} ${
                duration / speed
              }s linear ${delay}s infinite`,
            }}
          >
            <div
              className="flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-black"
              style={{
                transform: `rotate(-${degree}deg)`,
              }}
            >
              {child}
            </div>
          </div>
        );
      })}
      
      <style jsx>{`
        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(${radius}px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(${radius}px) rotate(-360deg);
          }
        }
        
        @keyframes orbit-reverse {
          0% {
            transform: rotate(0deg) translateX(${radius}px) rotate(0deg);
          }
          100% {
            transform: rotate(-360deg) translateX(${radius}px) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={40} radius={160}>
        <Icons.openai />
        <Icons.chatgpt />
        <Icons.tensorflow />
        <Icons.pytorch />
        <Icons.huggingface />
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
        <Icons.stability />
        <Icons.midjourney />
        <Icons.anthropic />
        <Icons.deepmind />
      </OrbitingCircles>
    </div>
  );
}
