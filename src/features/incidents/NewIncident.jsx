import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./NewIncident.module.css";

import { faBug } from "@fortawesome/free-solid-svg-icons";

import { useCreateIncident } from "./useCreateIncident";
import Loader from "../../ui/Loader";
import FormCreateUpdate from "../../ui/FormCreateUpdate";

function NewIncident() {
	const { createIncident, isCreating } = useCreateIncident();

	return (
		<div className={`container`}>
			{isCreating ? (
				<Loader />
			) : (
				<div className={styles.wrapper}>
					<header>
						<FontAwesomeIcon icon={faBug} className={styles.icon} />
						<h2>Create new incident</h2>
					</header>

					<FormCreateUpdate
						createTicket={createIncident}
						isCreating={isCreating}
					/>
				</div>
			)}
		</div>
	);
}

export default NewIncident;
