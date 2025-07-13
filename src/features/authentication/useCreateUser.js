import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUserProfile as createUserProfileAPI } from '../../apiServices/apiUsers';

export function useCreateUser() {
  const queryClient = useQueryClient();

  const { mutate: createUserProfile, isPending: isCreating } = useMutation({
    mutationKey: ['users'],
    mutationFn: (user) => createUserProfileAPI(user),
    onSuccess: () => {
      queryClient.invalidateQueries({ mutationKey: ['users'] });
    },
  });

  return { createUserProfile, isCreating };
}
