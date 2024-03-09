import styles from "./Logo.module.css";

function Logo() {
  return (
    <a href="#" className={styles.logo}>
      <img src="./logo.png" alt="Ticket system logo" />
    </a>
  );
}

export default Logo;
