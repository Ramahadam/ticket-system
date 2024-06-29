import axios from "axios";

const BASE_URL = "http://localhost:3030/tickets";

export async function getTickets() {
	try {
		const res = await axios.get(`${BASE_URL}`);
		const data = await res.data;

		return data;
	} catch (error) {
		console.log(error);
	}
}

export async function getTicket(id) {
	try {
		const res = await axios.get(`${BASE_URL}?id=${id}`);
		const data = await res.data;
		return data;
	} catch (error) {
		console.log(error);
	}
}

export async function createTicket(ticket) {
	const res = await axios.post(BASE_URL, ticket);
	console.log(res.data);

	return res.data;
}

export async function updateTicketApi(ticketId, updatedData) {
	try {
		const response = await axios.put(`${BASE_URL}/${ticketId}`, updatedData);
		console.log("Ticket updated successfully:", response.data);
	} catch (error) {
		console.error("Error updating ticket:", error);
	}
}
