import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../../apiServices/apiAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onSuccess: (user) => {
      console.log(user);
      queryClient.setQueryData({
        queryKey: ['user', user],
      });
      navigate('/dashboard', { replace: true });
    },
    onError: (err) => {
      console.log('Error', err);
      toast.error('Provided email or password is not correct');
    },
  });

  return { login, isLoading };
}
