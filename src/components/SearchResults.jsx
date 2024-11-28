import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import Flag from "react-world-flags";

export default function SearchResults() {
    const { data, isLoading, error } = useContext(GlobalContext)

    /* reinderizzo in pagina in caso di loading ed errori */
    if (isLoading) return <p>Caricamento...</p>;
    if (error) return <p>Errore: {error}</p>;

    /* funzione per ottenere la bandiera */
    const LanguageFlag = ({ data }) => {
        const language = data?.original_language

        // Mappa manuale per alcuni codici di lingua che non sono codici di paese
        const languageToCountryCode = {
            en: "gb",  // Inglese → Regno Unito
            it: "it",  // Italiano → Italia
            es: "es",  // Spagnolo → Spagna
            fr: "fr",  // Francese → Francia
            de: "de",  // Tedesco → Germania
            ja: "jp",  // Giapponese → Giappone
            ko: "kr",  // Coreano → Corea del Sud
            zh: "cn",  // Cinese → Cina
            ar: "sa",  // Arabo → Arabia Saudita
            he: "il",  // Ebraico → Israele
            pt: "br",  // Portoghese → Brasile
            fa: "ir",  // Farsi (Persiano) → Iran
            und: "XX", // Non determinato
            xx: "XX",  // Nessun contenuto linguistico
            eo: "EO",  // Esperanto
            ia: "IA"   // Interlingua
        };

        const flagCode = languageToCountryCode[language] || language

        return (
            <Flag code={flagCode} alt="flag" style={{ width: '15px', height: '10px' }} />
        )
    }

    /* funzione per votazione in stelle */
    const renderStars = (vote) => {
        const fromeOneToFive = Math.ceil(vote * 0.5)
        const stars = []

        for (let i = 1; i <= 5; i++) {
            if (i <= fromeOneToFive) {
                stars.push(<span key={i}>★</span>); // Stella piena
            } else {
                stars.push(<span key={i}>☆</span>); // Stella vuota
            }
        }

        return stars
    }

    return (
        <>
            {/* verifico che l'array contenga elementi altrimenti */}
            {data && data.length > 0 ? (
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>
                            <ul>
                                <li>
                                    <img src={`https://image.tmdb.org/t/p/w185/${item.poster_path}`} alt="" />
                                </li>
                                <li>
                                    {item.title || item.name}
                                </li>
                                <li>
                                    {item.original_title || item.original_name}
                                </li>
                                <li>
                                    <LanguageFlag data={item} />
                                </li>
                                <li>
                                    {renderStars(item.vote_average)}
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