import MyLogo from "../assets/logo_header.png"
import SearchBar from "../components/SearchBar"

export default function AppHeader() {
    return (
        <header className="d-flex align-items-center justify-content-between p-4">
            <img src={MyLogo} alt="logo_marflix" />
            <SearchBar />
        </header>
    )
}