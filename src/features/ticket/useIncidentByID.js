import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getIncident } from "../../services/apiForIncidents";

function useIncidentByID() {
	const [activeTab, setActiveTab] = useState(0);

	const queryClient = useQueryClient();
	const { id } = useParams();
	``;
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

	return { activeTab, incident, isLoading, setActiveTab };
}

export default useIncidentByID;
