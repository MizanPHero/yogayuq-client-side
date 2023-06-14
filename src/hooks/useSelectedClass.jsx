import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useSelectedClass = () => {
    const {user} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    
    const {isLoading, refetch, data: carts = [] } =useQuery({
        queryKey:['classes', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            return res.data;
        }
    })
    return [carts, isLoading, refetch]
};

export default useSelectedClass;