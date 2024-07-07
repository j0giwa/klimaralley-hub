import Header from "../../components/Header";
import Footer from "../../components/Footer";
import RegisterForm from "../../components/RegisterForm";
import CookieConsent from "../../components/CookieConsent";

/**
 * Register Page
 * 
 * @returns {JSX.Element}
 * @author Jonas Schwind
 * @author Alexander Golüke
 * @version 0.2.0
 */
function Register() {
  return (
    <div className="flex flex-col h-screen">
      <header>
        <Header />
      </header>
      <main className="bg-base-100 mb-auto">
        <RegisterForm />
        <CookieConsent />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Register;