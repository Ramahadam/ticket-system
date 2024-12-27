import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './UserForm.module.css';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useUsers } from '../../context/UsersContext';
function UserForm() {
  const { handleUserForm } = useUsers();
  return (
    <form className={styles.userForm}>
      <header>
        <h2>Create user</h2>
        <button onClick={handleUserForm}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </header>

      <div className={styles.group}>
        <div className={styles.formGroup}>
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <div className={styles.formGroup}>
          <input type="email" name="email" placeholder="someone@email.com" />
          <select name="role" id="">
            <option value="administrator">Administrator</option>
            <option value="standard">standard</option>
            <option value="helpdesk">helpdesk</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <input type="password" name="password" id="password" />
          <input type="password" name="confrimPassword" id="confrimPassword" />
        </div>
      </div>
      <button className="btn btn--primary">Create </button>
    </form>
  );
}

export default UserForm;
