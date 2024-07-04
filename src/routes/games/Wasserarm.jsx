import Header from "../../components/Header";
import Footer from "../../components/Footer";

/**
 * Wasserarm-satt info page
 * 
 * @returns {JSX.Element}
 * @author Jonas Schwind
 * @version 0.0.1
 */
function Wasserarm() {
  return (
    <div className="flex flex-col h-screen">
      <header>
        <Header />
      </header>
      <main className="bg-base-100 mb-auto">
        <div className="items-center justify-center">
          <section className="md:w-4/5 m-auto p-6 md:shadow-xl md:rounded-lg">
            {/* TODO: Insert map */}
            <article className="prose">
              <h1 className="text-xl font-medium mb-2">Wasserarm Satt</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="collapse collapse-arrow">
                <input type="checkbox" checked/>
                <summary className="collapse-title text-xl font-medium">Spielprinzip</summary>
                <div className="collapse-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
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

export default Wasserarm;
