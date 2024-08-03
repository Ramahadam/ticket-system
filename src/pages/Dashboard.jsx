import TicketsList from "../features/ticket/TicketsList";
import { useIncidents } from "../features/ticket/useIncidents";

function Dashboard() {
	const { isLoading, error, incidents } = useIncidents();

	return (
		<div>
			<TicketsList incidents={incidents} isLoading={isLoading} error={error} />
		</div>
	);
}

export default Dashboard;
