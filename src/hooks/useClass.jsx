import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';


const useClass = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    
    const {isLoading, refetch, data: classes = [] } = useQuery({
        queryKey:['classes', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/classes?email=${user?.email}`)
            return res.data;
        }
    })
    return [classes, isLoading, refetch]
};

export default useClass;