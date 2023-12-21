import { Navigate, useLocation } from "react-router-dom";
import useContextInfo from "../../Hooks/useContextInfo";


const PrivateRouteForDashboard = ({children}) => {
    const {pathname} = useLocation()
    const {user,loading} = useContextInfo()

    if (loading) {
      return <div className="skeleton w-[100vw] h-[100vh] rounded-none"></div>;
    }
     if (!user) {
       return <Navigate state={pathname} to={"/login"} />;
     }

    return children
};

export default PrivateRouteForDashboard;