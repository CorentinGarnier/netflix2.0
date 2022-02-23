import "../Css/Card.css";
import { useDispatch, useSelector } from "react-redux";
import { favoritesSlice } from "../Slices";

function Card ({ id, title, poster_path}) {
  const imageUrl = `https://image.tmdb.org/t/p/w400${poster_path}`;
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const addToFavorite = (event) => {
    event.preventDefault();
    dispatch(favoritesSlice.actions.toggle({ id }));
  };
  return (
    <div className="card-container" style={{ backgroundImage: `url(${imageUrl})` }}>
      <h3 className="text-center title w-100">{title}</h3>
      <button onClick={(id) => addToFavorite(id)} className="button">
      <span role="img" aria-label="heart">
          ❤️
        </span>
      </button>
    </div>
  );
};
export default Card;
