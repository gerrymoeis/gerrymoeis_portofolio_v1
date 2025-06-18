"use client";
import { ReactNode } from "react";
import useWindowStore from "@/stores/windowStore";

interface DesktopIconProps {
  id: string;
  label: string;
  icon: ReactNode;
  windowConfig: Parameters<ReturnType<typeof useWindowStore>["openWindow"]>[0];
}

const DesktopIcon = ({ id, label, icon, windowConfig }: DesktopIconProps) => {
  const openWindow = useWindowStore(s => s.openWindow);

  const handleDoubleClick = () => {
    openWindow(windowConfig);
  };

  return (
    <div
      className="flex flex-col items-center w-16 m-2 cursor-default select-none"
      onDoubleClick={handleDoubleClick}
    >
      <div className="text-4xl mb-1">{icon}</div>
      <span className="text-[10px] text-white text-center leading-tight drop-shadow-sm">
        {label}
      </span>
    </div>
  );
};

export default DesktopIcon;
