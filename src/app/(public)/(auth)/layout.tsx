'use client';
import '@/app/globals.css';
import { useEffect } from 'react';
import { useTheme } from '@/stores/theme.store';
import Link from 'next/link';
import ThemeSwitch from '@/components/ThemeButton';
import { Manrope } from 'next/font/google';

const manrope = Manrope({ weight: ['700', '300', '500'], subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDarkMode] = useTheme(state => [state.isDarkMode]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <html lang="pt-br">
      <body className="dark:bg-bg-dark bg-bg-white">
        <div className="flex h-screen items-center justify-center">
          <div
            className={`rounded-xl p-8  dark:bg-zinc-800 bg-white ring-1 ring-inset dark:ring-black/50 ring-slate-200/50 shadow-sm lg:min-w-[500px] lg:min-h-[550px] xl:max-w-[500px] xl:max-h-[600px] w-[80%] `}
          >
            <div className="flex items-center gap-1 justify-center w-full p-6">
              <Link href="/">
                <span
                  className={`text-brand font-semibold text-2xl dark:text-gray-100 cursor-pointer ${manrope.className}`}
                >
                  Nutri
                  <span className="text-colors-primary"> Me</span>
                </span>
              </Link>
            </div>
            <div className="flex w-full justify-end">
              <ThemeSwitch />
            </div>

            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
