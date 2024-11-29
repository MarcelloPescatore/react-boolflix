import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import CardItem from "./CardItem";

export default function SearchResults() {
    const { data, isLoading, error, hasReserched } = useContext(GlobalContext)

    /* reinderizzo in pagina in caso di loading ed errori */
    if (isLoading) return <p className="text-light">Caricamento...</p>;
    if (error) return <p className="text-light">Errore: {error}</p>;


    return (
        <>
            {/* verifico che l'array contenga elementi altrimenti */}
            {data && data.length > 0 ? (
                <div className="row g-4">

                    <CardItem />

                </div>
            ) : (
               hasReserched && <p className="text-light">Nessun risultato trovato.</p>
            )}
        </>
    )
}