import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUser as deleteUserApi } from '../../apiServices/apiUsers';

export function useDeleteUser() {
  const queryClient = useQueryClient();

  const { mutate: deleteUser, isPending: isLoading } = useMutation({
    queryKey: ['users'],
    mutationFn: (id) => deleteUserApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  return { deleteUser, isLoading };
}
