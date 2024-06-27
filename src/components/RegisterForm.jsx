
/**
 * Register Form Component
 * 
 * Handles User Registration
 * 
 * @returns {JSX.Element}
 * @author Jonas Schwind
 * @version 0.0.1
 */
function RegisterForm() {

  return (
    <div className="card w-96 bg-white shadow-xl m-auto p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Registrierung</h2>
      <form className="space-y-4">
        <div className="form-control">
          <label className="label" for="username">
            <span className="label-text">Anmeldename</span>
          </label>
          <input className="input input-bordered w-full"
            type="text" id="username" name="username" autoComplete="off" required/>
        </div>
        <div className="form-control">
          <label className="label" for="email">
            <span className="label-text">E-Mail</span>
          </label>
          <input className="input input-bordered w-full"
            type="email" id="email" name="email" autoComplete="off" required/>
        </div>
        <div className="form-control">
          <label className="label" for="password">
            <span className="label-text">Password</span>
          </label>
          <input className="input input-bordered w-full"
            type="password" id="password" name="password" autoComplete="off" required/>
        </div>
        <div className="form-control">
          <label className="label" for="repeat_password">
            <span className="label-text">Password Best&auml;tigen</span>
          </label>
          <input className="input input-bordered w-full"
            type="password" id="repeat_password" name="repeat_password" autoComplete="off" required/>
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Registrieren
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
