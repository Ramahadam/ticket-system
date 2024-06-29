import styles from "./DisplayTicket.module.css";
import { redirect, useLoaderData, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons/faFolderOpen";
import { faBug } from "@fortawesome/free-solid-svg-icons";
import { getTicket, updateTicketApi } from "../../services/apiFetchdata";
import { useState } from "react";

function DisplayTicket() {
	const ticket = useLoaderData();

	return (
		<div className={`container ${styles.ticketContainer}`}>
			<div className={styles.wrapper}>
				<menu>
					<button className={` ${styles.btnTab} ${styles.active}`}>
						Ticket
					</button>
					<button className={` ${styles.btnTab}`}>Attachements</button>
					<button className={` ${styles.btnTab}`}>Notes</button>
				</menu>

				<TicketDetails ticket={ticket} />
			</div>
		</div>
	);
}

function TicketDetails({ ticket }) {
	const {
		id,
		client,
		subject,
		created,
		updated,
		prority,
		description,
		solution,
		notes,
		status,
	} = ticket.at(0);

	const [formPriority, setFormProiority] = useState(prority);
	const [formNotes, setFormNotes] = useState(notes);
	const [formStatus, setFormStatus] = useState(status);
	const navigate = useNavigate();

	const statusValues = ["open", "on hold", "in progress", "completed"];
	const prorities = ["low", "normal", "high"];
	console.log(formPriority);

	function handelFormSubmit(e) {
		e.preventDefault();
		console.log("form handle");

		const updatedTicket = {
			id,
			client,
			subject,
			created,
			updated: new Date(),
			prority: formPriority,
			description,
			solution,
			notes: [
				...notes,
				{
					createdBy: "Garbas",
					createdDate: new Date(),
					note: formNotes,
					noteId: Date.now(),
				},
			],
			status: formStatus,
		};

		updateTicketApi(id, updatedTicket);
		console.log(updatedTicket);

		navigate(0);
	}
	return (
		<div className={styles.cols}>
			<div className={styles.leftCol}>
				<h2>
					<FontAwesomeIcon icon={faBug} />
					&nbsp;
					<p>Incident {id}</p>
					<span>{subject}</span>
				</h2>
				<p className={styles.client}>By {client}</p>

				<div className={styles.description}>
					<h3>Description</h3>
					<p>{description}</p>
				</div>
			</div>

			<div className={styles.rightCol}>
				<p>
					<strong>Created on </strong> {created}
				</p>
				<p>
					<strong>Due date on</strong> {updated}
				</p>

				<div>
					<strong>Impacted users</strong>
					<p>1 User</p>
				</div>

				<label htmlFor="status ">
					<strong>Status&nbsp;</strong>
					<span className="openLable"> {formStatus}</span>
				</label>
				<select
					disabled={status === "completed"}
					name="status"
					id="status"
					defaultValue={formStatus}
					onChange={(e) => setFormStatus(e.target.value)}>
					{statusValues.map((stat) => {
						return (
							<option value={stat} key={stat}>
								{stat}
							</option>
						);
					})}
				</select>

				<label htmlFor="priority">
					<strong>Priority ({formPriority})</strong>
				</label>
				<select
					disabled={status === "completed"}
					defaultValue={formPriority}
					onChange={(e) => setFormProiority(e.target.value)}>
					{prorities.map((priority, i) => {
						return (
							<option value={priority} key={i}>
								{priority}
							</option>
						);
					})}
				</select>
			</div>

			<div className={styles.conversation}>
				<div className={styles.solution}>
					<h3>Solution</h3>
					<p>{solution ? solution : "No solution yet provided"}</p>
				</div>

				<div className={styles.conversationContainer}>
					<h3>Conversation</h3>
					<div className={styles.notes}>
						{notes
							? notes.map((note) => {
									return (
										<div className={styles.note} key={note.noteId}>
											<p>{note.note}</p>
											<p>
												{note.createdBy} {note.createdDate}
											</p>
										</div>
									);
							  })
							: ""}
					</div>
					<form action="" onSubmit={(e) => handelFormSubmit(e)}>
						<textarea
							name="conversation"
							id=""
							cols="30"
							rows="10"
							placeholder="add internal note"
							onChange={(e) => setFormNotes(e.target.value)}></textarea>
						<div className={styles.fileWrapper}>
							<FontAwesomeIcon icon={faFolderOpen} />
							<label htmlFor="fileInput">
								<span>Browse Files </span>or Drag files here &#91; Max size: 10
								MB. &#93;
							</label>
							<input
								type="file"
								name="file"
								placeholder="Browse Files"
								accept="image/*,.pdf"
								id="fileInput"
							/>
						</div>

						<button className="btn btn--primary">
							{status === "completed" ? "Add internal note" : "Update ticket"}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

// function TicketNotes() {}

// function TicketAttachments() {}

export async function loader({ params }) {
	const ticketId = params.id;
	const ticket = await getTicket(ticketId);

	return ticket;
}

export default DisplayTicket;
