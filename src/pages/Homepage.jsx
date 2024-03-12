import { Sidebar } from "../components/Sidebar";
import styles from "./Homepage.module.css";
import MainApp from "../components/MainApp";
function Homepage() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <MainApp />
    </div>
  );
}

export default Homepage;
