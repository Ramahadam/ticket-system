import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./Filter.module.css";
import { Link, useNavigation } from "react-router-dom";

function Filter() {
	const pageLoadingState = useNavigation();
	const isLoading = pageLoadingState.state === "loading" ?? "submitting";

	return (
		<div className={styles.filter}>
			<button
				className={`${styles.btn} ${styles.btnFilter}`}
				disabled={isLoading}>
				<FontAwesomeIcon icon={faFilter} />
				<span>Filter</span>
			</button>

			<Link to="new">
				<button
					className={`${styles.btn} ${styles.btnNewTicket}`}
					disabled={isLoading}>
					<FontAwesomeIcon icon={faPlus} className={styles.icon} />
					<span>Create Ticket</span>
				</button>
			</Link>
		</div>
	);
}

export default Filter;
