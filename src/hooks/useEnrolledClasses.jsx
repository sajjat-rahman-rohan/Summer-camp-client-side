import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
const useEnrolledClasses = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: paymentcompleted = [] } = useQuery({
    queryKey: ["paymentcompleted", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/paymentscomplete?email=${user?.email}`);
      console.log("res from axios", res);
      return res.data;
    },
  });

  return [paymentcompleted, refetch];
};
export default useEnrolledClasses;
