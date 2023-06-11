import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
const useSelectedClass = () => {
  const { user, loading } = useAuth();
  // const token = localStorage.getItem('access-token');
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: selectedclass = [] } = useQuery({
    queryKey: ["selectedclass", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/selectedclass?email=${user?.email}`);
      console.log("res from axios", res);
      return res.data;
    },
  });

  return [selectedclass, refetch];
};
export default useSelectedClass;

// queryFn: async () => {
//     const res = await fetch(`https://bistro-boss-server-deployment.vercel.app/carts?email=${user?.email}`, { headers: {
//         authorization: `bearer ${token}`
//     }})
//     return res.json();
// },
