import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./NewTicket.module.css";
import { faBug, faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { createTicket } from "../../services/apiFetchdata";

function NewTicket() {
	return (
		<div className={`container ${styles["newTicket"]}`}>
			<div className={styles.wrapper}>
				<header>
					<FontAwesomeIcon icon={faBug} className={styles.icon} />
					<h2>Create new incident</h2>
				</header>
				<Form action="/new" method="POST">
					<div className={styles.left}>
						<p>
							<label htmlFor="subject" className={styles.mandatory}>
								Subject
							</label>
							<input
								type="text"
								name="subject"
								placeholder="short description of the issue"
							/>
						</p>

						<p>
							<label htmlFor="description" className={styles.mandatory}>
								Description
							</label>
							<textarea
								name="description"
								id=""
								cols="30"
								rows="10"
								placeholder="Problem description"></textarea>
						</p>
					</div>

					<div className={styles.right}>
						<p>
							<label htmlFor="prority" className={styles.mandatory}>
								Priority
							</label>
							<select name="prority">
								<option value="Normal">Normal</option>
								<option value="Normal">High</option>
								<option value="Normal">Low</option>
							</select>
						</p>
						<p>
							<label htmlFor="status" className={styles.mandatory}>
								Status
							</label>
							<select name="status">
								<option value="open">open</option>
								<option value="completed">completed</option>
								<option value="progress">progress</option>
								<option value="hold">on hold</option>
							</select>
						</p>
						<p>
							<label htmlFor="affectedUsers" className={styles.mandatory}>
								Affected users
							</label>
							<select name="affectedUsers">
								<option value="one">1 User</option>
								<option value="tow">2 users</option>
								<option value="many">Many users</option>
							</select>
						</p>
					</div>

					<div>
						<p>
							<label htmlFor="client" className={styles.mandatory}>
								Client
							</label>
							<input type="text" name="client" placeholder="Entity" />
						</p>
						<p>
							<label htmlFor="solution">Solution</label>
							<textarea name="solution"></textarea>
						</p>
					</div>

					<div>
						{/*** TODO: fetch engineers details from api (users API) */}
						<p>
							<label htmlFor="assginee" className={styles.mandatory}>
								Assgin to
							</label>
							<select name="assginee" id="">
								<option value="john">John</option>
								<option value="peter">peter</option>
								<option value="adam">adam</option>
							</select>
						</p>
						<p>
							<label htmlFor="note">Add internal note</label>
							<textarea name="notes" id=""></textarea>
						</p>
					</div>

					{/*TODO:Feature for uploading files <div className={styles.file}>
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
					</div> */}
					<footer>
						<input type="submit" className="btn btn--primary" value="Submit" />

						<Link to="/" className="btn btn--rounded">
							Cancle
						</Link>
					</footer>
				</Form>
			</div>
		</div>
	);
}

export async function action({ request }) {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	const date = new Date();

	const ticket = {
		...data,
		notes: [
			{
				noteId: Date.now(),
				note: data.notes,
				createdBy: "Garbas", //TODO fetch the user login name.
				createdDate: date,
			},
		],
	};

	const newTicket = await createTicket(ticket);

	return redirect(`/tickets/${newTicket.id}`);
}

export default NewTicket;
