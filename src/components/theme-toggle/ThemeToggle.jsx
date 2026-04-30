import { useTheme } from '../../contexts/ThemeContext';
import { HiSun, HiMoon } from 'react-icons/hi';

const ThemeToggle = ({ className = "" }) => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`theme-toggle h-[40px] w-[40px] lg:h-[2.5vw] lg:w-[2.5vw] cursor-pointer flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 ${className}`}
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      {isDark ? (
        <HiSun className="text-[20px] lg:text-[1.2vw]" />
      ) : (
        <HiMoon className="text-[20px] lg:text-[1.2vw]" />
      )}
    </button>
  );
};

export default ThemeToggle;