import axios from "axios";

const BASE_URL = "http://localhost:3030/tickets";

export async function getTickets() {
	try {
		const res = await axios.get(`${BASE_URL}`);
		const data = await res.data;
		console.log(data);
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
