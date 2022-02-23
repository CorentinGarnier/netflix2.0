import { Link } from "react-router-dom";
import "../Css/HorizontalList.css"

import Card from "./Card";

function HorizontalList ({ data }) {

  return (
    <ul className="d-flex container-horizontal-list">
      {data.map((movies) => (
        <li key={movies.id} className="container-horizontal-list-li">
          <Link to={`/movies/${movies.id}`} className="">
            <Card {...movies} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default HorizontalList;