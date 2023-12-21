import { useNavigate } from "react-router-dom";
import useContextInfo from "../../Hooks/useContextInfo";
import { IoIosLogOut } from "react-icons/io";

const User = () => {
  const navigate = useNavigate()
  const {logout,user} = useContextInfo()
  
  const signOut = ()=>{
    logout().then(()=>{
      navigate('/')
    })
  }
    return (
      <div className="flex gap-5 mt-2">
        <div className="dropdown dropdown-end">
          <div tabIndex={5} role="button" className="">
            <div className="avatar online">
              <div className="w-12 rounded-full">
                <img
                  src={
                    user?.photoURL
                      ? user?.photoURL
                      : "https://www.eyedocs.co.uk/components/com_community/assets/user-anon.png"
                  }
                />
              </div>
            </div>
          </div>

          <ul
            tabIndex={5}
            className="dropdown-content hidden md:inline z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>{user?.displayName}</a>
            </li>
            <li>
              <a onClick={signOut}> Logout</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:hidden">
          <span>{user?.displayName}</span>
          <button onClick={signOut}
           
            className="text-xl">
            <IoIosLogOut />
          </button>
        </div>
      </div>
    );
};

export default User;