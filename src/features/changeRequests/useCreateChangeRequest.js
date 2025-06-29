import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createChangeRequest as createChangeRequestAPI } from '../../apiServices/apiChangeRequests';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useCreateChangeRequest() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: createChangeRequest, isPending: isCreating } = useMutation({
    mutationFn: createChangeRequestAPI,
    mutationKey: ['changeRequests'],
    onSuccess: (id) => {
      console.log(id);
      toast.success('Ticket has been created successfuly');
      queryClient.invalidateQueries({ queryKey: ['changeRequests'] });
      navigate(`/change/${id}`);
    },

    onError: (error) => {
      console.error(error);
      toast.error('Ticket could not be created');
    },
  });

  return { createChangeRequest, isCreating };
}
