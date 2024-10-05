import styles from "./Button.module.css";

function Button({ children, type = "", onClick = () => "", isDisabled }) {
	const handleClick = (e) => {
		e.preventDefault();
		onClick();
	};

	return (
		<button
			className={`${styles.btn} ${styles[type]} ${
				styles[isDisabled ? "disabled" : ""]
			}`}
			onClick={handleClick}>
			{children}
		</button>
	);
}

export default Button;
