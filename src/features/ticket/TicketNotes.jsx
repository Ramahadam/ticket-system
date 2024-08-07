import { intlFormat } from "date-fns";
import styles from "./TicketNotes.module.css";

export default function TicketNotes({ ticket }) {
	const { notes } = ticket.at(0);
	console.log(notes);
	return (
		<div className={styles.notes}>
			{notes?.map((note) => {
				return (
					<div key={note.noteId} className={styles.note}>
						<p className={styles.noteDescription}>{note.noteValue}</p>
						<p>
							<span className={styles.noteAuthor}>{note.createdBy}</span>
							<span className={styles.noteDate}>
								{intlFormat(note?.createdAt, {
									year: "numeric",
									month: "numeric",
									day: "numeric",
									hour: "numeric",
									minute: "numeric",
								})}
							</span>
						</p>
					</div>
				);
			})}
		</div>
	);
}
