import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUser as updateUserProfileAPI } from '../../apiServices/apiUsers';

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUserProfile, isPending: isUpdating } = useMutation({
    mutationKey: ['users'],
    mutationFn: ({ updatedUser, id }) => updateUserProfileAPI(updatedUser, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ mutationKey: ['users'] });
    },
  });

  return { updateUserProfile, isUpdating };
}
