'use client';
import { useTheme } from '@/stores/theme.store';
import { useEffect } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
        <p>menu aqui.</p>
        {children}
      </body>
    </html>
  );
}
