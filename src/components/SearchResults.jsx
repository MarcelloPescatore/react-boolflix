import { useContext} from "react";
import { GlobalContext } from "../contexts/GlobalContext";

export default function SearchResults() {
    const { data, isLoading, error } = useContext(GlobalContext)

    /* reinderizzo in pagina in caso di loading ed errori */
    if (isLoading) return <p>Caricamento...</p>;
    if (error) return <p>Errore: {error}</p>;

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
                                    {film.original_language}
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