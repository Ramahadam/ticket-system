/* eslint-disable no-mixed-spaces-and-tabs */
import styles from "./DisplayTicket.module.css";

import Loader from "../../ui/Loader";
import FormCreateUpdate from "../../ui/FormCreateUpdate";

import TicketNotes from "./TicketNotes";
import TicketAttachments from "./TicketAttachments";
import useIncidentByID from "./useIncidentByID";

function DisplayTicket() {
	const { activeTab, incident, isLoading, setActiveTab } = useIncidentByID();

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
						className={` ${styles.btnTab} ${activeTab === 1 && styles.active}`}
						onClick={() => setActiveTab(1)}>
						Attachements
					</button>
					<button
						className={` ${styles.btnTab} ${activeTab === 2 && styles.active}`}
						onClick={() => setActiveTab(2)}>
						Notes
					</button>
				</menu>
				{isLoading ? (
					<Loader />
				) : (
					<div>
						{activeTab === 0 && <TicketDetails ticket={incident} />}
						{activeTab === 1 && <TicketAttachments ticket={incident} />}
						{activeTab === 2 && <TicketNotes ticket={incident} />}
					</div>
				)}
			</div>
		</div>
	);
}

function TicketDetails({ ticket }) {
	if (!ticket) return;
	return <FormCreateUpdate ticket={ticket?.[0]} />;
}

export default DisplayTicket;
