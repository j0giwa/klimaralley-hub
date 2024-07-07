import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import CookieConsent from "../../../components/CookieConsent";

/**
 * Räumen Recyclen Rümpeln game page
 * 
 *  Should be reached via QR-Code.
 * Contains Redirect to game.
 * 
 * @returns {JSX.Element}
 * @author Jonas Schwind
 * @author Alexander Golüke
 * @version 0.1.1
 */
function RecyclingGame() {
  return (
    <div className="flex flex-col h-screen">
      <header>
        <Header />
      </header>
      <main className="container bg-base-100 mb-auto p-4">
        <a href="/play/recycling">Jetzt Spielen</a>
        <CookieConsent />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default RecyclingGame;
