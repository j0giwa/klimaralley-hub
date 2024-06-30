import Header from "../../components/Header";

/**
 * Räumen Recyclen Rümpeln info page
 * 
 * @returns {JSX.Element}
 * @author Jonas Schwind
 * @version 0.0.1
 */
function Recycling() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="container bg-base-100 p-4">
        <h1 className="text-3xl font-bold underline">R&auml;umen Recyclen R&uuml;mpeln</h1>
      </main>
    </>
  );
}

export default Recycling;
