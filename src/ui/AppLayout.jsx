import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.css";
import { Sidebar } from "./Sidebar";
import AppHeader from "./AppHeader";
import PageHeader from "./PageHeader";

function AppLayout() {
	return (
		<div className={`${styles.container} `}>
			<Sidebar />
			<main>
				<AppHeader />
				<PageHeader />
				<Outlet />
			</main>
		</div>
	);
}

export default AppLayout;
