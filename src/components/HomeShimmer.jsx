import BannerShimmer from "./BannerShimmer";
import MovieCardShimmer from "./MovieCardShimmer";

const HomeShimmer = () => {
  return (
    <div>
      <BannerShimmer />
      <div>
        <div className="mx-auto flex flex-wrap items-center justify-center gap-4 mt-10">
          <MovieCardShimmer />
          <MovieCardShimmer />
          <MovieCardShimmer />
          <MovieCardShimmer />
          <MovieCardShimmer />
          <MovieCardShimmer />
          <MovieCardShimmer />
          <MovieCardShimmer />
          <MovieCardShimmer />
          <MovieCardShimmer />
          <MovieCardShimmer />
          <MovieCardShimmer />
        </div>
      </div>
    </div>
  );
};

export default HomeShimmer;
