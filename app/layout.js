import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next.js Tutorial',
  description: 'Build basic stuff with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen">
          <div className="h-1/6">
            <Navbar />
          </div>

          <main className="h-[70%] relative px-8 py-16 max-w-6xl mx-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
