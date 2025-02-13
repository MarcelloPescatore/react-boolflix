import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import CardItem from "./CardItem";
import AppHeader from "../components/AppHeader";
import ScrollUp from "../components/ScrollUp";

export default function SearchResults() {
    const { data, isLoading, error, hasReserched, query } = useContext(GlobalContext)

    /* reinderizzo in pagina in caso di loading ed errori */
    if (isLoading) return <p className="text-light">Caricamento...</p>;
    if (error) return <p className="text-light">Errore: {error}</p>;


    return (
        <>
            <AppHeader />

            <main className="container mt-4">
                <div className="mb-4 d-flex justify-content-between align-items-end">
                    <h2 className="text-light">Ecco i tuoi risultati</h2>
                    <h5 className="text-light fw-light"> <span className="fw-bold">Categoria</span> {query.filter === "movie" ? "(Film)" : "(Serie TV)"}</h5>
                </div>
                {/* verifico che l'array contenga elementi altrimenti */}
                {data && data.length > 0 ? (
                    <div className="row g-4">

                        <CardItem />

                    </div>
                ) : (
                    hasReserched && <p className="text-light">No results found.</p>
                )}
                <ScrollUp/>
            </main>
        </>
    )
}