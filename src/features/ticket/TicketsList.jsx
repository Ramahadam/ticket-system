import {
	faCalendarDays,
	faCheck,
	faHammer,
	faHand,
	faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./TicketsList.module.css";

import Loader from "../../ui/Loader";

import { Link, useLoaderData, useNavigation } from "react-router-dom";
import { getTickets } from "../../services/apiFetchdata";
import ErrorMessage from "../../ui/Message";
import { dateDifference } from "../../utils/helper";
import { useDispatch } from "react-redux";
import { allTicketsState } from "./ticketSlice";

function TicketsList() {
	const dispatch = useDispatch();
	const tickets = useLoaderData();

	//Update the redux state by dispacting actoin.
	dispatch(allTicketsState(tickets));

	const pageLoadingState = useNavigation();
	const isLoading = pageLoadingState.state === "loading" ?? "submitting";

	if (!tickets) return <ErrorMessage message="No tickets created yet😢" />;

	return (
		<div className={styles.container}>
			{isLoading ? (
				<Loader />
			) : (
				<table className={styles["tickets-table"]}>
					<thead>
						<tr>
							<th>Id</th>
							<th>Client&#47;Company</th>
							<th>Subject</th>
							<th>Status</th>
							<th>Prority</th>
							<th>Deadline</th>
							<th>Assignee</th>
							<th>Updated</th>
						</tr>
					</thead>
					<tbody>
						{tickets.map((ticket) => {
							return (
								<tr key={ticket.id}>
									<td data-th="id">
										<Link to={`/tickets/${ticket.id}`}>&#35;{ticket.id}</Link>
									</td>
									<td data-th="Client/Company">
										<FontAwesomeIcon icon={faUserCircle} />
										<span>{ticket.client}</span>
									</td>
									<td data-th="Subject">{ticket.subject}</td>
									<td data-th="Status">
										{ticket.status.toLowerCase().includes("open") && (
											<FontAwesomeIcon icon={faCalendarDays} />
										)}
										{ticket.status.toLowerCase().includes("completed") && (
											<FontAwesomeIcon icon={faCheck} />
										)}
										{ticket.status.toLowerCase().includes("progress") && (
											<FontAwesomeIcon icon={faHammer} />
										)}
										{ticket.status.toLowerCase().includes("hold") && (
											<FontAwesomeIcon icon={faHand} />
										)}

										<span>{ticket.status}</span>
									</td>
									<td data-th="Prority">{ticket.prority} </td>
									<td data-th="Deadline">
										<span
											className={`${
												ticket.deadline <= 1
													? styles["high"]
													: ticket.deadline <= 4
													? styles["normal"]
													: styles["low"]
											}`}>
											{ticket.deadline} hours
										</span>
									</td>
									<td data-th="Assignee">{ticket.assginee?.name}</td>
									<td data-th="Updated">
										{dateDifference(ticket.created, ticket.updated)}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			)}
		</div>
	);
}

export async function loader() {
	const tickets = await getTickets();

	return tickets;
}

export default TicketsList;
