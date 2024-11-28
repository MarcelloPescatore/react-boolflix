import { GlobalContext } from "./GlobalContext";
import { useEffect, useState } from "react";

export const GlobalProvider = ({ children }) => {
    const [data, setData] = useState([])
    const [query, setQuery] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    //imposto un useEffet che effettua il codice ogni volta che cambia `query`
    useEffect(() => {

        //se è false termino la chiamata
        if (!query) return;

        setIsLoading(true)
        setError(null)

        // chiamata per film
        const fetchMovies = fetch(`https://api.themoviedb.org/3/search/movie?api_key=4f64316b70d9e5f269dcd02b9bd9b6cf&query=${query}`)
            .then((response) => response.json())
            .then((data) => data.results || [])
            .catch((err) => {
                console.log(err.message);
                setError('Error. Re-loading the page.')
                return []
            })

        // chiamata serie tv    
        const fetchTVShows = fetch(`https://api.themoviedb.org/3/search/tv?api_key=4f64316b70d9e5f269dcd02b9bd9b6cf&query=${query}`)
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

    }, [query])


    return (

        <GlobalContext.Provider value={{ data, setQuery, isLoading, error }}>
            {children}
        </GlobalContext.Provider>
    )
}