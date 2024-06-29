import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	tickets: [],
};

const ticketSlice = createSlice({
	name: "tickets",
	initialState,
	reducers: {
		allTicketsState(state, action) {
			state.tickets.push(action.payload);
		},
		createTicket() {},
		updateTicket() {},
		deleteTicket() {},
	},
});

export const getTicketsFromState = (state) => state.ticket.tickets;

export const { allTicketsState, createTicket, updateTicket, deleteTicket } =
	ticketSlice.actions;
export default ticketSlice.reducer;
