import heroPhoto from "../assets/hero-photo.jpg"
import AppHeaderHomepage from "./AppHeaderHomepage";
import SearchBar from "./SearchBar";

export default function Jumbotron() {

    return (
        <div className="jumbotron d-flex flex-column align-items-center justify-content-center" style={{ backgroundImage: `url(${heroPhoto})` }}>
            <div className="jumbotron-overlay">
            </div>
            
            <div className="z-2">
                <h1 className="text-center">Benevenuto su Marflix</h1>
                <SearchBar />
            </div>
        </div>
    );
}
