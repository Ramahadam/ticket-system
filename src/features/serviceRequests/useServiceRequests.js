import { useQuery } from "@tanstack/react-query";
import { getServiceRequests } from "../../apiServices/apiServiceRequests";

function useServiceRequests() {
	const {
		isLoading,
		data: serviceRequests,
		error,
	} = useQuery({
		queryKey: ["serviceRequests"],
		queryFn: getServiceRequests,
	});

	return { isLoading, serviceRequests, error };
}

export default useServiceRequests;
