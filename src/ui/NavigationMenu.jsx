import {
	faBug,
	faChartLine,
	faGear,
	faTruckArrowRight,
	faUpRightAndDownLeftFromCenter,
	faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

export default function NavigationMenu({ styles }) {
	return (
		<nav className={styles.tickets}>
			<ul>
				<li>
					<NavLink
						className={({ isActive }) => (isActive ? styles.active : "")}
						to="/dashboard">
						<FontAwesomeIcon icon={faChartLine} />
						<span>Dasboard</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/incidents"
						className={({ isActive }) => (isActive ? styles.active : "")}>
						<FontAwesomeIcon icon={faBug} />
						<span>Incidents</span>
					</NavLink>
				</li>

				<li>
					<NavLink
						to="/requests"
						className={({ isActive }) => (isActive ? styles.active : "")}>
						<FontAwesomeIcon icon={faTruckArrowRight} />
						<span>Service requests</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/changes"
						className={({ isActive }) => (isActive ? styles.active : "")}>
						<FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
						<span>Change requests</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/users"
						className={({ isActive }) => (isActive ? styles.active : "")}>
						<FontAwesomeIcon icon={faUsers} />
						<span>Users</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/settings"
						className={({ isActive }) => (isActive ? styles.active : "")}>
						<FontAwesomeIcon icon={faGear} />
						<span>Settings</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
