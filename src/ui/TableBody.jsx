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

function TableBody({ data, styles }) {
	return (
		<tbody>
			{data?.map((incident) => {
				return (
					<tr key={incident.id}>
						<td data-th="id">
							<Link to={`${incident.id}`}>&#35;{incident.id}</Link>
						</td>
						<td data-th="Client/Company">
							<FontAwesomeIcon icon={faUserCircle} />
							<span>{incident.requester}</span>
						</td>
						<td data-th="Subject">{incident.subject}</td>
						<td data-th="Status">
							{incident.status.toLowerCase().includes("loged") && (
								<FontAwesomeIcon icon={faCalendarDays} />
							)}
							{incident.status.toLowerCase().includes("fulfiled") && (
								<FontAwesomeIcon icon={faCheck} />
							)}
							{incident.status.toLowerCase().includes("progress") && (
								<FontAwesomeIcon icon={faHammer} />
							)}
							{incident.status.toLowerCase().includes("hold") && (
								<FontAwesomeIcon icon={faHand} />
							)}

							<span>{incident.status}</span>
						</td>
						<td data-th="Prority">
							<span>{incident.priority === 1 && "High"}</span>
							<span>{incident.priority === 2 && "Meduim"}</span>
							<span>{incident.priority === 3 && "Normal"}</span>
							<span>{incident.priority === 4 && "Low"}</span>
							<span className={styles.high}>
								{incident.priority === 1 && <FontAwesomeIcon icon={faCrown} />}
							</span>
						</td>
						<td data-th="Deadline">
							<span
								className={`${
									incident?.deadline <= 1
										? styles["high"]
										: incident?.deadline <= 4
										? styles["normal"]
										: styles["low"]
								}`}>
								{incident.deadline &&
									format(incident?.deadline, "MM/dd/yyyy hh:mm")}
							</span>
						</td>
						<td data-th="Assignee">{incident?.engineer}</td>
						<td data-th="Updated">
							{incident?.lastUpdate && formatDistanceToNow(incident.lastUpdate)}
						</td>
					</tr>
				);
			})}
		</tbody>
	);
}

export default TableBody;
