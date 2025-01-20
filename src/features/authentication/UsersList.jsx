// import { useUsers } from '../../context/UsersContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../ui/Button';
import {
  faAddressBook,
  faEdit,
  faTrash,
  faUserEdit,
} from '@fortawesome/free-solid-svg-icons';

const user = {
  id: 1,
  userName: 'johnDoe',
  firstname: 'DOe',
  email: 'johnede@john.com',
  role: 'user',
  isActive: true,
};

function UsersList() {
  // const { user } = useUsers();
  // console.log(user);

  return (
    <div className="mt-8">
      <table className="table-auto bg-white w-full">
        <thead className="bg-bg-light-gray">
          <tr>
            <td className="p-4 rounded-tl-md">Id</td>
            <td className="p-4">username</td>
            <td className="p-4">Firstname</td>
            <td className="p-4">email</td>
            <td className="p-4">Role</td>
            <td className="p-4">
              <span>Account status</span>
            </td>
            <td className="p-4">Update</td>
            <td className="p-4">Delete</td>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-bg-gray">
            <td data-th="id" className="p-4 border-r border-bg-gray">
              {user.id}
            </td>
            <td data-th="id" className="p-4 border-r border-bg-gray">
              {user.userName}
            </td>
            <td data-th="id" className="p-4 border-r border-bg-gray">
              {user.firstname}
            </td>
            <td data-th="id" className="p-4 border-r border-bg-gray">
              {user.email}
            </td>
            <td data-th="id" className="p-4 border-r border-bg-gray">
              {user.role}
            </td>
            <td data-th="id" className="p-4 border-r border-bg-gray">
              {user.isActive ? (
                <span className="text-dark-green font-medium">Active</span>
              ) : (
                <span className="text-color-orange font-medium">Inactive</span>
              )}
            </td>
            <td data-th="id" className="p-4 border-r border-bg-gray">
              <p className="flex items-center  ">
                <Button>
                  <FontAwesomeIcon
                    icon={faEdit}
                    className="text-color-secondary"
                  />
                </Button>
                <span>Update user</span>
              </p>
            </td>
            <td data-th="id" className="p-4  border-r border-bg-gray">
              <p className="flex items-center  ">
                <Button>
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="text-color-orange"
                  />
                </Button>
                <span>Delete user</span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UsersList;
