
import { Outlet } from 'react-router-dom';
import useContextInfo from '../Hooks/useContextInfo';
import Navbar from '../Shared/Navbar/Navbar';


const Root = () => {

    const data = useContextInfo()


    return (
        <div className='relative'>
           <Navbar/>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;