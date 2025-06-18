"use client";
import { useState, useEffect } from "react";
import useWindowStore from '@/stores/windowStore';
import StartMenu from "./StartMenu";

/**
 * Minimal XP-style taskbar with Start button placeholder and clock.
 */
const Taskbar = () => {
  const [time, setTime] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    update(); // initial
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, []);

  const { windows, focusWindow, toggleMinimize } = useWindowStore();

  const windowEntries = Object.values(windows).filter(w => w.isOpen);

  return (
    <div className="absolute bottom-0 left-0 flex h-8 w-full items-center bg-[color:var(--luna-blue,theme(colors.luna.blue))] text-white text-xs">
      <button
        onClick={() => setOpen((v) => !v)}
        className="ml-2 flex items-center gap-1 rounded-sm bg-[color:var(--luna-greenStart,theme(colors.luna.greenStart))] px-2 py-0.5 font-bold shadow-inner hover:brightness-110 active:translate-y-0.5"
      >
        Start
      </button>
      {open && <StartMenu />}

        {/* Taskbar buttons */}
        <div className="flex gap-0.5 ml-2">
          {windowEntries.map(win => (
            <button
              key={win.id}
              onClick={() => {
                if (win.isMinimized) toggleMinimize(win.id);
                focusWindow(win.id);
              }}
              className={`h-6 px-2 flex items-center bg-[color:var(--luna-silverLight,theme(colors.luna.silverLight))] text-black border border-t-white border-l-white border-b-gray-700 border-r-gray-700 shadow-inner text-[10px] ${win.isMinimized ? 'opacity-60' : ''}`}
            >
              {win.title}
            </button>
          ))}
        </div>

        <div className="ml-auto mr-2 select-none">{time}</div>
    </div>
  );
};

export default Taskbar;
