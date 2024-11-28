import React from "react"
import SearchBar from "./components/SearchBar"
import SearchResults from "./components/SearchResults"
import { GlobalProvider } from "./contexts/GlobalProvider"
import MyLogo from "./assets/logo_header.png"




function App() {
  return (
    <GlobalProvider >
      <header className="d-flex align-items-center justify-content-between p-4">
        <img src={MyLogo} alt="logo_marflix" />
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
