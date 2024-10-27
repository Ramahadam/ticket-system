/* eslint-disable no-mixed-spaces-and-tabs */
import styles from "./Incident.module.css";
import Loader from "../../ui/Loader";
import FormCreateUpdate from "../../ui/FormCreateUpdate";

import TicketNotes from "../../ui/TicketNotes";
import TicketAttachments from "../../ui/TicketAttachments";
import { useState } from "react";
import TicketDetail from "../../ui/TicketDetail";
import useIncidentByID from "./useIncidentByID";

function Incident() {
	// const [activeTab, setActiveTab] = useState(0);
	const { incident, isLoading } = useIncidentByID();

	// return (
	// 	<div className={`container ${styles.ticketContainer}`}>
	// 		<div className={styles.wrapper}>
	// 			<menu>
	// 				<button
	// 					className={` ${styles.btnTab} ${activeTab === 0 && styles.active}`}
	// 					onClick={() => setActiveTab(0)}>
	// 					Ticket
	// 				</button>
	// 				<button
	// 					className={`${styles.btnTab} ${activeTab === 1 && styles.active}`}
	// 					onClick={() => setActiveTab(1)}>
	// 					Attachements
	// 				</button>
	// 				<button
	// 					className={` ${styles.btnTab} ${activeTab === 2 && styles.active}`}
	// 					onClick={() => setActiveTab(2)}>
	// 					Notes
	// 				</button>
	// 			</menu>
	// 			{isLoading ? (
	// 				<Loader />
	// 			) : (
	// 				<menu>
	// 					{activeTab === 0 && <FormCreateUpdate ticket={incident?.[0]} />}
	// 					{activeTab === 1 && <TicketAttachments ticket={incident} />}
	// 					{activeTab === 2 && <TicketNotes ticket={incident} />}
	// 				</menu>
	// 			)}
	// 		</div>
	// 	</div>
	// );

	return <TicketDetail ticket={incident} isLoadingTicket={isLoading} />;
}

export default Incident;
