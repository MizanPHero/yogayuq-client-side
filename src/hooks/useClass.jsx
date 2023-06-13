import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useClass = () => {
    const {user} = useContext(AuthContext)
    
    const {isLoading, refetch, data: classes = [] } =useQuery({
        queryKey:['classes', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/classes?email=${user?.email}`)
            return res.json();
        }
    })
    return [classes, isLoading, refetch]
};

export default useClass;