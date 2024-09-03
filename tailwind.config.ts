import { error } from 'console';
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        bg: {
          white: '#F9FAFB',
          dark: '#121317',
        },
        colors: {
          primary: '#F7CA00',
          primary_hover: '#DAB201',
          text_grey: '#575757',
        },
        error: '#FF4C4C',
        warning: '#FFA500',
        success: '#28A745',
      },
    },
  },
  plugins: [],
};
export default config;
