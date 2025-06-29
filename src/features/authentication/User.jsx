import { useUser } from './useUser';

function User() {
  const { user } = useUser();
  const loggedUser = user?.email?.split('@').at(0);

  return (
    <div className="text-2xl flex">
      <p>Good Morning,</p> &nbsp;
      <p className="font-normal">{loggedUser}</p>
    </div>
  );
}

export default User;
