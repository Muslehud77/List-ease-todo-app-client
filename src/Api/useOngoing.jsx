import useAxiosSecure from "../Hooks/useAxiosSecure";
import useContextInfo from "../Hooks/useContextInfo";
import { useQuery } from "@tanstack/react-query";

// Custom hook to fetch the user's on-going list
const useOngoing = () => {
  // Access Axios instance with authentication
  const axiosSecure = useAxiosSecure();

  // Access user information from context
  const { user } = useContextInfo();

  // Fetch user's on-going list using tanstack-query
  const { data: onGoing = [], isFetching } = useQuery({
    queryKey: ["onGoing"], // Unique key for caching purposes
    queryFn: async () => {
      // Make an authenticated GET request to fetch user's tasks
      const res = await axiosSecure.get(`/all-tasks/${'onGoing'}/${user.email}`);
      return res.data; // Return the fetched tasks
    },
  });

  // Return fetched on-going list and its fetching state
  return { onGoing, isFetching };
};

export default useOngoing;
