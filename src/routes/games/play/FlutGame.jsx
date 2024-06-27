import Header from "../../../components/Header";

/**
 * Die Flut Kommt info page
 * 
 * Contains Redirect to game.
 * 
 * @returns {JSX.Element}
 * @author Jonas Schwind
 * @version 0.0.1
 */
function FlutGame() {
	return (
		<>
      <header>
        <Header />
      </header>
      <main className="container bg-base-100 p-4">
        <a href="/play/flut">Jetzt Spielen</a>
      </main>
		</>
	);
}

export default FlutGame;