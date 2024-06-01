import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import styles from "./Homepage.module.css";
// import MainApp from "../components/MainApp";
import AppHeader from "./AppHeader";
import PageHeader from "./PageHeader";
import { useUsers } from "../context/UsersContext";
// import TicketsList from "../components/TicketsList";
function Homepage() {
	const { showUsersForm } = useUsers();
	return (
		<div
			className={`${styles.container} ${showUsersForm ? styles.overlay : ""}`}>
			<Sidebar />
			<main>
				<AppHeader />
				<PageHeader />
				<Outlet />
			</main>
		</div>
	);
}

export default Homepage;
