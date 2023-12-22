/* eslint-disable react/prop-types */

import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ListTable = ({lists,refetch,from}) => {
 const axiosSecure = useAxiosSecure();









    const handleModify = async (action, id) => {
      await axiosSecure
        .patch(`/edit-task/${id}`, { task: action })
        .then((res) => {
          if (res.data.modifiedCount) {
            // Show success message using SweetAlert2
            Swal.fire({
              position: "center",
              icon: "success",
              title: `Your task is now ${action}`,
              showConfirmButton: false,
              timer: 1500,
            });
           refetch()
          }
        });
    };
    return (
      <div className="overflow-x-auto bg-white">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Description</th>
              <th>Priority</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {lists.map((todo, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{todo.title}</td>
                <td>{todo.details}</td>
                <td>{todo.priority}</td>
                <td className="">
                  <span className="bg-black text-white p-1 rounded-md">
                    {" "}
                    {todo.date}/{todo.time}
                  </span>
                </td>
                <td className="space-x-2">
                  {from === "todo" || from === "completed" ? (
                    <button
                      onClick={() => handleModify("onGoing", todo._id)}
                      className="btn btn-outline btn-sm"
                    >
                      Ongoing
                    </button>
                  ) : (
                    ""
                  )}
                  {from === "ongoing" || from === "completed" ? (
                    <button
                      onClick={() => handleModify("todo", todo._id)}
                      className="btn btn-outline btn-sm"
                    >
                      Todo
                    </button>
                  ) : (
                    ""
                  )}
                  {from === "ongoing" || from === "todo" ? (
                    <button
                      onClick={() => handleModify("completed", todo._id)}
                      className="btn btn-outline btn-sm"
                    >
                      Completed
                    </button>
                  ) : (
                    ""
                  )}

                 
                  <Link
                    to={`/dashboard/edit-task/${todo._id}`}
                    className="btn btn-outline btn-sm"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default ListTable;