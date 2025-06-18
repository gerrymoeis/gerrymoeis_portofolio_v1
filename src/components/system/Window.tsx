import { motion, useDragControls } from "framer-motion";
import useWindowStore from "@/stores/windowStore";

interface WindowProps {
  id: string;
}

/**
 * Base Windows-XP-style window.
 * Provides a blue title-bar and silver body. Dragging is enabled via Framer Motion.
 * Resize handles will be added in a later iteration.
 */
const Window = ({ id }: WindowProps) => {
  const { windows, closeWindow, toggleMinimize, focusWindow, updateWindowPosition } = useWindowStore();
  const windowState = windows[id];
  const dragControls = useDragControls();

  if (!windowState || !windowState.isOpen) return null;

  return (
    <motion.div
      className="fixed resize overflow-hidden border border-[#0a0a0a] shadow-[2px_2px_2px_rgba(0,0,0,0.4)]"
      style={{ zIndex: windowState.zIndex, display: windowState.isMinimized ? 'none' : 'block' }}
      initial={{ x: windowState.position.x, y: windowState.position.y }}
      animate={{ x: windowState.position.x, y: windowState.position.y }}
      drag
      dragListener={false}
      dragControls={dragControls}
      onDragEnd={(_, info) => {
        const newX = windowState.position.x + info.offset.x;
        const newY = windowState.position.y + info.offset.y;
        updateWindowPosition(id, { x: newX, y: newY });
      }}
      onMouseDown={() => focusWindow(id)}
    >
      {/* Title bar */}
      <div
        className="cursor-move select-none flex items-center justify-between px-2 h-6 text-white bg-gradient-to-r from-[#0a246a] to-[#3a6ea5]"
        onPointerDown={(e) => dragControls.start(e as any)}
      >
        <span className="text-xs font-bold">{windowState.title}</span>
        <div className="flex gap-1">
          <button
            onClick={() => toggleMinimize(id)}
            className="h-4 w-4 bg-[color:var(--luna-blueLight,theme(colors.luna.blueLight))] text-[8px] leading-4 border border-white"
          >
            _
          </button>
          <button
            onClick={() => closeWindow(id)}
            className="h-4 w-4 bg-red-600 text-[8px] leading-4 border border-white"
          >
            X
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="relative bg-[color:var(--luna-silver,theme(colors.luna.silverLight))] p-2 text-black tiny5-regular text-sm">
        {windowState.content}
        {/* resize grip */}
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-[linear-gradient(135deg,transparent_0%,transparent_40%,#7f7f7f_40%,#7f7f7f_60%,transparent_60%,transparent_100%)] pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default Window;
