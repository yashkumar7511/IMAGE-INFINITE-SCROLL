import SearchBar from "./SearchBar";

const brands = [
  "Supercars",
  "Ferrari",
  "Lamborghini",
  "Porsche",
  "BMW",
  "Audi",
  "Mercedes",
  "McLaren",
  "Bugatti",
];

const SearchSection = ({
  query,
  setQuery,
}) => {
  return (
    <section className="mb-14">

      <div className="text-center mb-10">

        <p className="uppercase tracking-[6px] text-orange-500 font-semibold">
          Find Your Dream Car
        </p>

        <h2 className="mt-3 text-5xl font-bold">
          Search Premium Cars
        </h2>

        <p className="mt-4 text-slate-400 text-lg">
          Search by brand or choose one below.
        </p>

      </div>

      <SearchBar
        value={query}
        onChange={setQuery}
      />

      <div className="mt-8 flex flex-wrap justify-center gap-4">

        {brands.map((brand) => (
          <button
            key={brand}
            onClick={() => setQuery(brand)}
            className="
              rounded-full
              border
              border-slate-700
              px-6
              py-3
              font-medium
              transition
              hover:bg-orange-500
              hover:border-orange-500
              hover:text-white
            "
          >
            {brand}
          </button>
        ))}

      </div>

    </section>
  );
};

export default SearchSection;