import { useSearchParams } from "react-router-dom";
import styles from "./SortBy.module.css";

function SortBy({ options }) {
	const [searchParams, setSearchParams] = useSearchParams();

	const sortBy = searchParams.get("sortBy") || "";

	function handelChange(e) {
		console.log(e.target.value);
		searchParams.set("sortBy", e.target.value);
		setSearchParams(searchParams);
	}

	return (
		<select value={sortBy} onChange={handelChange}>
			{options.map((option) => (
				<option value={option.value} key={option.value}>
					{option.label}
				</option>
			))}
		</select>
	);
}

export default SortBy;
