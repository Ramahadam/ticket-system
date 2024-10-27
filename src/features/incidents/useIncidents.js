import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getIncidents } from "../../apiServices/apiForIncidents";
import { useSearchParams } from "react-router-dom";

export function useIncidents() {
	// Filter
	const columnName = "status";
	const [searchParams] = useSearchParams();
	const filterByStatus = searchParams?.getAll(columnName);

	//Sort
	const sortByRow = searchParams.get("sortBy") || "priority-asc";
	const [field, direction] = sortByRow.split("-");
	const sortBy = { field, direction };

	const queryClient = useQueryClient();

	const {
		isLoading,
		data: incidents,
		error,
	} = useQuery({
		queryKey: ["incidents", filterByStatus, sortBy],
		queryFn: () => getIncidents({ filterByStatus, sortBy, columnName }),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["incidents", filterByStatus, sortBy],
			});
		},
	});

	return { isLoading, incidents, error };
}
