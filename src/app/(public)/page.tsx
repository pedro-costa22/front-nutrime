'use client';
import Button from '@/components/Button';
import ThemeSwitch from '@/components/ThemeButton';
import { MotionConfig, motion } from 'framer-motion';
import { Manrope } from 'next/font/google';
import Link from 'next/link';

const manrope = Manrope({ weight: ['700', '300', '500'], subsets: ['latin'] });

const transition = {
  ease: 'easeInOut',
  duration: 1.5,
};

export default function Home() {
  return (
    <>
      <div className="px-6 md:px-0">
        <header
          className={`w-full lg:w-2/3 flex h-24 items-center justify-between mx-auto z-10 ${manrope.className}`}
        >
          <div className="flex items-center gap-1 justify-between w-full">
            <span className={'text-brand font-semibold text-2xl dark:text-gray-100 cursor-pointer'}>
              Nutri
              <span className="text-colors-primary"> Me</span>
            </span>

            <ThemeSwitch />
          </div>
        </header>
      </div>

      <MotionConfig transition={transition}>
        <motion.div
          initial={{ opacity: 0, filter: 'blur(5px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
        >
          <main className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1
                className={`scroll-m-20 text-3xl font-bold tracking-tight sm:text-6xl dark:text-gray-100 text-gray-900 ${manrope.className}`}
              >
                A plataforma para quem se cuida!
              </h1>
              <p
                className={`mt-6 text-md px-4 md:p-0 md:text-lg leading-8  dark:text-gray-200 text-gray-600`}
              >
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout...
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href="/login">
                  <Button type="button">Acessar</Button>
                </Link>
              </div>
            </div>
          </main>
        </motion.div>
      </MotionConfig>
    </>
  );
}
