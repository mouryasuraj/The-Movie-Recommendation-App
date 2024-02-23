import MovieCard from "./MovieCard";
const MoviesList = () => {
  return (
    <div className="w-full lg:pl-20 pl-3 py-10">
      <h2 className="md:text-3xl text-xl font-bold text-slate-900 dark:text-slate-200 mb-4">
        Top Rated
      </h2>
      <div>
        <MovieCard />
      </div>
    </div>
  );
};

export default MoviesList;
