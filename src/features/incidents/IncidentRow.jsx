import {
	faCalendarDays,
	faCheck,
	faCrown,
	faHammer,
	faHand,
	faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format, formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";
import { convertPriorityToString } from "../../utils/helper";

function IncidentRow({ incident }) {
	const {
		id,
		subject,
		requester,
		status,
		priority,
		deadline,
		lastUpdate,
		engineer,
	} = incident;

	return (
		<tr key={id}>
			<td data-th="id">
				<Link to={`${id}`}>&#35;{id}</Link>
			</td>
			<td data-th="Client/Company">
				<FontAwesomeIcon icon={faUserCircle} />
				<span>{requester}</span>
			</td>
			<td data-th="Subject">{subject}</td>
			<td data-th="Status">
				{status.toLowerCase().includes("loged") && (
					<FontAwesomeIcon icon={faCalendarDays} />
				)}
				{status.toLowerCase().includes("fulfiled") && (
					<FontAwesomeIcon icon={faCheck} />
				)}
				{status.toLowerCase().includes("progress") && (
					<FontAwesomeIcon icon={faHammer} />
				)}
				{status.toLowerCase().includes("hold") && (
					<FontAwesomeIcon icon={faHand} />
				)}

				<span>{status}</span>
			</td>
			<td data-th="Priority">
				<span className={`${convertPriorityToString(priority)}`}>
					{convertPriorityToString(priority)}
				</span>
				<span className={`${convertPriorityToString(priority)}`}>
					{convertPriorityToString(priority) === "high" && (
						<FontAwesomeIcon icon={faCrown} />
					)}
				</span>
			</td>
			<td data-th="Deadline">
				<span
					className={`${
						deadline <= 1 ? "high" : deadline <= 4 ? "normal" : "low"
					}`}>
					{deadline && format(deadline, "MM/dd/yyyy hh:mm")}
				</span>
			</td>
			<td data-th="Assignee">{engineer}</td>
			<td data-th="Updated">{lastUpdate && formatDistanceToNow(lastUpdate)}</td>
		</tr>
	);
}

export default IncidentRow;
