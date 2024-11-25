import type { Metadata } from "next";
import {Roboto_Flex} from 'next/font/google';
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";


const robotoFlex = Roboto_Flex({
  subsets: ['latin'],
  display: 'swap',
})
export const metadata: Metadata = {
  title: "Coffee Connoiseur",
  description: "Discover your local coffee shops. An amazing way to get to know your local businesses!",
  robots: 'index, follow'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoFlex.className} antialiased`}
      > <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
