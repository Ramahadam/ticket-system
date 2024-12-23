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
				<li className="active">
					<NavLink to="/">
						<FontAwesomeIcon icon={faChartLine} />
						<span>Dasboard</span>
					</NavLink>
				</li>
				<li className="">
					<NavLink to="/incidents">
						<FontAwesomeIcon icon={faBug} />
						<span>Incidents</span>
					</NavLink>
				</li>

				<li>
					<NavLink to="/requests">
						<FontAwesomeIcon icon={faTruckArrowRight} />
						<span>Service requests</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/changes">
						<FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
						<span>Change requests</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/users">
						<FontAwesomeIcon icon={faUsers} />
						<span>Users</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/settings">
						<FontAwesomeIcon icon={faGear} />
						<span>Settings</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
