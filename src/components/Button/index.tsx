import { useTheme } from '@/stores/theme.store';
import { Manrope } from 'next/font/google';
import ReactLoading from 'react-loading';

type ButtonType = 'button' | 'submit' | 'reset';

type ButtonProps = {
  type?: ButtonType;
  children?: React.ReactNode;
  color?: string;
  customCss?: string;
  loading?: boolean;
  disabled?: boolean;
  handleClick?: () => any;
};

const manrope = Manrope({ weight: ['700', '300', '500'], subsets: ['latin'] });

export default function Button({
  type,
  children,
  color,
  customCss,
  loading,
  disabled,
  handleClick,
}: ButtonProps) {
  const [isDarkMode] = useTheme(state => [state.isDarkMode]);

  return (
    <button
      type={type}
      className={`${customCss ? customCss : ''} py-2 px-8 w-full ${color ? color : 'bg-colors-primary'} rounded-2xl ${manrope.className} dark:text-bg-dark text-white font-bold shadow-sm cursor-pointer transition-colors hover:bg-colors-primary_hover`}
      disabled={disabled}
      onClick={handleClick}
    >
      {!loading ? (
        <>{children}</>
      ) : (
        <div className="w-full flex justify-center items-center">
          <ReactLoading
            type="spin"
            color={isDarkMode ? '#121317' : '#F9FAFB'}
            height={24}
            width={24}
          />
        </div>
      )}
    </button>
  );
}
