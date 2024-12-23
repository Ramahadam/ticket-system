/* eslint-disable no-mixed-spaces-and-tabs */

import useIncidentByID from "./useIncidentByID";
import TicketDetail from "../../ui/TicketDetail";
import { useState } from "react";
import useUpdateIncident from "./useUpdateIncident";

function Incident() {
	const [activeTab, setActiveTab] = useState(0);

	const { incident, isLoading } = useIncidentByID();

	const { updateIncident, isPending } = useUpdateIncident();

	return (
		<TicketDetail
			activeTab={activeTab}
			setActiveTab={setActiveTab}
			ticket={incident}
			isLoading={isLoading || isPending}
			updateTicket={updateIncident}
		/>
	);
}

export default Incident;
