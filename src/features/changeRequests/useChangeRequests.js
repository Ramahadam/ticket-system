import { useQuery } from '@tanstack/react-query';
import { fetchChangeRequests } from '../../apiServices/apiChangeRequests';

function useChangeRequests() {
  const {
    data: changeRequests,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['changeRequests'],
    queryFn: fetchChangeRequests,
  });

  return { changeRequests, error, isLoading };
}

export default useChangeRequests;
