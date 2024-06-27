import Header from "../../components/Header";

/**
 * Wasserarm-satt info page
 * 
 * @returns {JSX.Element}
 * @author Jonas Schwind
 * @version 0.0.1
 */
function Wasserarm() {
	return (
    <>
      <header>
        <Header />
      </header>
      <main className="container bg-base-100 p-4">
        <h1 className="text-3xl font-bold underline">Wasserarm Satt</h1>
      </main>
    </>
  );
}

export default Wasserarm;