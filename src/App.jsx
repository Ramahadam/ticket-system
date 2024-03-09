import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
function App() {
  return (
    <main className={styles.app}>
      <Sidebar />
    </main>
  );
}

export default App;
