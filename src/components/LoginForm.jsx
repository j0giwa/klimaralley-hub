import { useState } from 'react';
import Alert from '../components/Alert';
import { setCookie } from "../lib/cookieUtils";

/**
 * Login Form Component
 *
 * Handles User Login
 *
 * @returns {JSX.Element}
 * @author Jonas Schwind
 * @author Alexander Golüke
 * @version 0.6.0
 */
function LoginForm() {
  /**
   * @typedef {Object} LoginBody
   * @property {string} email - The email of the user.
   * @property {string} password - The password of the user.
   */

  /** @type {LoginBody} */
	const [loginBody, setLoginBody] = useState({
		email: '',
		password: '',
	});

	/** @type {String} */
	const [alertMessage, setAlertMessage] = useState('');
	/** @type {String} */
	const [alertType, setAlertType] = useState('');
	/** @type {boolean} */
	const [showAlert, setShowAlert] = useState(false);

	/**
	 * Handles input field changes and updates the formData state.
	 *
	 * @param {React.ChangeEvent<HTMLInputElement>} e - input field change event
	 */
	const handleChange = (e) => {
		const { name, value } = e.target;

		setLoginBody({
			...loginBody,
			[name]: value,
		});
	};

	/**
	 * Handles form submission.
	 * Sends a POST request to the server with the form data.
	 *
	 * @param {React.FormEvent<HTMLFormElement>} e - form submission event.
	 * @returns {Promise<void>}
	 */
	const handleSubmit = async (e) => {
		e.preventDefault();

		fetch('http://localhost:8080/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(loginBody),
		})
		.then((response) => {
			if (response.ok) {
				return response.json().then((jsondata) => {
					setAlertMessage('Sie wurden eingeloggt');
					setAlertType('success');
					setCookie('jwt', jsondata.token, { path: '/' });
					console.log("Login successful:", jsondata);
				});
			} else {
				return response.json().then((errorData) => {
					setAlertMessage(errorData.message || 'Unerwarteter Fehler');
					setAlertType('error');
					console.log("Login unsuccessful:", errorData);
				});
			}
		})
		.catch((err) => {
			setAlertMessage('Unerwarteter Fehler. Bitte erneut versuchen.');
			setAlertType('error');
			console.error(err.message);
		})
		.finally(() => {
			setShowAlert(true);
		});
	};

	const handleCloseAlert = () => {
		setAlertMessage('');
		setAlertType('');
		setShowAlert(false);
	};

	return (
		<div className="card w-96 bg-base-100 m-auto p-6 md:shadow-xl md:rounded-lg">
			{showAlert && <Alert message={alertMessage} type={alertType} onClose={handleCloseAlert} />}
			<form className="space-y-4" onSubmit={handleSubmit}>
				<div className="form-control">
					<label className="label" htmlFor="email">
						<span className="label-text">E-Mail</span>
					</label>
					<input className="input input-bordered w-full"
						type="email" id="email" name="email" autoComplete="off" required
						value={loginBody.email} onChange={handleChange} />
				</div>
				<div className="form-control">
					<label className="label" htmlFor="password">
						<span className="label-text">Password</span>
					</label>
					<input className="input input-bordered w-full"
						type="password" id="password" name="password" autoComplete="off" required
						value={loginBody.password} onChange={handleChange} />
				</div>
				<button type="submit" className="btn btn-primary w-full">
					Einloggen
				</button>
			</form>
		</div>
	);
}

export default LoginForm;
