// import styles from './Login.module.css';

function Login() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center w-[48rem] bg-white mx-auto rounded-lg">
        <form className="w-[35rem] p-10 text-center flex flex-col">
          <h1 className="mb-14">Login</h1>

          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
            className="text-lg font-fredoka text-inherit h-[5rem] outline-none p-6 border border-bg-gray rounded-md mb-8"
          />

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            className="text-lg font-fredoka text-inherit h-[5rem] outline-none p-6 border border-bg-gray rounded-md mb-8"
          />

          <button className="btn btn--primary">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
