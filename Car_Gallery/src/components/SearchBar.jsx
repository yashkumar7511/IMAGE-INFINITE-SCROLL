import { FaSearch } from "react-icons/fa";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="w-full max-w-3xl">

      <div className="flex items-center gap-4 rounded-2xl bg-white px-6 py-5 shadow-xl">

        <FaSearch className="text-xl text-slate-500" />

        <input
          type="text"
          placeholder="Search Ferrari, BMW, Porsche..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="
            w-full
            bg-transparent
            text-lg
            text-slate-800
            outline-none
            placeholder:text-slate-400
          "
        />

      </div>

    </div>
  );
};

export default SearchBar;