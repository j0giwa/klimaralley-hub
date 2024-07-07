import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LoginForm from "../../components/LoginForm";

/**
 * Login Page
 * 
 * @returns {JSX.Element}
 * @author Jonas Schwind
 * @version 0.1.0
 */
function Login() {
  return (
    <div className="flex flex-col h-screen">
      <header>
        <Header />
      </header>
      <main className="bg-base-100 mb-auto">
        <LoginForm />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Login;