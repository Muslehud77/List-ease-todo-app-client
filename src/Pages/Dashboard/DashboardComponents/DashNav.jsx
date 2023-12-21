import { NavLink } from "react-router-dom";


const DashNav = () => {
    const active = "btn w-full btn-sm rounded-none border-black bg-white";
    const pending = "btn w-full btn-sm rounded-none bg-black text-white hover:text-black";
    const idle = "btn w-full btn-sm rounded-none bg-black text-white hover:text-black";
    return (
      <div>
        <div className="px-2">
          <h1 className="text-3xl font-serif text-center bg-black text-white p-5">
            Dashboard
          </h1>
        </div>
        <ul className="menu ">
          <li>
            <NavLink
              end={true}
              to={"/dashboard"}
              className={({ isActive, isPending }) =>
                isPending ? pending : isActive ? active : idle
              }
            >
              Add Task
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/dashboard/todo-list"}
              className={({ isActive, isPending }) =>
                isPending ? pending : isActive ? active : idle
              }
            >
              To-Do List
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dashboard/on-going"}
              className={({ isActive, isPending }) =>
                isPending ? pending : isActive ? active : idle
              }
            >
              On-Going Tasks
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dashboard/completed"}
              className={({ isActive, isPending }) =>
                isPending ? pending : isActive ? active : idle
              }
            >
              Completed Tasks
            </NavLink>
          </li>
        </ul>
      </div>
    );
};

export default DashNav;