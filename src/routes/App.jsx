import Header from "../components/Header"

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className= "container bg-base-100 p-4">
        <h1 className="text-3xl font-bold underline">
	  Klimaralley
        </h1>
        <ul>
	  <li><a href="/play/flut">Die Flut Kommt</a></li>
	  <li><a href="/play/recycling">Räumen Recyclen Rümplen</a></li>
	  <li><a href="/play/wasserarm">Wasserarm Satt</a></li>
        </ul>
      </main>
    </>
  )
}

export default App
