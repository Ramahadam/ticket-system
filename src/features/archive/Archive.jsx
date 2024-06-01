import styles from "./Archive.module.css";
function Archive() {
  return (
    <div className={styles.container}>
      <p>
        <span>Archived</span>
        <span>All archived cases </span>
      </p>
      <span className={styles.counter}>100 Cases</span>
    </div>
  );
}

export default Archive;
