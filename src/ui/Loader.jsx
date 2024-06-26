import styles from "./Loader.module.css";

function Loader({ position }) {
	console.log(position);
	if (position === "center")
		return <div className={`${styles.loader} ${styles["center"]}`}></div>;

	return <div className={styles.loader}></div>;
}

export default Loader;
