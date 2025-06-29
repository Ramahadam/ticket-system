import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout as logoutApi } from '../../apiServices/apiAuth';

export function useLogout() {
  const queryClient = useQueryClient();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });

  return { logout, isPending };
}
