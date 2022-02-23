import data from "../moviedata.json";
import "../Css/Chip.css";
function Chip ({ id }) {
  const label = data.genres[id];
  if (!label) return null;
  return <div className="px-2 py-2 chip-container">{label}</div>;
};
export default Chip;
