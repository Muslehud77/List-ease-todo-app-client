

import ListTable from "./DashboardComponents/ListTable";
import useOngoing from './../../Api/useOngoing';

const Ongoing = () => {
  const { onGoing, refetch, isFetching } = useOngoing();

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
          {onGoing.length > 0 ? (
            <ListTable lists={onGoing} refetch={refetch} from={"ongoing"} />
          ) : (
            <h1 className="sm:text-3xl mt-10 text-black py-5 bg-white text-2xl text-center font-medium title-font mb-4 ">
              There is no OnGoing task!
            </h1>
          )}
        </>
      )}
    </div>
  );
};

export default Ongoing;
