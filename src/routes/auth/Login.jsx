import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LoginForm from "../../components/LoginForm";
import CookieConsent from "../../components/CookieConsent";


/**
 * Login Page
 * 
 * @returns {JSX.Element}
 * @author Jonas Schwind
 * @author Alexander Golüke
 * @version 0.2.0
 */
function Login() {
  return (
    <div className="flex flex-col h-screen">
      <header>
        <Header />
      </header>
      <main className="bg-base-100 mb-auto">
        <LoginForm />
        <CookieConsent />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Login;