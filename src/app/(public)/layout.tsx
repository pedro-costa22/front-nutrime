'use client';
import '@/app/globals.css';
import Head from './head';
import { useEffect } from 'react';
import { useTheme } from '@/stores/theme.store';

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
      <Head />
      <body className="dark:bg-bg-dark bg-bg-white">{children}</body>
    </html>
  );
}
