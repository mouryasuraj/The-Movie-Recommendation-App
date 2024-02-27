import { useParams } from "react-router-dom";
const MovieInfo = () => {
  const { movie_name, movie_id } = useParams();
  console.log(movie_id, movie_name);
  const a = "Skal - Fight for Survival";
  console.log(
    a
      .replace(/[^\w\s]/gi, "")
      .toLowerCase()
      .replace(/\s+/g, "-")
  );
  return <div className="w-full min-h-screen bg-red-500"></div>;
};

export default MovieInfo;
