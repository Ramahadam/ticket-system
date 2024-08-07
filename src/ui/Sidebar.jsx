import Logo from "../ui/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBox,
	faClock,
	faEnvelopeOpenText,
	faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Sidebar.module.css";
import { useIncidents } from "../features/ticket/useIncidents";
import { Members } from "../features/user/Members";

function Sidebar() {
	const { isLoading, error, incidents } = useIncidents();

	return (
		<aside className={styles.sidebar}>
			<Logo />
			{/**TODO: Hide tickets and memebers if there is no tickets */}
			{!isLoading ? (
				<>
					<Tickets incidents={incidents} />
					<Members />
				</>
			) : (
				""
			)}
		</aside>
	);
}

function Tickets({ incidents }) {
	console.log(incidents);

	const loggedIncidents = incidents.filter(
		(incident) => incident.status === "loged"
	).length;

	const progressIncidents = incidents.filter(
		(incident) => incident.status === "progress"
	).length;

	const holdIncidents = incidents.filter(
		(incident) => incident.status === "hold"
	).length;

	const closedIncidents = incidents.filter(
		(incident) => incident.status === "fulfiled"
	).length;

	return (
		<nav className={styles.tickets}>
			<h2>Incidents report</h2>

			<ul>
				<li className="active">
					<div>
						<FontAwesomeIcon icon={faEnvelopeOpenText} />
						<span>Logged</span>
					</div>
					<span>{loggedIncidents}</span>
				</li>
				<li>
					<div>
						<FontAwesomeIcon icon={faClock} />
						<span>In-progress</span>
					</div>
					<span>{progressIncidents}</span>
				</li>
				<li>
					<div>
						<FontAwesomeIcon icon={faClock} />
						<span>On-hold</span>
					</div>
					<span>{holdIncidents}</span>
				</li>
				<li>
					<div>
						<FontAwesomeIcon icon={faBox} />

						<span>Closed </span>
					</div>
					<span>{closedIncidents}</span>
				</li>
			</ul>
		</nav>
	);
}

export { Sidebar, Tickets, Members };
