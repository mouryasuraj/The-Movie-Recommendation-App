import bgImage from "../assets/walpaper.jpg";
import MoviesList from "./MoviesList";

const Home = () => {
  return (
    <div>
      {/* Poster */}
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="relative w-full md:h-[70vh] h-[40vh] bg-no-repeat bg-cover bg-center bg-none md:px-10 px-4"
      >
        <h2 className="absolute md:top-[50%] bottom-[20%] text-slate-100 font-semibold md:text-4xl text-lg max-w-[800px] italic ">
          Movies are not just a form of entertainment; they are a powerful
          medium that has the ability to inspire, educate, and leave a lasting
          impact on the audience.
        </h2>
      </div>
      <MoviesList />
    </div>
  );
};

export default Home;
