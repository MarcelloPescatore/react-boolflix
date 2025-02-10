import { useContext, useState } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import Flag from "react-world-flags";

export default function CardItem() {

    const { data, dataCredits, fetchDataCredits } = useContext(GlobalContext)
    const [visibleCredits, setVisibleCredits] = useState({});

    /* funzione per ottenere la bandiera */
    const LanguageFlag = ({ data }) => {
        const language = data?.original_language

        // Mappa manuale per alcuni codici di lingua che non sono codici di paese
        const languageToCountryCode = {
            en: "gb",  
            ja: "jp",  
            ko: "kr",  
            zh: "cn",  
            ar: "sa", 
            he: "il",  
            pt: "br",  
            fa: "ir",  
            und: "XX", 
            xx: "XX",  
            eo: "EO",  
            ia: "IA"  
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
        if (!dataCredits[id]) {
            fetchDataCredits(id);
        }
        setVisibleCredits(prevState => ({
            ...prevState,
            [id]: !prevState[id] 
        }));
    };

    return (
        <>
            {/* map per ogni item genero una card */}
            {data.map((item) => (
                <div className="col-12 col-sm-6 col-xl-4" key={item.id} >
                    {/* card */}
                    <div className="poster_item"  >
                        <img className="poster_img" src={`https://image.tmdb.org/t/p/w342/${item.poster_path}`} alt="poster_item" />

                        {/* info movie or tv series */}
                        <div className="info_item p-4">
                            <div className="info_start">
                                <h5 className="title">
                                    {item.title || item.name}
                                </h5>

                                <button className="btn_credits" onClick={() => handleCredits(item.id)}>
                                    {visibleCredits[item.id] ? "Nascondi" : "Mostra i Crediti"}
                                </button>

                                {visibleCredits[item.id] && dataCredits[item.id] && (
                                    <div className="mt-4">
                                        <ul>
                                            {dataCredits[item.id]
                                                .filter((caster) => caster.order < 6)
                                                .map((caster) => (
                                                    <li key={caster.id}>
                                                        <h6>
                                                            <span>{caster.name}</span> ({caster.character})
                                                        </h6>
                                                    </li>
                                                ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <div className="info_end">

                                {/* vote and flag */}
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
                </div >
            ))
            }
        </>
    )
}