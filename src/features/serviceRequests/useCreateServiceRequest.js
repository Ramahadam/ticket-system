import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createServiceRequest as createServiceRequestAPI } from '../../apiServices/apiServiceRequests';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useCreateServiceRequest() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: createServiceRequest, isPending: isCreating } = useMutation({
    mutationFn: createServiceRequestAPI,
    mutationKey: ['serviceRequests'],
    onSuccess: (id) => {
      toast.success('Service request has been created successfuly');
      queryClient.invalidateQueries({ queryKey: ['serviceRequests'] });
      navigate(`/requests/${id}`);
    },

    onError: (error) => {
      console.error(error);
      toast.error('Service request could not be created');
    },
  });

  return { createServiceRequest, isCreating };
}
