import Logo from '../../ui/Logo';
import Input from '../../ui/Input';
import { useLogin } from './useLogin';
import { useForm } from 'react-hook-form';

function LoginForm() {
  const { login, isLoading } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    login(data);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Logo className=" h-20 w-56 mb-8" />
      <div className="flex flex-col items-center w-[48rem] bg-white mx-auto rounded-lg">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[35rem] p-10 text-center flex flex-col"
        >
          <h1 className="mb-14 text-3xl">Login to your account</h1>

          <div className="input-group flex flex-col gap-8 mb-8">
            <Input
              defaultValue="adam@itms.com"
              register={register('email', {
                required: 'Email is required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Please enter a valid email',
                },
              })}
              type="email"
              name="email"
              placeholder="Email"
              label="Enter your email id:"
              error={errors?.email?.message}
            />

            <Input
              defaultValue="12345"
              name="password"
              label="Enter password:"
              register={register('password', {
                required: 'Password is required',
                minLength: {
                  value: 5,
                  message: 'Password must be at least 5 characters',
                },
              })}
              type="password"
              placeholder="Password"
              error={errors?.password?.message}
            />
          </div>

          <input
            type="submit"
            value="Login"
            className={`btn btn--primary text-2xl font-medium ${isLoading && 'bg-gray-300'}`}
            disabled={isLoading}
          />
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
