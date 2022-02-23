import "../Css/VerticalList.css";
import { Link } from "react-router-dom";
import Card from "./Card";
function VerticalList ({data}) {

  return (
    <ul className="">
      {data.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} className="mx-2 mb-2">
            <Card {...movie} />
          </Link>
        </li>
        
      ))}
    </ul>
  );
};

VerticalList.defaultProps = {
  data: [],
};

export default VerticalList;
