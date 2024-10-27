import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faFilter } from "@fortawesome/free-solid-svg-icons";
import styles from "./Filter.module.css";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useFilterValues } from "../Context/FilterContext";

function Filter({
	btnType,
	ticketType,
	options,
	filterColumn, //status
}) {
	const [searchParams, setSearchParams] = useSearchParams();
	const [showFilterMenu, setShowFilterMenu] = useState(false);
	const { checkValues, setCheckValues } = useFilterValues();

	const menuFilterRef = useRef(null);

	function handelOutsidClick(e) {
		if (menuFilterRef.current && !menuFilterRef.current.contains(e.target)) {
			setShowFilterMenu(false);
		}
	}

	function handleCheckBox(e) {
		const value = e?.target?.value;
		!checkValues.includes(value)
			? setCheckValues((feild) => [...feild, value])
			: setCheckValues(checkValues.filter((feild) => feild != value));

		searchParams.set(filterColumn, checkValues);
		setSearchParams(searchParams);
	}

	//state update needs to trigger a side effect (like updating the URL),
	useEffect(() => {
		const params = new URLSearchParams();
		checkValues.forEach((value) => {
			params.append(filterColumn, value);
		});
		setSearchParams(params);

		// Cleanup function
	}, [checkValues, filterColumn]);

	useEffect(() => {
		document.addEventListener("mousedown", handelOutsidClick);

		return () => document.removeEventListener("mousedown", handelOutsidClick);
	});

	const hanelClearFilter = () => {
		setCheckValues([]);
		setShowFilterMenu(false);
	};

	return (
		<div className={styles.filter} ref={menuFilterRef}>
			<Button type={btnType} onClick={() => setShowFilterMenu(!showFilterMenu)}>
				<FontAwesomeIcon icon={faFilter} className={styles.icon} />
				<span>Filter</span>
			</Button>

			{showFilterMenu && (
				<form>
					<header>
						<span>Filters</span>
						<Button onClick={() => setShowFilterMenu(false)}>
							<FontAwesomeIcon icon={faClose} />
						</Button>
					</header>

					{options.map((option) => {
						return (
							<div className={styles.formGroup} key={option.label}>
								<input
									type="checkbox"
									name={option.value}
									value={option.value}
									checked={checkValues.includes(option.value)}
									onChange={(e) => handleCheckBox(e)}
								/>
								<label
									htmlFor={
										option.value
									}>{`${ticketType} ${option.label}`}</label>
							</div>
						);
					})}

					<Button
						type="btnAccent"
						isDisabled={!checkValues.length}
						onClick={hanelClearFilter}>
						Clear filter
					</Button>
				</form>
			)}
		</div>
	);
}

export default Filter;
