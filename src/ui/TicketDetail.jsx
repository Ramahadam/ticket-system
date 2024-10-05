/* eslint-disable no-mixed-spaces-and-tabs */
import styles from "./TicketDetail.module.css";
import Loader from "./Loader";
import FormCreateUpdate from "./FormCreateUpdate";

import TicketNotes from "./TicketNotes";
import TicketAttachments from "./TicketAttachments";
import { useState } from "react";

function TicketDetail({ ticket, isLoadingTicket }) {
	const [activeTab, setActiveTab] = useState(0);

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
					<menu>
						{activeTab === 0 && <FormCreateUpdate ticket={ticket?.[0]} />}
						{activeTab === 1 && <TicketAttachments ticket={ticket} />}
						{activeTab === 2 && <TicketNotes ticket={ticket} />}
					</menu>
				)}
			</div>
		</div>
	);
}

export default TicketDetail;
