import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import "../Css/MovieDetails.css"
import data from "../moviedata.json";
import Chip from "./Chip";
import HorizontalList from "./HorizontalList";
import Rating from "./Rating";

const OVERVIEW_SIZE = 120;

function MovieDetails() {
  const [seeMore, setSeeMore] = useState(false);
  const toggle = () => setSeeMore(!seeMore);
  const { id } = useParams();
  const movie = data.movies.find((movie) => movie.id.toString() === id);
  if (!movie) return <Navigate to="/" replace={true} />;
  const suggestions = data.movies.filter(
    (suggestion) =>
      suggestion.id !== movie.id &&
      suggestion.genre_ids.some((genre) => movie.genre_ids.includes(genre))
  );
  return (
    <div className="text-center py-2 px-2">
      <div className="container-movies">
        <img
          src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
          alt={movie.title}
          className=""
        />
        <div>
          <h1 className="">{movie.title}</h1>
          <p>
            sorti le{" "}
            {new Intl.DateTimeFormat("fr", { dateStyle: "long" }).format(
              new Date(movie.release_date)
            )}
          </p>
          <div className="d-flex justify-content-center">
            {movie.genre_ids.map((genre) => (
              <div className="">
                <Chip key={genre} id={genre} />
              </div>
            ))}
          </div>
        </div>
      
      <p>
        {movie.overview.substring(
          0,
          seeMore ? movie.overview.length - 1 : OVERVIEW_SIZE
        )}
        {!seeMore && movie.overview.length > OVERVIEW_SIZE ? "..." : ""}
        {!seeMore && (
          <>
            <br />
            <button onClick={toggle} className="button-movies">
              Lire plus
            </button>
          </>
        )}
      </p>
      <h2>Note du public</h2>
      <Rating value={movie.vote_average / 2} />
      </div>
      <h2>Contenu similaire</h2>
      <HorizontalList data={suggestions} />
    </div>
  );
}

export default MovieDetails;