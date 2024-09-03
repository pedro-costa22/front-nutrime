'use client';
import { Manrope } from 'next/font/google';
import '@/app/globals.css';
import ThemeSwitch from '@/components/ThemeButton';
import { TfiEmail } from 'react-icons/tfi';
import Input from '@/components/Input/page';
import Button from '@/components/Button';

const manrope = Manrope({ weight: ['700', '300', '500'], subsets: ['latin'] });

export default function ConfirmarEmail() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div
        className={`rounded-xl p-8  dark:bg-zinc-800 bg-white ring-1 ring-inset dark:ring-black/50 ring-slate-200/50 shadow-sm lg:min-w-[500px] lg:min-h-[550px] xl:max-w-[500px] xl:max-h-[600px] w-[80%] `}
      >
        <div className="flex items-center gap-1 justify-center w-full p-6">
          <span
            className={`text-brand w-full font-semibold text-xl md:text-2xl dark:text-gray-100 cursor-pointer ${manrope.className}`}
          >
            Nutri
            <span className="text-colors-primary"> Me</span>
          </span>

          <div className="flex w-full justify-end">
            <ThemeSwitch />
          </div>
        </div>

        <div
          className={`${manrope.className} flex flex-col justify-center items-center gap-2 dark:text-gray-200`}
        >
          <span className="border dark:border-bg-dark w-14 h-14 rounded-full flex justify-center items-center bg-colors-primary">
            <TfiEmail className="text-bg-white w-8 h-8 dark:text-bg-dark" />
          </span>
          <h4 className="text-center font-semibold text-gray-700 dark:text-bg-white text-xl md:text-2xl">
            Confirme seu Email
          </h4>

          <div className="flex flex-col gap-2 mt-2 ">
            <p className="text-xs md:text-sm">
              Para completar a criação da sua conta, precisamos verificar seu e-mail. Enviamos um
              código de segurança para o endereço que você cadastrou.
            </p>
            <p className="text-xs md:text-sm">
              Por favor, acesse seu e-mail e insira o código no campo abaixo para confirmar sua
              conta.
            </p>
            <p className="text-xs md:text-sm">
              Se não receber o e-mail dentro de alguns minutos, verifique sua pasta de spam ou
              clique em{' '}
              <span className="font-bold text-colors-primary underline cursor-pointer">
                Reenviar código{' '}
              </span>
              .
            </p>
          </div>

          <Input type="text" label="Código" name="code" customCss="mt-6" />
          <Button>Enviar</Button>
        </div>
      </div>
    </div>
  );
}
