import { Link } from "react-router-dom"
import MyLogo from "../assets/logo_header.png"
import SearchBar from "../components/SearchBar"

export default function AppHeader() {
    return (
        <header className="d-flex align-items-center justify-content-between flex-column flex-sm-row">
            <Link to={"/"} className="mb-3 pt-2 mb-sm-0">
                <img src={MyLogo} alt="logo_marflix" />
            </Link>
            <div className="col-12 col-sm-8 col-md-5 col-xl-4">
                <SearchBar />
            </div>
        </header>
    )
}