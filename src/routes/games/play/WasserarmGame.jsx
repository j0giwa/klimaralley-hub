import Header from "../../../components/Header";

/**
 * Wasserarm-satt info page
 * 
 * Contains Redirect to game.
 * 
 * @returns {JSX.Element}
 * @author Jonas Schwind
 * @version 0.0.1
 */
function WasserarmGame() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="container bg-base-100 p-4">
        <a href="/play/wasserarm">Jetzt Spielen</a>
      </main>
    </>
  );
}

export default WasserarmGame;
