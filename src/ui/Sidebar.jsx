import Logo from "../ui/Logo";

import styles from "./Sidebar.module.css";

import NavigationMenu from "./NavigationMenu";

function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<Logo />
			<NavigationMenu styles={styles} />
		</aside>
	);
}

export default Sidebar;
