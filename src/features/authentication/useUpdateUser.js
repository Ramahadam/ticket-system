import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUser as updateUserProfileAPI } from '../../apiServices/apiUsers';

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUserProfile, isPending: isUpdating } = useMutation({
    mutationFn: (updatedUser) => updateUserProfileAPI(updatedUser),
    mutationKey: ['users'],
    onSuccess: () => {
      queryClient.invalidateQueries({ mutationKey: ['users'] });
    },
  });

  return { updateUserProfile, isUpdating };
}
