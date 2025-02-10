import { GlobalContext } from "./GlobalContext";
import { useEffect, useState } from "react";

export const GlobalProvider = ({ children }) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [query, setQuery] = useState({ query: '', filter: 'movie' });
    const [error, setError] = useState(null)
    const [hasReserched, setHasReserched] = useState(false)
    const [dataCredits, setDataCredits] = useState({})
    const [categoryData, setCategoryData] = useState([]); // Stato per film o serie TV popolari
    const [selectedCategory, setSelectedCategory] = useState("movie");

    const api_key = import.meta.env.VITE_API_KEY

    //effettuo una chiamata fetch all'invio della query tramite input
    const fetchData = ({ query, filter }) => {
        if (!query) return;

        setIsLoading(true);
        setError(null);
        setHasReserched(true);

        // Determina l'endpoint giusto in base al filtro (film o serie TV)
        const endpoint = filter === "movie"
            ? `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`
            : `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${query}`;

        fetch(endpoint)
            .then((response) => response.json())
            .then((data) => {
                setData(data.results || []);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setError('Try Again.');
                setIsLoading(false);
            });
    };


    useEffect(() => {
        if (query.query) {
            fetchData(query);
        }
    }, [query]);

    // Funzione per ottenere i film o le serie TV più popolari
    const fetchCategory = (type = "movie") => {
        setIsLoading(true);
        setError(null);

        fetch(`https://api.themoviedb.org/3/${type}/popular?api_key=${api_key}&language=en-US&page=1`)
            .then((response) => response.json())
            .then((data) => {
                setCategoryData(data.results || []);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setError("Error fetching category data");
                setIsLoading(false);
            });
    };

    // Chiamata iniziale per caricare i film popolari
    useEffect(() => {
        fetchCategory(selectedCategory);
    }, [selectedCategory]);



    //effettuo una chiamata fetch all'invio dell`id tramite click sul button
    const fetchDataCredits = (id) => {

        //se è false termino la chiamata
        if (!id) return;

        // Verifica se i crediti sono già stati caricati
        if (dataCredits[id]) return;

        const movie_id = id

        // chiamata per film
        fetch(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${api_key}&language=en-US`)
            .then((response) => response.json())
            .then((data) => {
                setDataCredits((prevCredits) => ({
                    ...prevCredits,
                    [id]: data.cast || []
                }));
            })
            .catch((err) => {
                console.log(err.message);
                return []
            })

    }


    return (

        <GlobalContext.Provider value={{ data, setQuery, isLoading, error, hasReserched, fetchDataCredits, dataCredits, query, selectedCategory, setSelectedCategory, fetchCategory, categoryData }}>
            {children}
        </GlobalContext.Provider>
    )
}