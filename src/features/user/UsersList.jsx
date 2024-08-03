import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUsers } from "../../context/UsersContext";
import styles from "./UsersList.module.css";
import {
	faClipboardUser,
	faPen,
	faPenToSquare,
	faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import UserForm from "./UserForm";

function UsersList() {
	return (
		<div className={`container ${styles.users} `}>
			{/* {isUsersLoading && "Loading..."}
			{showUsersForm && <UserForm />} */}
			<header>
				<hgroup>
					<FontAwesomeIcon icon={faClipboardUser} className={styles.icon} />
					<h2>User details</h2>
				</hgroup>

				<button className={styles.btnUser}>
					<FontAwesomeIcon icon={faPen} />
					<span>Create User</span>
				</button>
			</header>

			<table>
				<thead>
					<tr>
						<th>&nbsp;</th>
						<th>Username</th>
						<th>First name</th>
						<th>Last name</th>
						<th>Email</th>
						<th>Role</th>
						<th>Update</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{users
						? users.map((user) => {
								return (
									<tr key={user.userId}>
										<td className={styles.userColId}>{user.userId}</td>
										<td>{user.firstName}</td>
										<td>{user.lastName}</td>
										<td>{user.email}</td>
										<td>{user.role}</td>
										<td>{user.disabled ? "Disabled" : "Active"}</td>
										<td>
											<FontAwesomeIcon
												icon={faPenToSquare}
												className={styles.iconUpdate}
											/>
										</td>
										<td>
											<FontAwesomeIcon
												icon={faTrashCan}
												className={styles.iconDelete}
											/>
										</td>
									</tr>
								);
						  })
						: ""}
				</tbody>
			</table>
		</div>
	);
}

export default UsersList;
