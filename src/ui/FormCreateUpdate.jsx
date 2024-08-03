import { useForm } from "react-hook-form";
import styles from "./FormCreateUpdate.module.css";
import { calcualteDeadline, createNotes } from "../utils/helper";
import { useId as generateUniqID } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateIncident as updateIncidentAPI } from "../services/apiForIncidents";
import toast from "react-hot-toast";
import Loader from "./Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import useUpdateIncident from "../features/ticket/useUpdateIncident";

function FormCreateUpdate({ createIncident, ticket = {} }) {
	const { id: editId, ...editValues } = ticket;
	const isUpdateSession = Boolean(editId);

	const uniqID = generateUniqID();

	const { updateIncident, isPending } = useUpdateIncident();

	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
		reset,
	} = useForm({ defaultValues: isUpdateSession ? editValues : {} });

	function handleForm(data) {
		if (!data) return;

		const notes = createNotes(data, uniqID);
		const lastUpdate = new Date();

		//Update ticket
		if (editId) {
			const ticket = { ...data, notes, lastUpdate };
			console.log(ticket, editId);
			updateIncident({ ticket, editId });
		}

		//Create ticket
		if (!editId) {
			const ticket = {
				...data,
				file: data.file[0],
				notes,
				lastUpdate,
				priority: Number(data.priority),
				deadline: calcualteDeadline(Number(data.priority)),
			};

			console.log(ticket);
			createIncident(ticket);

			reset();
			// navigate(`/dashboard/${}`)
		}
	}

	if (isPending) return <Loader />;

	return (
		<form onSubmit={handleSubmit(handleForm)} className={styles.createUpdate}>
			<div className={styles.left}>
				<p>
					<label htmlFor="subject" className={styles.mandatory}>
						Subject
					</label>
					<input
						type="text"
						{...register("subject", {
							required: "This feild is required.",
							minLength: {
								value: 5,
								message: "Minimum 5 characters :(",
							},
						})}
						placeholder="short description of the issue"
					/>
					<span className="error">
						{errors["subject"]?.message && errors["subject"]?.message}
					</span>
				</p>

				<p>
					<label htmlFor="summary" className={styles.mandatory}>
						Summary
					</label>
					<textarea
						{...register("summary", {
							required: "This feild is required.",
							minLength: {
								value: 5,
								message: "Minimum 5 characters :(",
							},
						})}
						id=""
						cols="30"
						rows="10"
						placeholder="Problem summary"></textarea>{" "}
					<span className="error">
						{errors["summary"]?.message && errors["summary"]?.message}
					</span>
				</p>
			</div>

			<div className={styles.right}>
				<p>
					<label htmlFor="priority" className={styles.mandatory}>
						Priority
					</label>
					<select
						defaultValue={getValues().priority}
						name="priority"
						{...register("priority", {
							required: "This feild is required.",
						})}>
						<option value={3}>Normal</option>
						<option value={1}>High</option>
						<option value={4}>Low</option>
						<option value={2}>Meduim</option>
					</select>{" "}
					<span className="error">
						{errors["priority"]?.message && errors["priority"]?.message}
					</span>
				</p>
				<p>
					<label htmlFor="status" className={styles.mandatory}>
						Status
					</label>
					<select
						defaultValue={getValues().status}
						{...register("status", {
							required: "This feild is required.",
						})}>
						<option value="loged">Loged</option>
						<option value="fulfiled">fulfiled</option>
						<option value="progress">progress</option>
						<option value="hold">on hold</option>
					</select>{" "}
					<span className="error">
						{errors["status"]?.message && errors["status"]?.message}
					</span>
				</p>
				<p>
					<label htmlFor="impact" className={styles.mandatory}>
						Affected users
					</label>
					<select
						defaultValue={getValues().impact}
						{...register("impact", {
							required: "This feild is required.",
						})}>
						<option value="one">1 User</option>
						<option value="tow">2 users</option>
						<option value="many">Many users</option>
					</select>{" "}
					<span className="error">
						{errors["impact"]?.message && errors["impact"]?.message}
					</span>
				</p>
			</div>

			<div>
				<p>
					<label htmlFor="requester" className={styles.mandatory}>
						Requester
					</label>
					<input
						type="text"
						placeholder="Entity"
						{...register("requester", {
							required: "This feild is required.",
							minLength: {
								value: 5,
								message: "Minimum 5 characters :(",
							},
						})}
					/>{" "}
					<span className="error">
						{errors["requester"]?.message && errors["requester"]?.message}
					</span>
				</p>
				<p>
					<label htmlFor="solution">Solution</label>
					<textarea {...register("solution")}></textarea>
				</p>
			</div>

			<div>
				{/*** TODO: fetch engineers details from api (users API) */}
				<p>
					<label htmlFor="engineer" className={styles.mandatory}>
						Assgin to
					</label>
					<select
						defaultValue={getValues().engineer}
						id=""
						{...register("engineer", {
							required: "This feild is required.",
						})}>
						<option value="john">John</option>
						<option value="peter">peter</option>
						<option value="adam">adam</option>
					</select>{" "}
					<span className="error">
						{errors["engineer"]?.message && errors["engineer"]?.message}
					</span>
				</p>
				<p>
					<label htmlFor="notes">Add internal note</label>
					<textarea id="" {...register("notes")}></textarea>
				</p>
			</div>

			<div className={styles.file}>
				<div className={styles.fileWrapper}>
					<FontAwesomeIcon icon={faFolderOpen} />
					<label htmlFor="fileInput">
						<span>Browse Files </span>or Drag files here &#91; Max size: 10 MB.
						&#93;
					</label>
					<input
						type="file"
						{...register("file")}
						placeholder="Browse Files"
						accept="image/*,.pdf"
						id="fileInput"
					/>
				</div>
			</div>
			<footer>
				<input type="submit" className="btn btn--primary" value="Submit" />

				<a to="/" className="btn btn--rounded">
					Cancle
				</a>
			</footer>
		</form>
	);
}

export default FormCreateUpdate;
