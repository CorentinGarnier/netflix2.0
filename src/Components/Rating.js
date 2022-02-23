import "../Css/Rating.css"

const MAX_STARS = 5;

function Rating ({ value }) {
  const stars = Math.trunc(value);
  return (
    <div>
      {Array.from({ length: stars }, (value, key) => (
        <span role="img" aria-label="star" className="" key={key}>
          ⭐
        </span>
      ))}
      {Array.from({ length: MAX_STARS - stars }, (value, key) => (
        <span role="img" aria-label="star" className="opacity" key={key}>
          ⭐
        </span>
      ))}
      <span className="px-2">{value.toFixed(1)} / 5</span>
    </div>
  );
}
export default Rating;