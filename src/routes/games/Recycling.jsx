import Header from "../../components/Header";
import Footer from "../../components/Footer";

/**
 * Räumen Recyclen Rümpeln info page
 * 
 * @returns {JSX.Element}
 * @author Jonas Schwind
 * @version 0.0.1
 */
function Recycling() {
  return (
    <div className="flex flex-col h-screen">
      <header>
        <Header />
      </header>
      <main className="bg-base-100 mb-auto">
        <div className="items-center justify-center">
          <section className="w-4/5 m-auto p-6 shadow-xl rounded-lg">
            {/* TODO: Insert map */}
            <article className="prose">
              <h1 className="text-xl mb-2">R&auml;umen, Recyclen, R&uuml;mpeln</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </article>
          </section>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Recycling;
