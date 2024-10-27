import User from "../features/authentication/User";
import styles from "./AppHeader.module.css";
import Search from "./Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSun, faUserGear } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function AppHeader() {
	return (
		<header className={styles.header}>
			<User />
			<Search />
			<Actions />
		</header>
	);
}

function Actions() {
	return (
		<div className={styles.actions}>
			<Link to="users" className={styles.gearIcon}>
				<FontAwesomeIcon icon={faUserGear} />
			</Link>
			<span className={styles.notification}>
				<FontAwesomeIcon icon={faBell} />
				<span className={styles.numMessages}>1</span>
			</span>
			<span className={styles.darkIcon}>
				<FontAwesomeIcon icon={faSun} />
			</span>
		</div>
	);
}

export default AppHeader;
