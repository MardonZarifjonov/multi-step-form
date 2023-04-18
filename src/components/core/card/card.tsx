import { PropsWithChildren } from 'react';

export function Card({ children }: PropsWithChildren) {
  return (
    <div className='flex justify-between gap-5 flex-col md:flex-row bg-white rounded-xl w-full max-w-[46rem] p-4 h-full max-h-[568px]'>
      {children}
    </div>
  );
}
