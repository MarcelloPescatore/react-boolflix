import { useContext} from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import Flag from "react-world-flags";

export default function SearchResults() {
    const { data, isLoading, error } = useContext(GlobalContext)

    /* reinderizzo in pagina in caso di loading ed errori */
    if (isLoading) return <p>Caricamento...</p>;
    if (error) return <p>Errore: {error}</p>;

    /* funzione per ottenere la bandiera */
    const MovieFlag = ({movie}) => {
        const language = movie?.original_language

        // Se non c'è una lingua, mostro una bandiera di default
        if (!language) {
            return (
                <>
                    <span> {movie.original_language}</span>
                </>
            )
        } else if (language === 'en') {
            return <Flag code='gb' alt="flag" style={{ width: '25px', height: '15px' }} />
        }

        return(
            <Flag code={language} alt="flag" style={{ width: '25px', height: '15px' }} />
        )
    }

    return (
        <>
            {/* verifico che l'array contenga elementi altrimenti */}
            {data && data.length > 0 ? (
                <ul>
                    {data.map((film) => (
                        <li key={film.id}>
                           <ul>
                                <li>
                                    {film.title}
                                </li>
                                <li>
                                    {film.original_title}
                                </li>
                                <li>
                                    <MovieFlag movie={film} />
                                </li>
                                <li>
                                    {film.vote_average}
                                </li>
                            </ul> 
                            
                        </li>
                    ))}
                </ul>
            ) : ( 
               <p>Nessun risultato trovato.</p>
            )}
        </>
    )
}