"use client";
import dynamic from 'next/dynamic';
import Image from 'next/image';
import DesktopIcon from './DesktopIcon';
import useWindowStore from '@/stores/windowStore';
import Taskbar from "@/components/system/Taskbar";

const Window = dynamic(() => import('@/components/system/Window'), { ssr: false });

/**
 * Full-screen desktop area with classic XP wallpaper gradient (placeholder) and Taskbar.
 */
const Desktop = () => {
  const { windows } = useWindowStore();
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Bliss wallpaper */}
      <Image src="/bliss-wallpaper.jpg" alt="Bliss wallpaper" fill priority style={{ objectFit: 'cover', zIndex: -1 }} />
      {/* Desktop Icons */}
      <div className="absolute top-2 left-2 flex flex-col items-start">
        <DesktopIcon id="aboutMeIcon" label="About Me" icon="👤" windowConfig={{ id: 'aboutMe', title: 'About Me', content: windows['aboutMe']?.content, position: { x: 100, y: 100 } }} />
        <DesktopIcon id="projectsIcon" label="Projects" icon="🗂" windowConfig={{ id: 'projects', title: 'Projects', content: windows['projects']?.content, position: { x: 350, y: 140 } }} />
      </div>

      {/* Open Windows */}
      {Object.keys(windows).map(id => <Window key={id} id={id} />)}
      <Taskbar />
    </div>
  );
};

export default Desktop;
