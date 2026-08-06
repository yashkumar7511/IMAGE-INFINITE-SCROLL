import { Link, NavLink } from "react-router-dom";
import { FaCarSide, FaHeart } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <FaCarSide className="text-3xl text-orange-500" />

          <h1 className="text-3xl font-extrabold tracking-wide">
            Car<span className="text-orange-500">Gallery</span>
          </h1>
        </Link>

        <div className="flex items-center gap-8 text-lg">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 font-semibold"
                : "text-slate-300 hover:text-orange-500 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 text-orange-500 font-semibold"
                : "flex items-center gap-2 text-slate-300 hover:text-orange-500 transition"
            }
          >
            <FaHeart />
            Favorites
          </NavLink>

        </div>

      </nav>
    </header>
  );
};

export default Navbar;