
/**
 * Login Form Component
 * 
 * Handles User Registration
 * 
 * @returns {JSX.Element}
 * @author Jonas Schwind
 * @version 0.6.0
 */
function LoginForm() {

	return (
		<div className="card w-96 bg-base-100 m-auto p-6 md:shadow-xl md:rounded-lg">
			<h2 className="text-2xl font-bold text-center mb-4">Anmeldung</h2>
			<form className="space-y-4">
				<div className="form-control">
					<label className="label" htmlFor="email">
						<span className="label-text">E-Mail</span>
					</label>
					<input className="input input-bordered w-full"
						type="email" id="email" name="email" required/>
				</div>
				<div className="form-control">
					<label className="label" htmlFor="password">
						<span className="label-text">Password</span>
					</label>
					<input className="input input-bordered w-full"
						type="password" id="password" name="password" required/>
				</div>
				<button type="submit" className="btn btn-primary w-full">
					Registrieren
				</button>
			</form>
		</div>
	);
}

export default LoginForm;
