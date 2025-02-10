import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import Jumbotron from "../components/Jumbotron";
import AppHeaderHomepage from "../components/AppHeaderHomepage";

export default function HomePage() {
    const { categoryData, selectedCategory, setSelectedCategory, isLoading } = useContext(GlobalContext);

    return (
        <>
            <AppHeaderHomepage/>
            <Jumbotron />
            <div className="container mt-5"  id="popular">
                <div className="d-flex flex-column flex-sm-row justify-content-between">
                    {/* Titolo dinamico */}
                    <h2 className="text-light mb-4">
                        {selectedCategory === "movie" ? "Popular Movies" : "Popular TV Shows"}
                    </h2>

                    {/* Bottoni per switchare tra film e serie TV */}
                    <div className="mb-4 d-flex gap-3">
                        <button
                            className={`${selectedCategory === "movie" ? "btn" : "btn-inactive rounded"}`}
                            onClick={() => setSelectedCategory("movie")}
                        >
                            Popular Movies
                        </button>
                        <button
                            className={`${selectedCategory === "tv" ? "btn" : "btn-inactive rounded"}`}
                            onClick={() => setSelectedCategory("tv")}
                        >
                            Popular TV Shows
                        </button>
                    </div>
                </div>

                {/* Mostra caricamento */}
                {isLoading && <p className="text-light">Loading...</p>}

                {/* Lista di film o serie TV */}
                <div className="row g-3">
                    {categoryData.map(item => (
                        <div key={item.id} className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 popular">
                            <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title || item.name} className="rounded w-100" />
                            <h6 className="mt-2 text-light">{item.title || item.name}</h6>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}