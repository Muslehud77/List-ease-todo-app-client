import ListTable from "./DashboardComponents/ListTable";

import useCompleted from './../../Api/useCompleted';

const Completed = () => {
  const { completed, refetch, isFetching } = useCompleted();

  return (
    <div className="bg-black p-10">
      {/* Title */}
      <h1 className="sm:text-3xl text-2xl text-center font-medium title-font mb-4 text-white">
        Completed List
      </h1>
      {isFetching ? (
        <div className="flex justify-center items-center py-10">
          <progress className="progress w-56 bg-white"></progress>
        </div>
      ) : (
        <> {completed.length > 0 ? (
        <ListTable lists={completed} refetch={refetch} from={"completed"} />
      ) : (
        <h1 className="sm:text-3xl mt-10 text-black py-5 bg-white text-2xl text-center font-medium title-font mb-4 ">
         You haven't Completed any!
        </h1>
      )}</>) }
     
    </div>
  );
};

export default Completed;
