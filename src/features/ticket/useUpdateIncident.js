import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateIncident as updateIncidentAPI } from "../../services/apiForIncidents";

import toast from "react-hot-toast";

function useUpdateIncident() {
	const queryClient = useQueryClient();

	const { mutate: updateIncident, isPending } = useMutation({
		mutationFn: ({ ticket, editId }) => updateIncidentAPI(ticket, editId),
		mutationKey: ["incidents"],
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["incidents"],
			});
			toast.success("Ticket has been updated successfuly");
			queryClient.invalidateQueries({ queryKey: ["incidents"] });
		},

		onError: () => {
			toast.error("Ticket could not be updated");
		},
	});

	return { updateIncident, isPending };
}

export default useUpdateIncident;
