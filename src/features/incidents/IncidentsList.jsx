import Loader from "../../ui/Loader";
import { useIncidents } from "./useIncidents";
import ErrorMessage from "../../ui/ErrorMessage";
import IncidentTable from "./IncidentTable";

function IncidentsList() {
	const { isLoading, error, incidents } = useIncidents();

	if (error) return <ErrorMessage error={error} />;

	if (isLoading) return <Loader />;

	return (
		<div className="container">
			<IncidentTable incidents={incidents} />
		</div>
	);
}

export default IncidentsList;
