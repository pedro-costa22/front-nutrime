import { useTheme } from '@/stores/theme.store';

export default function ThemeSwitch() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="flex items-center">
      <span className="mr-2 text-gray-900 dark:text-gray-200">{isDarkMode ? '🌙' : '🌞'}</span>
      <div
        onClick={toggleTheme}
        className={`relative inline-flex items-center cursor-pointer w-12 h-6 rounded-full transition-colors duration-300 ease-in-out ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}
      >
        <span
          className={`absolute block w-6 h-6 bg-white rounded-full transition-transform duration-300 ease-in-out transform ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}`}
        />
      </div>
    </div>
  );
}
