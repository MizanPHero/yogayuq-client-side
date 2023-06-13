import { useQuery } from '@tanstack/react-query';

const useAllClasses = () => {
  const { isLoading, refetch, data: classes = [] } = useQuery({
    queryKey: ['allClasses'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/allclasses');
      return res.json();
    },
  });

  return [classes, isLoading, refetch];
};

export default useAllClasses;
