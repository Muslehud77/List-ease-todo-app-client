
import { Outlet } from 'react-router-dom';
import DashNav from './DashboardComponents/DashNav';

const Dashboard = () => {
    return (
      <div className="mt-36 container mx-auto">
        
        <div className="md:grid grid-cols-12 gap-5">
          <div className="col-span-3">
            <DashNav />
          </div>
          <div className='col-span-9 mb-10'>
            <Outlet />
          </div>
        </div>
      </div>
    );
};

export default Dashboard;