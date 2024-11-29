import {React, useState} from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { useContext } from "react";

export default function SearchBar() {
    const { fetchData } = useContext(GlobalContext)
    const [inputValue, setInputValue] = useState('');

    const handleSearch = () => {
       fetchData(inputValue.toLowerCase())
        setInputValue('')
    }

    const handleKeyEnter = (e) => {
        if (e.key === 'Enter') {
         handleSearch()   
        }
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }


    return (
        <div className="search_bar d-flex">
            <input
                type="text"
                value={inputValue}
                placeholder="Search..."
                onKeyUp={handleKeyEnter}
                onChange={handleChange}
                className="form-control me-2"
            />
            <div className="btn" onClick={handleSearch}>Search </div>
        </div>
    )
}