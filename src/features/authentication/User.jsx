import styles from './User.module.css';
function User() {
  return (
    <div className={styles.message}>
      <p>Welcome,</p>
      <p>John Doe</p>
    </div>
  );
}

export default User;
