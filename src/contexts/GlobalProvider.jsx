import { GlobalContext } from "./GlobalContext";
import { useEffect, useState } from "react";

export const GlobalProvider = ({ children }) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [query, setQuery] = useState('');
    const [error, setError] = useState(null)
    const [hasReserched, setHasReserched] = useState(false)
    const [dataCredits, setDataCredits] = useState([])

    const api_key = import.meta.env.VITE_API_KEY

    //effettuo una chiamata fetch all'invio della query tramite input
    const fetchData = (query) => {

        //se è false termino la chiamata
        if (!query) return;

        setIsLoading(true)
        setError(null)
        setHasReserched(true)

        // chiamata per film
        const fetchMovies = fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`)
            .then((response) => response.json())
            .then((data) => data.results || [])
            .catch((err) => {
                console.log(err.message);
                setError('Error. Re-loading the page.')
                return []
            })

        // chiamata serie tv    
        const fetchTVShows = fetch(`https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${query}`)
            .then((response) => response.json())
            .then((data) => data.results || [])
            .catch((err) => {
                console.log(err.message);
                setError('Error while fetching TV shows.');
                return [];
            });

        // Attendo entrambe le risposte e combino i risultati
        Promise.all([fetchMovies, fetchTVShows])
            .then(([resultsMovies, resultsTvShows]) => {
                setData([...resultsMovies, ...resultsTvShows]); // Combina i risultati dei film e delle serie
                setIsLoading(false);
            });

    }

    useEffect(() => {
        fetchData(query)
    }, [query])

    //effettuo una chiamata fetch all'invio della query tramite input
    const fetchDataCredits = (id) => {

        //se è false termino la chiamata
        if (!id) return;

        // chiamata per film
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}&language=en-US`)
            .then((response) => response.json())
            .then((data) => (setDataCredits(data.cast) || []))
            .catch((err) => {
                console.log(err.message);
                return []
        })

    }

    
    return (

        <GlobalContext.Provider value={{ data, setQuery, isLoading, error, hasReserched, fetchDataCredits, dataCredits }}>
            {children}
        </GlobalContext.Provider>
    )
}