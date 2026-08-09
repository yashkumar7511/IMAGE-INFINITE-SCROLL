import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import ImageGrid from "../components/ImageGrid";

const Favorites = () => {
  const {
    favorites,
    removeFavorite,
  } = useContext(FavoritesContext);

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">

      <h1 className="mb-10 text-5xl font-bold">
        ❤️ Favorites
      </h1>

      {favorites.length === 0 ? (
        <div className="py-20 text-center">

          <h2 className="text-3xl font-semibold">
            No favorite cars yet.
          </h2>

          <p className="mt-4 text-slate-400">
            Start adding some amazing cars.
          </p>

        </div>
      ) : (
        <ImageGrid
          images={favorites}
          favorites={favorites}
          toggleFavorite={(image) => removeFavorite(image.id)}
        />
      )}

    </main>
  );
};

export default Favorites;