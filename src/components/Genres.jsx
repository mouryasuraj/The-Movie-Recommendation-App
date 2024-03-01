import { useParams } from "react-router-dom";
const Genres = () => {
  const { genreType } = useParams();
  return (
    <div>
      <h1 className="text-slate-200 pt-20">{genreType}</h1>
    </div>
  );
};

export default Genres;
