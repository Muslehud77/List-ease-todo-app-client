import { Toaster } from "react-hot-toast";
import { Outlet, useLocation } from "react-router-dom";
import useContextInfo from "../Hooks/useContextInfo";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Root = () => {
  const data = useContextInfo();
  const {pathname} = useLocation()
  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-grow">
        <Outlet></Outlet>
      </div>
      {!pathname.includes("dashboard") && <Footer />}
      <Toaster />
    </div>
  );
};

export default Root;
