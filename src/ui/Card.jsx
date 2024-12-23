import styles from "./Card.module.css";

function Card({ ticket, status, total, icon = "" }) {
	const className = status;

	return (
		<div className={styles.card}>
			<div className={`${styles.icon} ${styles[className]}`}>{icon}</div>
			<div>
				<span>
					{status} {ticket}
				</span>
				<span>{total}</span>
			</div>
		</div>
	);
}

export default Card;
