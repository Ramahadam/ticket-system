import styles from "./Table.module.css";

function Table({ children }) {
	return <table className={styles.table}>{children}</table>;
}

export default Table;
