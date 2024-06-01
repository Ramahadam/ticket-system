import { Outlet, useNavigation } from "react-router-dom";
import styles from "./AppLayout.module.css";
import { Sidebar } from "./Sidebar";
import AppHeader from "./AppHeader";
import PageHeader from "./PageHeader";

import Loader from "../ui/Loader";

function AppLayout() {
	const pageLoadingState = useNavigation();
	const isLoading = pageLoadingState.state === "loading" ?? "submitting";

	return (
		<div className={`${styles.container} `}>
			<Sidebar />
			<main>
				<AppHeader />
				<PageHeader />
				{isLoading ? <Loader position="center" /> : <Outlet />}
			</main>
		</div>
	);
}

export default AppLayout;
