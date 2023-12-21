
import { Outlet } from 'react-router-dom';
import useContextInfo from '../Hooks/useContextInfo';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';


const Root = () => {

    const data = useContextInfo()


    return (
        <div className='relative'>
           <Navbar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Root;