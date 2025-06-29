import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getServiceRequest } from '../../apiServices/apiServiceRequests';
import { useParams } from 'react-router-dom';

export function useServiceRequest() {
  const { id } = useParams();

  const queryClient = useQueryClient();

  const {
    isLoading,
    error,
    data: serviceRequest,
  } = useQuery({
    queryKey: ['serviceRequests', id],
    queryFn: () => getServiceRequest(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['serviceRequests', id],
      });
    },
  });

  return { isLoading, error, serviceRequest };
}
