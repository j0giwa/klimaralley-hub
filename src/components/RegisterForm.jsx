import { useState } from 'react';
import Alert from '../components/Alert';

/**
 * Register Form Component
 *
 * Handles User Registration
 *
 * @returns {JSX.Element}
 * @author Jonas Schwind
 * @version 0.6.0
 */
function RegisterForm() {

  /**
   * @typedef {Object} RegisterBody
   * @property {string} username - The username of the user.
   * @property {string} email - The email of the user.
   * @property {string} password - The password of the user.
   * @property {string} verifyPassword - The repeated password for confirmation.
   */

  /** @type {RegisterBody} */
  const [registerBody, setRegisterBody] = useState({
    username: '',
    email: '',
    password: '',
    verifyPassword: '',
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

    setRegisterBody({
      ...registerBody,
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
  
    const api = import.meta.env.VITE_API_URL || 'http://localhost:8080';
    const method = '/auth/register';
    
    fetch(`${api}${method}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerBody),
    })
    .then((response) => {
      if (response.ok) {
        return response.json().then((jsondata) => {
          setAlertMessage('Sie wurden registriert');
          setAlertType('success');
          console.log("Registration successful:", jsondata);
        });
      } else {
        return response.json().then((errorData) => {
          setAlertMessage(errorData.message || 'Unerwarteter Fehler');
          setAlertType('error');
          console.log("Registration unsuccessful:", errorData);
        });
      }
    })
    .catch((err) => {
      setAlertMessage('Unexpected error. Please try again.');
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
      <h2 className="text-2xl font-bold text-center mb-4">Registrierung</h2>
      {showAlert && <Alert message={alertMessage} type={alertType} onClose={handleCloseAlert} />}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label" htmlFor="username">
            <span className="label-text">Anmeldename</span>
          </label>
          <input className="input input-bordered w-full"
            type="text" id="username" name="username" autoComplete="off" required
            value={registerBody.username} onChange={handleChange} />
        </div>
        <div className="form-control">
          <label className="label" htmlFor="email">
            <span className="label-text">E-Mail</span>
          </label>
          <input className="input input-bordered w-full"
            type="email" id="email" name="email" autoComplete="off" required
            value={registerBody.email} onChange={handleChange} />
        </div>
        <div className="form-control">
          <label className="label" htmlFor="password">
            <span className="label-text">Password</span>
          </label>
          <input className="input input-bordered w-full"
            type="password" id="password" name="password" autoComplete="off" required
            value={registerBody.password} onChange={handleChange} />
        </div>
        <div className="form-control">
          <label className="label" htmlFor="verifyPassword">
            <span className="label-text">Password Best&auml;tigen</span>
          </label>
          <input className="input input-bordered w-full"
            type="password" id="verifyPassword" name="verifyPassword" autoComplete="off" required
            value={registerBody.verifyPassword} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Registrieren
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
