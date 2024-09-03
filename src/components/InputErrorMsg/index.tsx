import { Manrope } from 'next/font/google';

const manrope = Manrope({ weight: ['700', '300', '500'], subsets: ['latin'] });

export default function InputErrorMsg({ msg, customCss }: { msg: string; customCss?: string }) {
  return (
    <span
      className={`${customCss ?? ''} text-xs md:text-sm text-error font-semibold ${manrope.className} w-full mb-1`}
    >
      {msg}
    </span>
  );
}
