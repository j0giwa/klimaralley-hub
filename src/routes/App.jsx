import Header from "../components/Header";
import Footer from "../components/Footer";

/**
 * Landing Page
 * 
 * @returns {JSX.Element}
 * @author Jonas Schwind
 * @version 0.1.0
 */
function App() {
  return (
    <div className="flex flex-col h-screen">
      <header>
        <Header />
      </header>
      <main className= "flex-row container bg-base-100 p-4 mb-auto">
        Hier könnte ihre website stehen.
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App;
