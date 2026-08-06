const LoadingSkeleton = () => {
  return (
    <div
      className="
        grid
        gap-8
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      "
    >
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="
            animate-pulse
            overflow-hidden
            rounded-2xl
            bg-slate-900
          "
        >
          <div className="h-72 bg-slate-700" />

          <div className="space-y-3 p-5">

            <div className="h-5 w-2/3 rounded bg-slate-700" />

            <div className="h-4 w-full rounded bg-slate-700" />

            <div className="h-4 w-3/4 rounded bg-slate-700" />

          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;