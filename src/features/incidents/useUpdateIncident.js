import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateIncident as updateIncidentAPI } from '../../apiServices/apiForIncidents';

import toast from 'react-hot-toast';

function useUpdateIncident() {
  const queryClient = useQueryClient();

  const { mutate: updateIncident, isPending } = useMutation({
    mutationFn: ({ ticket, editId }) => updateIncidentAPI(ticket, editId),

    mutationKey: ({ editId }) => ['incident', editId],

    onSuccess: (_, { editId }) => {
      toast.success('Ticket has been updated successfuly');
      queryClient.invalidateQueries({ queryKey: ['incident', editId] });
    },

    onError: () => {
      toast.error('Ticket could not be updated');
    },
  });

  return { updateIncident, isPending };
}

export default useUpdateIncident;
