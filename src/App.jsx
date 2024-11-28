import SearchBar from "./components/SearchBar"
import SearchResults from "./components/SearchResults"
import { GlobalProvider } from "./contexts/GlobalProvider"



function App() {
  return (
    <GlobalProvider >

      <header>
        <h1>Boolflix</h1>
        <SearchBar />
      </header>
      <main>
        <h2>Results</h2>
        <SearchResults />
      </main>
    </GlobalProvider>
  )
}

export default App
