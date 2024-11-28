import SearchBar from "./components/SearchBar"
import SearchResults from "./components/SearchResults"
import { GlobalProvider } from "./contexts/GlobalProvider"



function App() {
  return (
    <GlobalProvider >
      <header className="d-flex align-items-center justify-content-between p-4">
        <img src="https://fontmeme.com/permalink/241128/6dcdfdf662c09ca1dc0d3973751660c7.png" alt="logo_marflix" />
        <SearchBar />
      </header>
      <main className="flex-grow-1 d-flex">
        <div className="container my-3">
          <h1 className="mb-3">Results</h1>
          <SearchResults />
        </div>
      </main>
      <footer className="text-center py-3 mt-auto">
        <h5>© Copyright 2024. Made by Marcello</h5>
      </footer>
    </GlobalProvider>
  )
}

export default App
