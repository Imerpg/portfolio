import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefin_Sans = Josefin_Sans({
  weight: "100",
  subsets: ['latin'],
});

export const metadata = {
  title: "Rémi Constans | Portfolio",
  description: "Développeur Concepteur C# / .NET & Web",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🗒️</text></svg>",
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
