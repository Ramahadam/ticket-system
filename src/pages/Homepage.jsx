import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import styles from "./Homepage.module.css";
// import MainApp from "../components/MainApp";
import AppHeader from "../components/AppHeader";
import PageHeader from "../components/PageHeader";
// import TicketsList from "../components/TicketsList";
function Homepage() {
  return (
    <div className={styles.container}>
      <Sidebar />
      {/* <MainApp /> */}
      <div>
        <AppHeader />
        <PageHeader />

        <Outlet />
      </div>
    </div>
  );
}

export default Homepage;
