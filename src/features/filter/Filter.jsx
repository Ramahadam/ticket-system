import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./Filter.module.css";
import { Link } from "react-router-dom";

function Filter() {
	return (
		<div className={styles.filter}>
			<button className={`${styles.btn} ${styles.btnFilter}`}>
				<FontAwesomeIcon icon={faFilter} />
				<span>Filter</span>
			</button>

			<Link to="new">
				<button className={`${styles.btn} ${styles.btnNewTicket}`}>
					<FontAwesomeIcon icon={faPlus} className={styles.icon} />
					<span>Create Ticket</span>
				</button>
			</Link>
		</div>
	);
}

export default Filter;
