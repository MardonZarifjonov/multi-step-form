import { PropsWithChildren } from 'react';

export function Container({ children }: PropsWithChildren) {
  return (
    <main className='p-4 h-screen w-screen grid place-items-center bg-slate-100 font-[Ubuntu]'>
      {children}
    </main>
  );
}
