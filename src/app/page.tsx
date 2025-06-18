"use client";
// src/app/page.tsx
import { useEffect } from 'react';
import Desktop from "@/components/system/Desktop";
import useWindowStore from '@/stores/windowStore';

const initialWindowsData = [
  {
    id: 'aboutMe',
    title: 'About Me',
    content: (
      <>
        <p className="mb-2">Hi, I’m <strong>Gerry Moeis</strong> – a creative web developer who loves bringing nostalgic interfaces back to life.</p>
        <p>This Windows-XP-style portfolio is built with Next.js, Tailwind&nbsp;CSS, and plenty of pixel-perfect love.</p>
      </>
    ),
    position: { x: 100, y: 100 },
  },
  {
    id: 'projects',
    title: 'Projects',
    content: (
      <>
        <p className="mb-1">• XP Portfolio (this site)</p>
        <p className="mb-1">• AI Chatbot Playground</p>
        <p>• Retro Game Jam Winner</p>
      </>
    ),
    position: { x: 350, y: 140 },
  }
];

export default function Home() {
  const { openWindow } = useWindowStore();

  useEffect(() => {
    initialWindowsData.forEach(windowConfig => openWindow(windowConfig));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run only once on mount

  return (
    <main>
      <Desktop />
    </main>
  );
}

