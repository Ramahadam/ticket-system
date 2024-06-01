import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";

import Login from "./ui/Login";
import TicketsList, {
	loader as ticketsLoader,
} from "./features/ticket/TicketsList";
import DisplayTicket, {
	loader as ticketLoader,
} from "./features/ticket/DisplayTicket";
import NewTicket from "./features/ticket/NewTicket";

const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <div>Page could not be found go back</div>,

		children: [
			{
				index: true,
				element: <TicketsList />,
				loader: ticketsLoader,
			},
			{
				path: "/tickets/:id",
				element: <DisplayTicket />,
				loader: ticketLoader,
			},
			{
				path: "new",
				element: <NewTicket />,
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
