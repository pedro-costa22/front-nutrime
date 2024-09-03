'use client';
import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import Input from '@/components/Input/page';
import { Manrope } from 'next/font/google';
import Link from 'next/link';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from '@/validations/login.validate';
import InputErrorMsg from '@/components/InputErrorMsg';

const manrope = Manrope({ weight: ['700', '300', '500'], subsets: ['latin'] });

export default function Login() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (form: any) => {
    try {
      console.log('form', form);
      setLoading(true);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2">
      <Input
        type="email"
        label="E-mail"
        customCss="col-span-2 mt-4"
        name="email"
        register={{ ...register('email', { required: true }) }}
      />
      {errors.email && (
        <InputErrorMsg msg={errors.email?.message as string} customCss="col-span-2" />
      )}

      <Input
        type="password"
        label="Senha"
        customCss="col-span-2 mt-2.5"
        name="password"
        register={{ ...register('password', { required: true, minLength: 6 }) }}
      />
      {errors.password && (
        <InputErrorMsg msg={errors.password?.message as string} customCss="col-span-2" />
      )}

      <div className="col-span-2 flex flex-col md:flex-row md:justify-between">
        <Checkbox name="lembrar" label="Lembrar-me" customCss="mt-2" />
        <Link href="/recuperar-senha" className="flex justify-end mt-2">
          <span
            className={`text-xs md:text-sm text-colors-text_grey font-semibold ${manrope.className} transition duration-200 hover:text-colors-primary dark:text-bg-white dark:hover:text-colors-primary`}
          >
            Esqueceu sua senha ?
          </span>
        </Link>
      </div>

      <Button type="submit" customCss="mt-6 mb-2 col-span-2" loading={loading} disabled={loading}>
        Entrar
      </Button>

      <div className="inline-flex items-center justify-center w-full col-span-2">
        <hr className="w-full h-px my-6 bg-gray-200 border-0 dark:bg-bg-dark" />
        <span className="absolute px-3 font-medium text-gray-500 -translate-x-1/2 bg-white left-1/2 dark:text-bg-dark dark:bg-zinc-800">
          ou
        </span>
      </div>

      <Button
        type="button"
        color="bg-bg-white"
        customCss="mt-2 mb-4 col-span-2 border dark:border-transparent dark:bg-bg-dark hover:bg-gray-100 dark:hover:bg-zinc-900"
      >
        <FcGoogle className="h-6 flex justify-center w-full" />
      </Button>

      <div
        className={`text-xs md:text-sm text-colors-text_grey font-semibold ${manrope.className} flex justify-center w-full mt-6 gap-1 dark:text-bg-white col-span-2`}
      >
        Não possui uma conta ?
        <span className="text-colors-primary cursor-pointer hover:underline">
          <Link href="/registro">Criar agora</Link>
        </span>
      </div>
    </form>
  );
}
