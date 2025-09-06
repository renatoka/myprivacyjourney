import { Separator } from '@/components/ui/separator';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'My Privacy Journey',
  description: 'A step-by-step recommendation tools and services to improving your online privacy.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-4">
          <div className="mx-auto max-w-6xl">{children}</div>
          <div className="mt-8 mb-4 flex flex-col items-center gap-2 text-sm text-gray-500 md:flex-row md:justify-center">
            <Link href="/" className="underline hover:text-gray-700">
              Home
            </Link>
            <Separator orientation="vertical" />
            <Link href="/sources" className="underline hover:text-gray-700">
              Sources
            </Link>
            <Separator orientation="vertical" />
            <Link
              href="https://github.com/renatoka/myprivacyjourney"
              className="underline hover:text-gray-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Star on GitHub
            </Link>
            <Separator orientation="vertical" />
          </div>
        </div>
      </body>
    </html>
  );
}
