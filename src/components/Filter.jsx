import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./Filter.module.css";

function Filter() {
  return (
    <div className={styles.filter}>
      <button className={`${styles.btn} ${styles.btnFilter}`}>
        <FontAwesomeIcon icon={faFilter} />
        <span>Filter</span>
      </button>

      <button className={`${styles.btn} ${styles.btnNewTicket}`}>
        <FontAwesomeIcon icon={faPlus} className={styles.icon} />
        <span>Create Ticket</span>
      </button>
    </div>
  );
}

export default Filter;
