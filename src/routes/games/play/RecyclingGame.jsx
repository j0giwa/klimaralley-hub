import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

/**
 * Räumen Recyclen Rümpeln game page
 * 
 *  Should be reached via QR-Code.
 * Contains Redirect to game.
 * 
 * @returns {JSX.Element}
 * @author Jonas Schwind
 * @version 0.0.1
 */
function RecyclingGame() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="container bg-base-100 p-4">
        <a href="/play/recycling">Jetzt Spielen</a>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default RecyclingGame;
