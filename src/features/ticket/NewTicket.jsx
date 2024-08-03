import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./NewTicket.module.css";

import { faBug } from "@fortawesome/free-solid-svg-icons";

import { useCreateIncident } from "./useCreateIncident";
import Loader from "../../ui/Loader";
import FormCreateUpdate from "../../ui/FormCreateUpdate";

function NewTicket() {
	const { createIncident, isCreating } = useCreateIncident();

	return (
		<div className={`container ${styles["createUpdate"]}`}>
			{isCreating ? (
				<Loader />
			) : (
				<div className={styles.wrapper}>
					<header>
						<FontAwesomeIcon icon={faBug} className={styles.icon} />
						<h2>Create new incident</h2>
					</header>

					<FormCreateUpdate
						createIncident={createIncident}
						isCreating={isCreating}
					/>
				</div>
			)}
		</div>
	);
}

export default NewTicket;
