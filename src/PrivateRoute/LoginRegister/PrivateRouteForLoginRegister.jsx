import { Navigate, useLocation } from "react-router-dom";
import useContextInfo from "../../Hooks/useContextInfo";

const PrivateRouteForLoginRegister = ({children}) => {
    const {loading,user} = useContextInfo()
    const {state} = useLocation()
   
    

    if(!user?.displayName){
        return children
    }
     if (loading) {
       return <div className="skeleton w-[100vw] h-[100vh] rounded-none"></div>;
     }

    return <Navigate to={state ? state : "/"} />
};

export default PrivateRouteForLoginRegister;