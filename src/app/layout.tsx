import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { clsx } from "clsx";
import { BubbleUnderlay } from "@/components/BubbelUnderLay";
import NoSSR from '@/hooks/NoSSR';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Build.Your.Resume',
  description: 'Generated Your Resume online free, fast and easy with simple clicks.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          // "bg-white",
          // "text-black",
          "bg-[#12141D]",
          "text-[#E0E0E0]",
          "min-h-screen",
          "min-w-full",
          "relative"
        )}
      >
        <NoSSR>
          <BubbleUnderlay
            className={clsx(
              "fixed",
              "top-0 left-0",
              "w-full h-full",
              "-z-10",
              "pointer-events-none",
              "select-none"
            )}
          />
        </NoSSR>
        {children}
      </body>
    </html>
  );
}
