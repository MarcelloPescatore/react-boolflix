import {React, useState} from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { useContext } from "react";

export default function SearchBar() {
    const { setQuery } = useContext(GlobalContext)
    const [inputValue, setInputValue] = useState('');

    const handleSearch = () => {
        setQuery(inputValue)
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
        <>
            <input
                type="text"
                value={inputValue}
                placeholder="🔍 search..."
                onKeyUp={handleKeyEnter}
                onChange={handleChange}
            />
            <button onClick={handleSearch}>Search</button>
        </>
    )
}