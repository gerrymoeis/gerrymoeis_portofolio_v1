"use client";
import Link from "next/link";

const menuItems = [
  { label: "About Me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
  { label: "Donate", href: "#donate" },
];

const StartMenu = () => {
  return (
    <div className="absolute bottom-8 left-0 mb-1 ml-1 w-48 rounded-sm border border-gray-700 bg-[color:var(--luna-silverLight,theme(colors.luna.silverLight))] shadow-lg">
      {menuItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="block px-3 py-1.5 text-xs hover:bg-[color:var(--luna-blueLight,theme(colors.luna.blueLight))] hover:text-white"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default StartMenu;
