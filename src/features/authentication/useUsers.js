import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getUsers } from '../../apiServices/apiUsers.js';

export function useUsers() {
  const queryClient = useQueryClient();

  const {
    isLoading,
    data: users,
    error,
  } = useQuery({
    queryKey: ['users'],
    queryFn: () => getUsers(),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['users'],
      });
    },
  });

  return { isLoading, users, error };
}
