import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Search.module.css";
function Search() {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="Search for a ticket" autoFocus />
      <FontAwesomeIcon icon={faSearch} />
    </form>
  );
}

export default Search;
