import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUser as updateUserProfileAPI } from '../../apiServices/apiUsers';
import toast from 'react-hot-toast';

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUserProfile, isPending: isUpdating } = useMutation({
    mutationFn: (updatedUser) => updateUserProfileAPI(updatedUser),
    mutationKey: ['users'],
    onSuccess: () => {
      toast.success('User has been successfuly updated');
      queryClient.invalidateQueries({ mutationKey: ['users'] });
    },

    onError: () => {
      toast.error('Could not update the user ');
    },
  });

  return { updateUserProfile, isUpdating };
}
