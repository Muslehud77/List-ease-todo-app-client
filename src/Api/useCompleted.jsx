import useAxiosSecure from "../Hooks/useAxiosSecure";
import useContextInfo from "../Hooks/useContextInfo";
import { useQuery } from "@tanstack/react-query";

// Custom hook to fetch the user's completed list
const useCompleted = () => {
  // Access Axios instance with authentication
  const axiosSecure = useAxiosSecure();

  // Access user information from context
  const { user } = useContextInfo();

  // Fetch user's completed list using tanstack-query
  const { data: completed = [], isFetching } = useQuery({
    queryKey: ["completed"], // Unique key for caching purposes
    queryFn: async () => {
      // Make an authenticated GET request to fetch user's tasks
      const res = await axiosSecure.get(`/all-tasks/${'completed'}/${user.email}`);
      return res.data; // Return the fetched tasks
    },
  });

  // Return fetched completed list and its fetching state
  return { completed, isFetching };
};

export default useCompleted;
