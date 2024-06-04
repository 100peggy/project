import { useQuery } from '@tanstack/react-query';
import { getHome } from '../../services/apiHomes';

export const useHome = (id) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['home', id],
    queryFn: () => getHome(id),
  });
  return { data, isLoading, error };
};
