import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createIncident as createIncidentAPI } from "../../services/apiForIncidents";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCreateIncident() {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const { mutate: createIncident, isPending: isCreating } = useMutation({
		mutationFn: createIncidentAPI,
		mutationKey: ["incidents"],
		onSuccess: (id) => {
			toast.success("Ticket has been created successfuly");
			queryClient.invalidateQueries({ queryKey: ["incidents"] });
			navigate(`/dashboard/${id}`);
		},

		onError: () => {
			toast.error("Ticket could not be created");
		},
	});

	return { createIncident, isCreating };
}
