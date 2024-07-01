import Header from "../components/Header";

/**
 * Landing Page
 * 
 * @returns {JSX.Element}
 * @author Jonas Schwind
 * @version 0.1.0
 */
function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className= "container bg-base-100 p-4">
        Hier könnte ihre website stehen.
      </main>
    </>
  )
}

export default App;
