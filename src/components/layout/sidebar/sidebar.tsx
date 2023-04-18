import { routeSteps } from 'constants/routes';
import { SidebarStep } from './sidebar.step';

export function Sidebar() {
  return (
    <aside className='bg-sidebar-bg-sm md:bg-sidebar-bg-lg bg-no-repeat h-full bg-contain px-8 py-10 max-w-[267px] w-full flex flex-col gap-9'>
      {routeSteps.map((step) => (
        <Sidebar.Step
          key={step.step}
          step={step.step}
          title={step.label}
          path={step.path}
        />
      ))}
    </aside>
  );
}

Sidebar.Step = SidebarStep;
