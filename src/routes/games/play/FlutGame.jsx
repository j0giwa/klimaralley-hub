import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

/**
 * Die Flut Kommt info page
 * 
 *  Should be reached via QR-Code.
 *  Contains Redirect to game.
 * 
 * @returns {JSX.Element}
 * @author Jonas Schwind
 * @version 0.0.1
 */
function FlutGame() {
  return (
    <div className="flex flex-col h-screen">
      <header>
        <Header />
      </header>
      <main className="container bg-base-100 mb-auto p-4">
        <a href="/play/flut">Jetzt Spielen</a>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default FlutGame;
