/* eslint-disable no-mixed-spaces-and-tabs */
import styles from "./DisplayTicket.module.css";

import { useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getIncident } from "../../services/apiForIncidents";
import Loader from "../../ui/Loader";
import FormCreateUpdate from "../../ui/FormCreateUpdate";

function DisplayTicket() {
	const queryClient = useQueryClient();
	const { id } = useParams();

	const { data: incident, isLoading } = useQuery({
		queryFn: () => getIncident(id),
		queryKey: ["incident", id],
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["incidents"],
			});
		},
		onError: () => {
			console.log("Error during fetching incidnet");
		},
	});

	console.log(incident);
	return (
		<div className={`container ${styles.ticketContainer}`}>
			<div className={styles.wrapper}>
				<menu>
					<button className={` ${styles.btnTab} ${styles.active}`}>
						Ticket
					</button>
					<button className={` ${styles.btnTab}`}>Attachements</button>
					<button className={` ${styles.btnTab}`}>Notes</button>
				</menu>
				{isLoading ? <Loader /> : <TicketDetails ticket={incident} />}
			</div>
		</div>
	);
}

function TicketDetails({ ticket }) {
	if (!ticket) return;

	return <FormCreateUpdate ticket={ticket?.[0]} />;
}

// function TicketNotes() {}

// function TicketAttachments() {}

export default DisplayTicket;
