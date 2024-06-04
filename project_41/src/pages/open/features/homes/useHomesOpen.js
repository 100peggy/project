import { useQuery } from '@tanstack/react-query';
import { getHome } from '../../../../services/apiHomes';

export const useHomesOpen = () => {
  const {
    data: make,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['make'],
    queryFn: getHome,
  });
  return { make, isLoading, error };
};
