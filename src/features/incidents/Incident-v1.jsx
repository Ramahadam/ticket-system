/* eslint-disable no-mixed-spaces-and-tabs */
<<<<<<<< HEAD:src/features/incidents/Incident-v1.jsx
import styles from "./Incident.module.css";

import Loader from "../../ui/Loader";
import FormCreateUpdate from "../../ui/FormCreateUpdate";

import TicketNotes from "../../ui/TicketNotes";
import TicketAttachments from "../../ui/TicketAttachments";
import useIncidentByID from "./useIncidentByID";

function Incident() {
	const { activeTab, incident, isLoading, setActiveTab } = useIncidentByID();
========
import styles from "./TicketDetail.module.css";
import Loader from "./Loader";
import FormCreateUpdate from "./FormCreateUpdate";

import TicketNotes from "./TicketNotes";
import TicketAttachments from "./TicketAttachments";
import { useState } from "react";

function TicketDetail({ ticket, isLoadingTicket }) {
	const [activeTab, setActiveTab] = useState(0);
>>>>>>>> dfddeac824ed80a3e261a0f4f28df31f1d1b6be6:src/ui/TicketDetail.jsx

	return (
		<div className={`container ${styles.ticketContainer}`}>
			<div className={styles.wrapper}>
				<menu>
					<button
						className={` ${styles.btnTab} ${activeTab === 0 && styles.active}`}
						onClick={() => setActiveTab(0)}>
						Ticket
					</button>
					<button
						className={`${styles.btnTab} ${activeTab === 1 && styles.active}`}
						onClick={() => setActiveTab(1)}>
						Attachements
					</button>
					<button
						className={` ${styles.btnTab} ${activeTab === 2 && styles.active}`}
						onClick={() => setActiveTab(2)}>
						Notes
					</button>
				</menu>
				{isLoadingTicket ? (
					<Loader />
				) : (
					<div>
<<<<<<<< HEAD:src/features/incidents/Incident-v1.jsx
						{activeTab === 0 && <IncidentDetails ticket={incident} />}
						{activeTab === 1 && <TicketAttachments ticket={incident} />}
						{activeTab === 2 && <TicketNotes ticket={incident} />}
========
						{activeTab === 0 && <FormCreateUpdate ticket={ticket?.[0]} />}
						{activeTab === 1 && <TicketAttachments ticket={ticket} />}
						{activeTab === 2 && <TicketNotes ticket={ticket} />}
>>>>>>>> dfddeac824ed80a3e261a0f4f28df31f1d1b6be6:src/ui/TicketDetail.jsx
					</div>
				)}
			</div>
		</div>
	);
}

<<<<<<<< HEAD:src/features/incidents/Incident-v1.jsx
function IncidentDetails({ ticket }) {
	if (!ticket) return;
	return <FormCreateUpdate ticket={ticket?.[0]} />;
}

export default Incident;
========
export default TicketDetail;
>>>>>>>> dfddeac824ed80a3e261a0f4f28df31f1d1b6be6:src/ui/TicketDetail.jsx
