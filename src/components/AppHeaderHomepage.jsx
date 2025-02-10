import { Link } from "react-router-dom"
import MyLogo from "../assets/logo_header.png"

export default function AppHeaderHomepage() {

    const handleScroll = () => {
        const section = document.getElementById("popular");
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 100, // 100px di offset sopra l'elemento
                behavior: "smooth",
            });
        }
    };

    return (
        <header className="d-flex align-items-center justify-content-between flex-row">
            <Link to={"/"} className="mb-3 pt-2 mb-sm-0">
                <img src={MyLogo} alt="logo_marflix" />
            </Link>
            <div className="btn" onClick={handleScroll}>
                I più popolari
            </div>
        </header>
    )
}