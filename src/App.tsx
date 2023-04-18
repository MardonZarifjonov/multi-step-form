import Card from 'components/core/card';
import Container from 'components/layout/container';
import NavButtons from 'components/layout/nav-buttons';
import Sidebar from 'components/layout/sidebar';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <Container>
      <Card>
        <Sidebar />
        <div className='flex flex-col justify-between w-full'>
          <Outlet />
          <NavButtons />
        </div>
      </Card>
    </Container>
  );
}
