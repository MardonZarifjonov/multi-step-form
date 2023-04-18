import classNames from 'classnames';
import { useMatch, useNavigate } from 'react-router-dom';

type SidebarStepProps = {
  step: number;
  title: string;
  path: string;
};

export function SidebarStep({ step, title, path }: SidebarStepProps) {
  const math = useMatch(path);
  const navigate = useNavigate();
  const stepIndicatorClass = classNames(
    'w-[30px] h-[30px] rounded-full border border-white grid place-items-center transition-all',
    { 'bg-slate-200 text-slate-700 border-slate-200': math }
  );

  return (
    <div
      className='flex items-center gap-4 text-white hover:cursor-pointer'
      role='presentation'
      onClick={() => navigate(path)}
    >
      <span className={stepIndicatorClass}>{step}</span>
      <div className='flex flex-col '>
        <span className='uppercase text-gray-300 text-xs'>step {step}</span>
        <p className='uppercase leading-none'>{title}</p>
      </div>
    </div>
  );
}
