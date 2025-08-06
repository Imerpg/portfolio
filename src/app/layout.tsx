import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import { FaArrowDown } from "react-icons/fa";

const josefin_Sans = Josefin_Sans({
  weight: "100",
  subsets: ['latin'],
});

const josefin_Sans_bold = Josefin_Sans({
  weight: "700",
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: "Portfolio - Rémi Constans",
  description: "Developper portfolio showcasing projects and skills",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefin_Sans.className} antialiased`}
        style={{userSelect: 'none'}}
      >
        {children}
      </body>
    </html>
  );
}
