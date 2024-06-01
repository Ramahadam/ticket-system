import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

function Login() {
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		navigate("/");
		console.log("Login");
	}

	return (
		<div className={styles.loginPage}>
			<div className={styles.login}>
				<form className={styles.form} onSubmit={handleSubmit}>
					<h1>Login </h1>

					<input
						type="text"
						name="username"
						id="username"
						placeholder="Enter username"
					/>

					<input
						type="password"
						name="password"
						id="password"
						placeholder="Enter password"
					/>

					<button className="btn btn--primary">Login</button>
				</form>
			</div>
		</div>
	);
}

export default Login;
