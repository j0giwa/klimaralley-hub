import Header from "../../components/Header";
import Footer from "../../components/Footer";
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
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Register;