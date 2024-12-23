import { Link } from "react-router-dom";
import CurrentDate from "./CurrentDate";
import Filter from "./Filter";
import styles from "./OpeationsIncidents.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import SortBy from "./SortBy";

function OpeationsIncidents() {
	const options = [
		{
			label: "loged",
			value: "loged",
		},
		{
			label: "progress",
			value: "progress",
		},
		{
			label: "hold",
			value: "hold",
		},
		{
			label: "fulfiled",
			value: "fulfiled",
		},
	];

	const sortOptions = [
		{
			label: "Sorty by status asc",
			value: "status-asc",
		},
		{
			label: "Sorty by status desc",
			value: "status-desc",
		},
		{
			label: "Sorty by priority asc",
			value: "priority-asc",
		},
		{
			label: "Sorty by priority desc",
			value: "priority-desc",
		},
	];

	return (
		<div className={styles.container}>
			<CurrentDate />

			<div className={styles.flex}>
				<Filter
					btnType="btnOutline"
					ticketType="incident"
					options={options}
					filterColumn="status"
				/>
				{/* <Filter
					btnType="btnOutline"
					ticketType="incident"
					options={optionsPriority}
					filterColumn="priority"
				/> */}
				{/* <Sort /> */}

				<SortBy options={sortOptions} />

				<Button type="btnPrimary">
					<Link to="newIncident">
						<FontAwesomeIcon icon={faPlus} className={styles.icon} />
						<span>New</span>
					</Link>
				</Button>
			</div>
		</div>
	);
}

export default OpeationsIncidents;