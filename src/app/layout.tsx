import type { Metadata } from "next";
// Tiny5 is loaded via CSS import in globals.css. No font imports needed here.
import "./globals.css";





export const metadata: Metadata = {
  title: "Gerry Moeis Portfolio - Windows XP Edition",
  description: "The creative Windows-XP-styled personal portfolio of Gerry Moeis – showcasing projects, blog and contact in a nostalgic desktop experience.",
  // Anda bisa menambahkan metadata lain di sini seperti openGraph, icons, dll.
  // openGraph: {
  //   title: 'Next.js Boilerplate Gen2',
  //   description: 'Kickstart your Next.js projects.',
  //   images: ['/og-image.png'], // Pastikan Anda memiliki gambar ini di public/
  // },
  // icons: {
  //   icon: '/favicon.ico', // Pastikan Anda memiliki favicon ini di public/
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="tiny5-regular antialiased"
      >
        {children}
      </body>
    </html>
  );
}
