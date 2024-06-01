import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import moment from "moment";
const TicketContext = createContext();

const BASE_URL = "http://localhost:3030/tickets";

function dateDifference(createdDate, updatedDate) {
	//   Or if you want that between two specific dates you can use:
	// var a = moment([2007, 0, 28]);
	// var b = moment([2007, 0, 29]);
	// a.from(b); // "a day ago"
	//Credit to https://stackoverflow.com/users/7850015/dryden-williams

	const startDate = moment(new Date(createdDate));
	const endDate = moment(new Date(updatedDate));

	const hoursDiff = startDate.from(endDate);

	return hoursDiff;
}

const initialState = {
	allTickets: [],
	isLoading: false,
	currentTicket: {},
	error: "",
};

function reducer(state, action) {
	switch (action.type) {
		case "loading":
			return { ...state, isLoading: action.payload };

		case "tickets/loaded":
			return { ...state, isLoading: false, allTickets: action.payload };

		case "ticket/loaded":
			return { ...state, isLoading: false, currentTicket: action.payload };

		case "rejected":
			return { ...state, error: action.payload };

		default:
			throw new Error("Unknow action type !:");
	}
}

function TicketsProvider({ children }) {
	const [{ allTickets, isLoading, error, currentTicket }, dispatch] =
		useReducer(reducer, initialState);

	useEffect(function () {
		async function getApiData() {
			try {
				dispatch({ type: "loading", payload: true });
				const res = await axios.get(`${BASE_URL}`);
				const data = await res.data;
				dispatch({ type: "tickets/loaded", payload: data });
				dispatch({ type: "loading", payload: false });
			} catch (error) {
				console.error("Error fetching data:", error.message);
				dispatch({ type: "rejected", payload: error });
			}
		}

		getApiData();
	}, []);

	async function getTicket(id) {
		dispatch({ type: "loading", payload: true });
		try {
			const res = await axios.get(`${BASE_URL}?id=${id}`);
			const data = await res.data;

			dispatch({ type: "ticket/loaded", payload: data[0] });
		} catch {
			dispatch({
				type: "rejected",
				payload: "Error occurs during fetch ticket",
			});
		}
	}

	return (
		<TicketContext.Provider
			value={{
				allTickets,
				isLoading,
				error,
				dateDifference,
				dispatch,
				getTicket,
				currentTicket,
			}}>
			{children}
		</TicketContext.Provider>
	);
}

function useTickets() {
	const context = useContext(TicketContext);
	if (context === undefined)
		throw new Error(`The contextCities is used out of the provider scope`);
	return context;
}

export { TicketsProvider, useTickets };
