
import { Outlet } from 'react-router-dom';
import useContextInfo from '../Hooks/useContextInfo';


const Root = () => {

    const data = useContextInfo()


    return (
        <div>
            <h1>Hello</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;