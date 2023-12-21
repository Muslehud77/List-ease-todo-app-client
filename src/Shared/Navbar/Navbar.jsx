import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../../Assets/dark.png'
import User from './User';
import useContextInfo from '../../Hooks/useContextInfo';

const Navbar = () => {
    const {pathname} = useLocation()
    const {user} = useContextInfo()
    const active = 'btn w-full btn-sm rounded-none border-b-black bg-white'
    const pending = "btn w-full btn-sm rounded-none bg-white"
    const idle = "btn w-full btn-sm rounded-none bg-white";

    const links = (
      <>
        <li>
          <NavLink
            to={"/"}
            className={({ isActive, isPending }) =>
              isPending ? pending : isActive ? active : idle
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"/about"}
            className={({ isActive, isPending }) =>
              isPending ? pending : isActive ? active : idle
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/contact"}
            className={({ isActive, isPending }) =>
              isPending ? pending : isActive ? active : idle
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/dashboard"}
            className={({ isActive, isPending }) =>
              isPending ? pending : isActive ? active : idle
            }
          >
            Dashboard
          </NavLink>
        </li>

        {user?.displayName ? (
          <li className="ml-5">
            <User />
          </li>
        ) : (
          <li>
            <NavLink
              to={"/login"}
              className={({ isActive, isPending }) =>
                isPending ? pending : isActive ? active : idle
              }
            >
              Login
            </NavLink>
          </li>
        )}
      </>
    );




    return (
      <div
        className={`navbar ${
          pathname === "/" && "w-[60vw]"
        } absolute z-10 mt-2`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"} className="hidden md:flex">
            <img src={logo} className="w-32" />
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className=" flex justify-center items-center">{links}</ul>
        </div>
      </div>
    );
};

export default Navbar;