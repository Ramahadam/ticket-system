import FormCreateUpdate from "./FormCreateUpdate";
import TicketAttachments from "./TicketAttachments";
import TicketNotes from "./TicketNotes";
import styles from "./TicketDetail.module.css";
import Loader from "./Loader";

function TicketDetail({
	activeTab,
	setActiveTab,
	isLoading,
	ticket,
	updateTicket,
	tableName,
}) {
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
						{activeTab === 0 && (
							<FormCreateUpdate
								ticket={ticket?.[0]}
								updateTicket={updateTicket}
								isLoading={isLoading}
								tableName={tableName}
							/>
						)}
						{activeTab === 1 && <TicketAttachments ticket={ticket} />}
						{activeTab === 2 && <TicketNotes ticket={ticket} />}
					</div>
				)}
			</div>
		</div>
	);
}

export default TicketDetail;
