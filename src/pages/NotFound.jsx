import { Link } from "react-router-dom"
import MyLogo from "../assets/logo_header.png"
import insideOut2 from "../assets/insideOut2.png"

export default function NotFound() {
    return (
        <>
            <header className="d-flex align-items-center justify-content-between flex-column flex-sm-row">
                <Link to={"/"} className="mb-3 pt-2 mb-sm-0">
                    <img src={MyLogo} alt="logo_marflix" />
                </Link>
                <Link to={"/"}>
                    <div className="btn">
                        Torna All'HomePage
                    </div>
                </Link>
            </header>
            <main>
                <div className="container d-flex justify-content-center gap-4 align-items-center">
                    <img src={insideOut2} alt="" className="not_found_img"/>
                    <div className="d-flex flex-column">
                        <span className="text-light text-center fs-1 fw-bold">È un errore 404.</span>
                        <span className="text-light text-center fs-5 fw-light">Non ti preoccupare, nessuno conosce il vero significato di "404". <br /> Eeehmmm, cerchiamo.. di non agitarci... Affrontiamo questa situazione con calma. <br />Andrà tutto bene.. Vero?? OK.</span>
                        <span className="text-light text-center fs-5 fw-light mt-4">Premiamo quel tasto rosso per <Link className="text-light fw-bold" to={"/"}>all'Homepage</Link> che si trova da qualche parte in alto, No? </span>
                    </div>
                </div>
            </main>
        </>
    )
}