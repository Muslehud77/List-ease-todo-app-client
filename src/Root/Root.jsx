
import { Outlet } from 'react-router-dom';
import useContextInfo from '../Hooks/useContextInfo';


const Root = () => {

    const data = useContextInfo()


    return (
        <div>
           
            <Outlet></Outlet>
        </div>
    );
};

export default Root;