import styles from "./CurrentDate.module.css";

function CurrentDate() {
  let date = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  date = date.toLocaleDateString("en-US", options);
  return (
    <div className={styles.container}>
      <span className={styles.title}>Date</span>
      <span className={styles.timing}>Today is, {date}</span>
    </div>
  );
}

export default CurrentDate;
