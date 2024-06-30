import Header from "../../components/Header";

/**
 * Die Flut Kommt game page
 * 
 * 
 * @returns {JSX.Element}
 * @author Jonas Schwind
 * @version 0.0.1
 */
function Flut() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="container bg-base-100 p-4">
        <h1 className="text-3xl font-bold underline">Die Flut Kommt</h1>
      </main>
    </>
  );
}

export default Flut;
