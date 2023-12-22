import useAxiosSecure from "../Hooks/useAxiosSecure";
import useContextInfo from "../Hooks/useContextInfo";
import { useQuery } from "@tanstack/react-query";

// Custom hook to fetch the user's to-do list
const useTodoList = () => {
  // Access Axios instance with authentication
  const axiosSecure = useAxiosSecure();

  // Access user information from context
  const { user } = useContextInfo();

  // Fetch user's to-do list using tanstack-query
  const { data: todo = [], isFetching ,refetch} = useQuery({
    queryKey: ["todo"], // Unique key for caching purposes
    queryFn: async () => {
      // Make an authenticated GET request to fetch user's tasks
      const res = await axiosSecure.get(`/all-tasks/${'todo'}/${user.email}`);
      return res.data; // Return the fetched tasks
    },
  });

  // Return fetched to-do list and its fetching state
  return { todo, isFetching, refetch };
};

export default useTodoList;
