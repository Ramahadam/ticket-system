import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../../apiServices/apiAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: login,
    isPending: isLoading,
    isSuccess,
  } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    mutationKey: ['user'],
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['user'],
      });
      navigate('/dashboard');
    },
    onError: (err) => {
      console.log('Error', err);
      toast.error('Provided email or password is not correct');
    },
  });

  return { login, isLoading, isSuccess };
}
