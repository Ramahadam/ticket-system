import styles from "./Table.module.css";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

function Table({ data }) {
	return (
		<table className={styles["tickets-table"]}>
			<TableHead />
			<TableBody data={data} styles={styles} />
		</table>
	);
}

export default Table;
