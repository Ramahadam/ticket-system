import { createSlice } from "@reduxjs/toolkit";
import { getTickets } from "../../services/apiFetchdata";

const initialState = {
	tickets: [],
};

const ticketSlice = createSlice({
	name: "tickets",
	initialState,
	reducers: {
		createTicket() {},
		updateTicket() {},
		deleteTicket() {},
	},
});

export const { createTicket, updateTicket, deleteTicket } = ticketSlice.actions;
export default ticketSlice.reducer;
