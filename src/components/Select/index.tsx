import { Manrope } from 'next/font/google';

type Options = {
  text: string;
  value: string;
};

type SelectProps = {
  label: string;
  options: Options[];
  customCss?: string;
};

const manrope = Manrope({ weight: ['700', '300', '500'], subsets: ['latin'] });

export default function Select({ label, options, customCss }: SelectProps) {
  return (
    <div className={`${customCss ? customCss : ''}`}>
      <select
        className={`my-2 border text-colors-text_grey text-sm font-semibold dark:border-colors-text_grey w-full outline-none py-3 pl-2 rounded-lg dark:bg-bg-dark dark:border-transparent dark:text-bg-white bg-bg-white focus:border-colors-primary dark:focus:border-colors-primary shadow-sm ${manrope.className} text-sm`}
      >
        {options?.map((opt: Options) => (
          <option
            value={opt?.value}
            key={opt.value}
            className={`${manrope.className} text-colors-text_grey text-sm font-semibold`}
          >
            {opt?.text}
          </option>
        ))}
      </select>
    </div>
  );
}
