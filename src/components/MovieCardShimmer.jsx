const MovieCardShimmer = () => {
  return (
    <div className="md:w-[220px] w-[170px] md:h-[300px] h-[250px] rounded-md p-3">
      <div className="flex flex-col gap-2 h-full">
        <div className="w-[100%] h-[80%] dark:bg-slate-500 bg-slate-300  rounded-md"></div>
        <div className="w-[50%] h-[10%] dark:bg-slate-500 bg-slate-300 rounded-md"></div>
        <div className="w-[100%] h-[10%] dark:bg-slate-500 bg-slate-300 rounded-md"></div>
      </div>
    </div>
  );
};

export default MovieCardShimmer;
