import { Button } from 'antd';
import classNames from 'classnames';
import { routeSteps } from 'constants/routes';
import { useLocation, useNavigate } from 'react-router-dom';

export function NavButtons() {
  const location = useLocation();
  const route = routeSteps.find((step) => step.path === location.pathname);
  const navigate = useNavigate();
  const navButtonsClass = classNames('flex items-center', {
    'justify-between': route?.prev && route?.next,
    'justify-end': !route?.prev && route?.next,
    'justify-start': route?.prev && !route?.next,
  });

  return (
    <div className={navButtonsClass}>
      {route?.prev && (
        <Button
          size='large'
          type='ghost'
          onClick={() => navigate(route?.prev)}
          color='#9899A2'
          style={{ color: '#9899A2' }}
        >
          Go back
        </Button>
      )}
      {route?.next && (
        <Button size='large' onClick={() => navigate(route?.next)}>
          Next Step
        </Button>
      )}
    </div>
  );
}
