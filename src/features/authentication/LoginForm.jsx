import { useState } from 'react';
import Logo from '../../ui/Logo';
import { useLogin } from './useLogin';
function LoginForm() {
  const [email, setEmail] = useState('test@test.com');
  const [password, setPassword] = useState('12345');
  const { login, isLoading } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
        },
      }
    );
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Logo className=" h-20 w-56 mb-8" />
      <div className="flex flex-col items-center w-[48rem] bg-white mx-auto rounded-lg">
        <form
          onSubmit={handleSubmit}
          className="w-[35rem] p-10 text-center flex flex-col"
        >
          <h1 className="mb-14 text-3xl">Login to your account</h1>

          <input
            type="text"
            name="username"
            id="username"
            disabled={isLoading}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-lg font-fredoka text-inherit h-[5rem] outline-none p-6 border border-bg-gray rounded-md mb-8"
          />

          <input
            type="password"
            name="password"
            id="password"
            value={password}
            disabled={isLoading}
            onChange={(e) => setPassword(e.target.value)}
            className="text-lg font-fredoka text-inherit h-[5rem] outline-none p-6 border border-bg-gray rounded-md mb-8"
          />

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
