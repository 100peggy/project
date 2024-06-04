import { useQuery } from '@tanstack/react-query';
import { getBooking } from '../../services/apiBookings';

export const useBookings = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['bookings_02'],
    queryFn: getBooking(1),
  });
  return { data, isLoading, error };
};
