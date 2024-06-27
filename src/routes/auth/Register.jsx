import Header from "../../components/Header";
import RegisterForm from "../../components/RegisterForm";

/**
 * Register Page
 * 
 * @returns {JSX.Element}
 * @author Jonas Schwind
 * @version 0.1.0
 */
function Register() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="bg-base-100">
        <RegisterForm />
      </main>
    </>
  );
}

export default Register;