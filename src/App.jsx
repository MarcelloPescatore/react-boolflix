import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./contexts/GlobalProvider"
import SearchResults from "./components/SearchResults"
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <GlobalProvider >
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/results" element={<SearchResults />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
