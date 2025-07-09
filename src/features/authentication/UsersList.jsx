import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../ui/Button';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useUsers } from './useUsers';
import { useDeleteUser } from './useDeleteUser';
import Loader from '../../ui/Loader';
import Message from '../../ui/Message';
// const user = {
//   id: 1,
//   userName: 'johnDoe',
//   firstname: 'DOe',
//   email: 'johnede@john.com',
//   role: 'user',
//   isActive: true,
// };

//https://www.udemy.com/course/the-ultimate-react-course/learn/lecture/38038166#announcements

function UsersList() {
  const { users, isLoading: isLoadingUsers, error } = useUsers();

  const { deleteUser } = useDeleteUser();

  function handleDleteUser(user) {
    const confirmDelete = confirm('Are you sure you want to deleteß');

    if (confirmDelete) deleteUser(user?.id);
  }

  if (error) return <Message message={error.message} />;

  if (isLoadingUsers) return <Loader />;

  return (
    <div className="mt-8">
      <table className="table-auto bg-white w-full">
        <thead className="bg-bg-light-gray">
          <tr>
            <td className="p-4 rounded-tl-md">Id</td>
            <td className="p-4">Firstname</td>
            <td className="p-4">Lastname</td>
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
          {users?.map((user) => (
            <tr className="border border-bg-gray" key={user.id}>
              <td data-th="id" className="p-4 border-r border-bg-gray">
                {user?.id.split('-').slice(0, 1)}
              </td>
              <td data-th="id" className="p-4 border-r border-bg-gray">
                {user.firstname}
              </td>
              <td data-th="id" className="p-4 border-r border-bg-gray">
                {user.lastname}
              </td>
              <td data-th="id" className="p-4 border-r border-bg-gray">
                {user.email}
              </td>
              <td data-th="id" className="p-4 border-r border-bg-gray">
                {user.userrole}
              </td>
              <td data-th="id" className="p-4 border-r border-bg-gray">
                {user.isActive ? (
                  <span className="text-dark-green font-medium">Active</span>
                ) : (
                  <span className="text-color-orange font-medium">
                    Inactive
                  </span>
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
                  <Button onClick={() => handleDleteUser(user)}>
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="text-color-orange"
                    />

                    <span>Delete user</span>
                  </Button>
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersList;
