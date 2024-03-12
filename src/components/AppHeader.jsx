import User from "./User";
import styles from "./AppHeader.module.css";
import Search from "./Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faGear, faSun } from "@fortawesome/free-solid-svg-icons";
function AppHeader() {
  return (
    <header className={styles.header}>
      <User />
      <Search />
      <Actions />
    </header>
  );
}

function Actions() {
  return (
    <div className={styles.actions}>
      <span className={styles.gearIcon}>
        <FontAwesomeIcon icon={faGear} />
      </span>
      <span className={styles.notification}>
        <FontAwesomeIcon icon={faBell} />
        <span className={styles.numMessages}>1</span>
      </span>
      <span className={styles.darkIcon}>
        <FontAwesomeIcon icon={faSun} />
      </span>
    </div>
  );
}

export default AppHeader;
