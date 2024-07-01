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
    <div className="flex flex-col h-screen">
      <header>
        <Header />
      </header>
      <main className="bg-base-100 mb-auto">
        <RegisterForm />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Register;