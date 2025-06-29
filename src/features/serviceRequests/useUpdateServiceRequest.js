import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateServiceReqeust as updateServiceReqeustAPI } from '../../apiServices/apiServiceRequests';

import toast from 'react-hot-toast';

function useUpdateServiceRequest() {
  const queryClient = useQueryClient();

  const { mutate: updateServiceReqeust, isPending } = useMutation({
    mutationFn: ({ ticket, editId }) => updateServiceReqeustAPI(ticket, editId),
    mutationKey: ['serviceRequests'],
    onSuccess: () => {
      toast.success('Ticket has been updated successfuly');
      queryClient.invalidateQueries({ queryKey: ['serviceRequests'] });
    },

    onError: () => {
      toast.error('Ticket could not be updated');
    },
  });

  return { updateServiceReqeust, isPending };
}

export default useUpdateServiceRequest;
