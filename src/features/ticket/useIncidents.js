import { useQuery } from "@tanstack/react-query";
import { getIncidents } from "../../services/apiForIncidents";

export function useIncidents() {
	const {
		isLoading,
		data: incidents,
		error,
	} = useQuery({
		queryKey: ["incidents"],
		queryFn: getIncidents,
	});

	return { isLoading, incidents, error };
}
