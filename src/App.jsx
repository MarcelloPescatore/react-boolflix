import React from "react"
import { GlobalProvider } from "./contexts/GlobalProvider"
import AppHeader from "./components/AppHeader"
import SearchResults from "./components/SearchResults"
import AppFooter from "./components/AppFooter"


function App() {
  return (
    <GlobalProvider >
      <AppHeader />
      <main className="flex-grow-1 d-flex">
        <div className="container my-3">
          <h1 className="mb-3">Results</h1>
          <SearchResults />
        </div>
      </main>
      <AppFooter />
    </GlobalProvider>
  )
}

export default App
