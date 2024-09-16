'use client';
import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import Input from '@/components/Input';
import Select from '@/components/Select';
import { useUserStore } from '@/stores/user.store';
import { Manrope } from 'next/font/google';
import { useRef, useState } from 'react';

const manrope = Manrope({ weight: ['700', '300', '500', '700'], subsets: ['latin'] });

export default function Register() {
  const [setUser] = useUserStore(state => [state.setUser]);
  const [step, setStep] = useState(1);
  const formRef = useRef<any>();

  const handleContinue = () => {
    setStep(2);
  };

  const handleSubmit = async (form: any) => {
    form.preventDefault();
    setUser({
      name: 'Pedro',
      emailActive: false,
    });
  };

  return (
    <form onSubmit={handleSubmit} method="POST" ref={formRef}>
      <div className="w-full justify-center flex my-6 col-span-2 gap-2 items-center">
        <span
          className={`w-10 h-10 border dark:border-bg-dark flex justify-center items-center rounded-full ${manrope.className} font-bold  ${step >= 1 ? 'bg-colors-primary text-bg-white dark:text-bg-dark' : 'text-gray'}`}
        >
          1
        </span>
        <div
          className={`w-12 h-px ${step === 2 ? 'bg-colors-primary' : 'bg-gray-200 dark:bg-bg-dark'}`}
        />
        <span
          className={`w-10 h-10 border dark:border-bg-dark flex justify-center items-center rounded-full ${manrope.className} font-bold ${step === 2 ? 'bg-colors-primary text-bg-white dark:text-bg-dark' : 'text-colors-text_grey'}`}
        >
          2
        </span>
      </div>

      {step === 1 && (
        <div className="grid grid-cols-2 gap-2">
          <Input type="text" label="Nome" name="nome" customCss="col-span-2 md:col-span-1" />
          <Select
            label="Tipo de usuário"
            customCss="col-span-1"
            options={[
              { text: 'Tipo de usuário', value: '' },
              { text: 'Nutricionista', value: '1' },
              { text: 'Comum', value: '2' },
            ]}
          />
          <Input type="email" label="E-mail" name="email" customCss="col-span-2" />
          <Input type="password" label="Senha" name="senha" customCss="col-span-2" />
          <Input
            type="password"
            label="Confirmar senha"
            name="confirm_password"
            customCss="col-span-2"
          />

          <Button type="button" customCss="mt-4 col-span-2" handleClick={handleContinue}>
            Continuar
          </Button>
        </div>
      )}

      {step === 2 && (
        <div className="grid grid-cols-2 col-span-2 gap-2">
          <Input
            type="date"
            label="Data de Nascimento"
            name="idade"
            customCss="col-span-2 md:col-span-1"
          />
          <Input type="number" label="Altura" name="altura" customCss="col-span-2 md:col-span-1" />
          <Input type="number" label="Peso" name="peso" customCss="col-span-2 md:col-span-1" />
          <Input type="text" label="Apelido" name="apelido" customCss="col-span-2 md:col-span-1" />

          <Select
            label="Genêro"
            customCss="col-span-2"
            options={[
              { text: 'Selecione', value: '' },
              { text: 'Masculino', value: 'masculino' },
              { text: 'Feminino', value: 'feminino' },
              { text: 'Transgênero', value: 'transgenero' },
              { text: 'Não-binário', value: 'nao_binario' },
              { text: 'Gênero fluido', value: 'genero_fluido' },
              { text: 'Outro', value: 'outro' },
              { text: 'Prefiro não informar', value: 'nao_informado' },
            ]}
          />

          <div className="col-span-2 flex items-center mt-4">
            <Checkbox name="termos" label="" />
            <span
              className={`font-semibold text-sm dark:text-bg-white text-colors-text_grey ${manrope.className}`}
            >
              Li e aceito os{' '}
              <span className="font-bold underline cursor-pointer">termos de uso</span> *
            </span>
          </div>

          <Button
            type="button"
            customCss="mt-2 bg-gray-400 hover:bg-gray-600 col-span-2 md:col-span-1"
            handleClick={() => setStep(1)}
          >
            Voltar
          </Button>

          <Button type="submit" customCss="mt-2  col-span-2 md:col-span-1">
            Criar
          </Button>
        </div>
      )}
    </form>
  );
}
