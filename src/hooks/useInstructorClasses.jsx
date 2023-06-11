import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
const useInstructorClasses = () => {
  const { user, loading } = useAuth();
  // const token = localStorage.getItem('access-token');
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

// queryFn: async () => {
//     const res = await fetch(`https://bistro-boss-server-deployment.vercel.app/carts?email=${user?.email}`, { headers: {
//         authorization: `bearer ${token}`
//     }})
//     return res.json();
// },
