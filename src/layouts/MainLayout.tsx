import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';

const MainLayout: React.FC = () => {
  return (
    <div className='wrapper'>
      <Navigation />
      <div className='content'>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
