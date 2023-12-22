import React from 'react';
import useTodoList from './../../Api/useTodoList';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ToDoList = () => {
    const axiosSecure = useAxiosSecure()
    const {todo:todos} = useTodoList()

    console.log(todos);

   const handleModify = async (action,id) =>{
     await axiosSecure.patch(`/edit-task/${id}`,{}).then((res) => {
      if (res.data.modifiedCount) {
        // Show success message using SweetAlert2
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your task has been Edited",
          showConfirmButton: false,
          timer: 1500,
        });
        // Redirect to the todo list in the dashboard after successful task addition
       
      }
    });
   }




    return (
      <div className="bg-black p-10">
        {/* Title */}
        <h1 className="sm:text-3xl text-2xl text-center font-medium title-font mb-4 text-white">
          To-Do List
        </h1>
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
              {todos.map((todo, i) => (
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
                    <button className="btn btn-outline btn-sm">Ongoing</button>
                    <button className="btn btn-outline btn-sm">
                      Completed
                    </button>
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
      </div>
    );
};

export default ToDoList;