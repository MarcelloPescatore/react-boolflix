import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import Flag from "react-world-flags";

export default function CardItem() {

    const { data, dataCredits, fetchDataCredits } = useContext(GlobalContext)

    /* funzione per ottenere la bandiera */
    const LanguageFlag = ({ data }) => {
        const language = data?.original_language

        // Mappa manuale per alcuni codici di lingua che non sono codici di paese
        const languageToCountryCode = {
            en: "gb",  // Inglese -> regno unito
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
            <Flag code={flagCode} alt="flag" style={{ width: '30px', height: '25px' }} />
        )
    }

    /* funzione per votazione in stelle */
    const renderStars = (vote) => {
        const fromeOneToFive = Math.ceil(vote * 0.5)
        const stars = []

        for (let i = 1; i <= 5; i++) {
            if (i <= fromeOneToFive) {
                stars.push(<i key={i} className="bi bi-star-fill text-warning me-2"></i>);
            } else {
                stars.push(<i key={i} className="bi bi-star text-warning me-2"></i>);
            }
        }

        return stars
    }

    const handleCredits = (id) => {
        if (!dataCredits || !dataCredits.cast) {
            fetchDataCredits(id)
        }
    }

    return (
        <>
            {/* map per ogni item genero una card */}
            {data.map((item) => (
                <div className="col-4" key={item.id} >
                    {/* card */}
                    <div className="poster_item"  >
                        <img className="poster_img" src={`https://image.tmdb.org/t/p/w342/${item.poster_path}`} alt="poster_item" />

                        <div className="info_item p-4">
                            <h2 className="title">
                                {item.title || item.name}
                            </h2>
                            <h4 className="original_title">
                                ( {item.original_title || item.original_name} )
                            </h4>

                            {dataCredits && dataCredits.cast && dataCredits.cast.length > 0 && (
                                dataCredits.cast.filter((caster) => caster.order < 6).map((caster) => (
                                    <>
                                        <p>{caster.name}</p>
                                        <p>{caster.character}</p>
                                    </>

                                ))
                            )}

                            <button onClick={handleCredits(item.id)}> Credits </button>

                            <div className="d-flex justify-content-between align-items-center">
                                <span>
                                    {renderStars(item.vote_average)}
                                </span>
                                <span>
                                    <LanguageFlag data={item} />
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            ))}
        </>
    )
}