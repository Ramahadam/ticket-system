import { useMutation } from '@tanstack/react-query';
import { createUserProfile as createUserProfileAPI } from '../../apiServices/apiUsers';

export function useCreateUser() {
  const { mutate: createUserProfile, isPending: isCreating } = useMutation({
    mutationKey: ['users'],
    mutationFn: (user) => createUserProfileAPI(user),
    onSuccess: (user) => {
      alert(`Successfully create${user.name}`);
    },
  });

  return { createUserProfile, isCreating };
}
