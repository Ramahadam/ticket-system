import styles from "./Login.module.css";

function Login() {
	return (
		<div className={styles.loginPage}>
			<div className={styles.login}>
				<form className={styles.form}>
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
