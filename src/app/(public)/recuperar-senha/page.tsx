'use client';
import Button from '@/components/Button';
import Input from '@/components/Input/page';
import ThemeSwitch from '@/components/ThemeButton';
import { Manrope } from 'next/font/google';
import { useState } from 'react';
import { TfiLock } from 'react-icons/tfi';

const manrope = Manrope({ weight: ['700', '300', '500'], subsets: ['latin'] });

export default function RecuperarSenha() {
  const [step, setStep] = useState(0);

  const handleSendCode = () => {
    setStep(1);
  };

  const handleSubmit = () => {};

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
            <TfiLock className="text-bg-white w-8 h-8 dark:text-bg-dark" />
          </span>

          <h4 className="text-center font-semibold text-gray-700 dark:text-bg-white text-xl md:text-2xl">
            Redefinição de Senha!
          </h4>

          {step === 0 ? (
            <>
              <div className="flex flex-col gap-2 mt-2 ">
                <p className="text-xs md:text-sm text-center">
                  Por favor, insira o e-mail que você usou para se cadastrar. Enviaremos um e-mail
                  com um código de verificação para que você possa redefinir sua senha.
                </p>
              </div>
              <Input type="email" label="E-mail" name="email" customCss="mt-6" />
              <Button handleClick={handleSendCode}>Enviar</Button>
            </>
          ) : (
            <>
              <div className="flex flex-col gap-2 mt-2 ">
                <p className="text-xs md:text-sm text-center">
                  Por favor, insira no campo abaixo o código de ativação que você acabou de receber
                  por e-mail e defina sua nova senha. <br />
                  Não recebeu o email ?{' '}
                  <span className="text-colors-primary underline cursor-pointer">
                    {' '}
                    Enviar novamente.{' '}
                  </span>
                </p>
              </div>
              <Input type="text" label="Código" name="code" customCss="mt-6" />
              <Input type="password" label="Nova senha" name="senha" />
              <Input type="password" label="Confirmar nova senha" name="confirma_senha" />
              <Button handleClick={handleSubmit}>Salvar</Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
