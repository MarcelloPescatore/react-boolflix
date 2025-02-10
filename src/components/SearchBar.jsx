import { useState, useContext, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalContext";

export default function SearchBar() {
    const { setQuery } = useContext(GlobalContext);
    const [inputValue, setInputValue] = useState('');
    const [filter, setFilter] = useState('movie'); // Default: Movies
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const dropdownRef = useRef(null);

    // Gestisce il click fuori dalla tendina
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false); 
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSearch = () => {
        if (!inputValue.trim()) return; // Evita ricerche vuote
        setQuery({ query: inputValue.toLowerCase(), filter });
        navigate('/results');
        setInputValue('');
    };

    const handleFilterChange = (value) => {
        setFilter(value);
        setIsOpen(false); 
    };

    return (
        <div className="search_bar d-flex flex-wrap gap-2">
            <div className="col-12 col-sm-6 flex-grow-1">
                <input
                    type="text"
                    value={inputValue}
                    placeholder="Cerca la serie o il tuo film preferito"
                    onKeyUp={(e) => e.key === 'Enter' && handleSearch()}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="form-control"
                />
            </div>
            {/* Dropdown personalizzato */}
            <div className="custom-dropdown col-6 flex-grow-1 col-sm-2" ref={dropdownRef}>
                <div className="dropdown-header btn rounded me-2 d-flex justify-content-between align-items-center" onClick={() => setIsOpen(!isOpen)} tabIndex={0}>
                    <span className="fw-medium"> {filter === "movie" ? "Film" : "Serie TV"} </span>
                    <i className={`bi fw-bold ${isOpen ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
                </div>
                {isOpen && (
                    <ul className="dropdown-list mx-0 my-0 px-0 rounded">
                        <li
                            className={`dropdown-item pt-2 ps-3  ${filter === "movie" ? "active" : ""}`}
                            onClick={() => handleFilterChange("movie")}
                        >
                            Film
                        </li>
                        <li
                            className={`dropdown-item pb-2 pt-1 ps-3 ${filter === "tv" ? "active" : ""}`}
                            onClick={() => handleFilterChange("tv")}
                        >
                            Serie TV
                        </li>
                    </ul>
                )}
            </div>
            <div className="btn col-5 col-sm-2" onClick={handleSearch}>Cerca</div>
        </div>
    );
}
