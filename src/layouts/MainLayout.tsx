import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';

const MainLayout: React.FC = () => {
  return (
    <div className='wrapper'>
      <Navigation />
      <main className='content'>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
