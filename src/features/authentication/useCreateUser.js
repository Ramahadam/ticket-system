import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUserProfile as createUserProfileAPI } from '../../apiServices/apiUsers';
import toast from 'react-hot-toast';

export function useCreateUser() {
  const queryClient = useQueryClient();

  const { mutate: createUserProfile, isPending: isCreating } = useMutation({
    mutationKey: ['users'],
    mutationFn: (user) => createUserProfileAPI(user),
    onSuccess: () => {
      toast.success('User successfuly created');
      queryClient.invalidateQueries({ mutationKey: ['users'] });
    },
    onError: () => {
      toast.error('Could not create user');
    },
  });

  return { createUserProfile, isCreating };
}
