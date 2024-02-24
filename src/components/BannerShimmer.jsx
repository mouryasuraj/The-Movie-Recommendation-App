const BannerShimmer = () => {
  return (
    <div className="w-[100%] mx-auto md:h-[50vh] h-[40vh] bg-slate-200 dark:bg-slate-700 rounded-md flex flex-col gap-4 justify-end p-5">
      <div className="w-[40%] h-[50px] dark:bg-slate-500 bg-slate-300 rounded-md"></div>
      <div className="w-[70%] h-[120px] dark:bg-slate-500 bg-slate-300 rounded-md"></div>
    </div>
  );
};

export default BannerShimmer;
