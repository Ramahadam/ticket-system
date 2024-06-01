import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from "./features/ticket/ticketSlice";

export const store = configureStore({
	reducer: {
		ticket: ticketReducer,
	},
});
