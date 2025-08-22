import type { Metadata } from "next";
import localFont from 'next/font/local'
import { Sora } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const sora = Sora({
  variable: '--font-sora',
  subsets: ['latin']
})

const thedus = localFont({
  variable: "--font-thedus",
  src: [
    {
      path: '../assets/fonts/Thedus_Wide.otf',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../assets/fonts/Thedus_Condensed.otf',
      weight: '400',
      style: 'normal',
    }
  ],
})

export const metadata: Metadata = {
  title: "TITAN",
  description: "The fastest. Highest rewarding. Lowest trading fee. Telegram trading bot in history.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${thedus.variable} ${sora.variable} antialiased`}
      >
        {children}
        <Footer/>
      </body>
    </html>
  );
}
