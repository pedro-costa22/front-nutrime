import { Manrope } from 'next/font/google';
import { useState } from 'react';

type CheckboxProps = {
  name: string;
  label: string;
  customCss?: string;
};

const manrope = Manrope({ weight: ['700', '300', '500'], subsets: ['latin'] });

export default function Checkbox({ name, label, customCss }: CheckboxProps) {
  const [checked, setChecked] = useState(false);

  return (
    <div className={`flex items-center gap-1 ${customCss ? customCss : ''}`}>
      <input
        type="checkbox"
        name={name}
        className="w-4 h-4"
        checked={checked}
        onChange={e => setChecked(e.target.checked)}
      />
      <label
        className={`text-xs md:text-sm text-colors-text_grey font-semibold ${manrope.className} dark:text-bg-white `}
        onClick={() => setChecked(!checked)}
      >
        {label}
      </label>
    </div>
  );
}
