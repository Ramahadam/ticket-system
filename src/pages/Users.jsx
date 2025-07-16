import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../ui/Button';
import { faAddressBook, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import UsersList from '../features/authentication/UsersList';
import UserCreation from '../features/authentication/UserCreation';
import { useUserContext } from '../Context/UserContext';

function Users() {
  const { setShowForm, setEditUser } = useUserContext();

  return (
    <div className="max-w-[100rem]">
      <div className="bg-white p-8">
        <div className="flex justify-between">
          <div
            className="flex items-center gap-4 justify-center
          "
          >
            <span>
              <FontAwesomeIcon icon={faAddressBook} />
            </span>
            <h2 className="text-2xl font-normal">User details</h2>
          </div>

          <Button
            onClick={() => {
              setEditUser(null);
              setShowForm(true);
            }}
            className=" text-color-primary outline-dashed outline-1 outline-offset-1"
          >
            <span>
              <FontAwesomeIcon icon={faUserEdit} />
            </span>
            <p>Create user</p>
          </Button>
        </div>

        <UsersList />
        <UserCreation />
      </div>
    </div>
  );
}

export default Users;
