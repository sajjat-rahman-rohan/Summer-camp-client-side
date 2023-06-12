import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
const useInstructorClasses = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: instructorClasses = [] } = useQuery({
    queryKey: ["instructorClasses", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/instructorClasses?email=${user?.email}`);
      console.log("res from axios", res);
      return res.data;
    },
  });

  return [instructorClasses, refetch];
};
export default useInstructorClasses;
