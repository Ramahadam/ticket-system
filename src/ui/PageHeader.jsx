import Archive from "../features/archive/Archive";
import CurrentDate from "../utils/CurrentDate";
import Filter from "../features/filter/Filter";

import styles from "./PageHeader.module.css";
function PageHeader() {
	return (
		<div className={styles.container}>
			<CurrentDate />
			<Archive />
			<Filter />
		</div>
	);
}

export default PageHeader;
