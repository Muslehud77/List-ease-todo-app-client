import { useForm } from "react-hook-form";
import useContextInfo from "./../../Hooks/useContextInfo";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const EditTodo = () => {
  // Get user information using useContextInfo hook
  const { user } = useContextInfo();
    
  const {id} = useParams()

  const [task,setTask] = useState({})
  


  // Axios instance with authentication using useAxiosSecure hook
  const axiosSecure = useAxiosSecure();

  useEffect(()=>{

    axiosSecure.get(`/task/${id}`).then(res=>{
        setTask(res.data)
    })
   


  },[])




  // Navigate to different pages within the app using useNavigate hook
  const navigate = useNavigate();

  // CSS classes for input fields
  const inputClasses =
    "w-full rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out";

  // React Hook Form usage for form handling and validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Function to handle form submission
  const onSubmit = async (data) => {
    // Prepare task object with user information


    const todo = { 
        title: data.title || task.title,
        date: data.date || task.date,
        time: data.time || task.time,
        priority: data.priority || task.priority,
        details: data.details || task.details
        


    };
    // Send a POST request to add task endpoint
    await axiosSecure.patch(`/edit-task/${id}`, todo).then((res) => {
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
        navigate("/dashboard/todo-list");
      }
    });
  };

  return (
    <section className="text-white bg-black body-font relative">
      {/* Task Addition Section */}
      <div className="py-10">
        <div className="flex flex-col text-center w-full mb-12">
          {/* Title */}
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Edit Task
          </h1>
        </div>
        {/* Form for adding a task */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:w-1/2 md:w-2/3 mx-auto"
        >
          <div className="flex flex-wrap -m-2">
            {/* Input fields for task details */}
            {/* Title Input */}
            <div className="p-2 w-1/2">
              <div className="relative">
                <label className="leading-7 text-sm text-white">Title</label>
                {/* Title Input Field */}
                <input
                  defaultValue={task.title}
                  {...register("title")}
                  placeholder="Title Here"
                  className={`${inputClasses}`}
                />
                {/* Error message for Title input validation */}
                {errors.title && (
                  <span className="text-red-500">Title is required</span>
                )}
              </div>
            </div>
            {/* Date Input */}
            <div className="p-2 w-1/2">
              <div className="relative">
                <label className="leading-7 text-sm text-white">Date</label>
                {/* Date Input Field */}
                <input
                  defaultValue={task.date}
                  {...register("date")}
                  type="date"
                  className={`${inputClasses}`}
                />
                {/* Error message for Date input validation */}
                {errors.date && (
                  <span className="text-red-500">Date is required</span>
                )}
              </div>
            </div>
            {/* Time Input */}
            <div className="p-2 w-1/2">
              <div className="relative">
                <label className="leading-7 text-sm text-white">Time</label>
                {/* Time Input Field */}
                <input
                  defaultValue={task.time}
                  {...register("time")}
                  type="time"
                  className={`${inputClasses}`}
                />
                {/* Error message for Time input validation */}
                {errors.time && (
                  <span className="text-red-500">Time is required</span>
                )}
              </div>
            </div>
            {/* Priority Selection */}
            <div className="p-2 w-1/2">
              <div className="relative">
                <label className="leading-7 text-sm text-white">Priority</label>
                {/* Priority Selection Dropdown */}
                <select
                  defaultValue={task.priority}
                  {...register("priority")}
                  className={`${inputClasses} h-11`}
                >
                  <option>Low</option>
                  <option>Moderate</option>
                  <option>High</option>
                </select>
              </div>
            </div>
            {/* Details Textarea */}
            <div className="p-2 w-full">
              <div className="relative">
                <label className="leading-7 text-sm text-white">Details</label>
                {/* Details Textarea Field */}
                <textarea
                  defaultValue={task.details}
                  {...register("details")}
                  placeholder="Details here"
                  className="w-full rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
                {/* Error message for Details textarea validation */}
                {errors.details && (
                  <span className="text-red-500">Details is required</span>
                )}
              </div>
            </div>
            {/* Button for adding the task */}
            <div className="p-2 w-full flex justify-center">
              <button className="btn btn-outline outline-white outline text-white">
                Edit Task
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditTodo;
