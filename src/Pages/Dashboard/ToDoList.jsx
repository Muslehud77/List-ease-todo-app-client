
import useTodoList from './../../Api/useTodoList';

import ListTable from './DashboardComponents/ListTable';

const ToDoList = () => {

    const {todo:todos,refetch,isFetching} = useTodoList()

 

  




    return (
      <div className="bg-black p-10">
        {/* Title */}
        <h1 className="sm:text-3xl text-2xl text-center font-medium title-font mb-4 text-white">
          To-Do List
        </h1>
        {isFetching ? (
          <div className="flex justify-center items-center py-10">
            <progress className="progress w-56 bg-white"></progress>
          </div>
        ) : (
          <>
            {todos.length > 0 ? (
              <ListTable lists={todos} refetch={refetch} from={"todo"} />
            ) : (
              <h1 className="sm:text-3xl mt-10 text-black py-5 bg-white text-2xl text-center font-medium title-font mb-4 ">
                There is no Todo task!
              </h1>
            )}
          </>
        )}
      </div>
    );
};

export default ToDoList;