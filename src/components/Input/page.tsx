import { Manrope } from 'next/font/google';
import { useState, useEffect, useRef } from 'react';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';

type InputType = 'text' | 'email' | 'password' | 'number' | 'date';

type InputProps = {
  type: InputType;
  label: string;
  name: string;
  customCss?: string;
  register?: any;
};

const manrope = Manrope({ weight: ['700', '300', '500'], subsets: ['latin'] });

export default function Input({ type, label, name, customCss, register }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const [_type, setType] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(event.target.value.length > 0);
  };

  const handleShowPassword = () => {
    if (_type === 'password') return setType('text');

    return setType('password');
  };

  const handleFocus = () => {
    setIsFocused(true);
    if (type === 'date') return setType('date');
  };
  const handleBlur = () => {
    setIsFocused(false);
    if (!hasValue) return setType('text');
  };

  const handleLabelClick = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    setType(type === 'date' ? 'text' : type);
  }, [type]);

  return (
    <div className={`my-2 relative ${customCss ? customCss : ''} w-full`}>
      <label
        className={`absolute cursor-text top-3 text-sm font-semibold transition-transform duration-300 ${manrope.className}
          ${isFocused || hasValue ? 'transform -translate-y-7 text-xs' : 'left-3'} dark:text-bg-white text-colors-text_grey`}
        onClick={handleLabelClick}
      >
        {label}
      </label>
      <input
        type={_type}
        name={name}
        ref={inputRef}
        className={`border dark:border-colors-text_grey w-full outline-none py-3 pl-4 rounded-lg dark:bg-bg-dark dark:border-transparent dark:text-bg-white bg-bg-white focus:border-colors-primary dark:focus:border-colors-primary shadow-sm ${manrope.className} text-sm`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleInputChange}
        {...register}
      />

      {type === 'password' && (
        <span
          className="absolute top-3 right-2 cursor-pointer hover:bg-slate-300 transition duration-200 rounded-xl w-5 h-5 flex items-center justify-center"
          onClick={handleShowPassword}
        >
          {_type === 'password' ? (
            <IoEyeOffOutline className="dark:text-bg-white" />
          ) : (
            <IoEyeOutline className="dark:text-bg-white" />
          )}
        </span>
      )}
    </div>
  );
}
