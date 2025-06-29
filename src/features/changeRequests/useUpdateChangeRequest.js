import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateChangeRequest as updateChangeRequestAPI } from '../../apiServices/apiChangeRequests';

import toast from 'react-hot-toast';

function useUpdateChangeRequest() {
  const queryClient = useQueryClient();

  const { mutate: updateChangeRequest, isPending } = useMutation({
    mutationFn: ({ ticket, editId }) => updateChangeRequestAPI(ticket, editId),

    mutationKey: ['changeRequests'],

    onSuccess: () => {
      toast.success('Ticket has been updated successfuly');
      queryClient.invalidateQueries({ queryKey: ['changeRequests'] });
    },

    onError: () => {
      toast.error('Ticket could not be updated');
    },
  });

  return { updateChangeRequest, isPending };
}

export default useUpdateChangeRequest;
