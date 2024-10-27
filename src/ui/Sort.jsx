import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import { faSort } from "@fortawesome/free-solid-svg-icons";

function Sort() {
	return (
		<Button type="btnOutline">
			<FontAwesomeIcon icon={faSort} />
			<span>Sort</span>
		</Button>
	);
}

export default Sort;
