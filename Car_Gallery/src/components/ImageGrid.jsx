import ImageCard from "./ImageCard";

const ImageGrid = ({
  images,
  favorites = [],
  toggleFavorite,
}) => {
  if (!images.length) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-3xl font-semibold text-slate-400">
          No cars found.
        </h2>
      </div>
    );
  }

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
      {images.map((image) => (
        <ImageCard
          key={image.id}
          image={image}
          isFavorite={favorites.some(
            (fav) => fav.id === image.id
          )}
          onFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
};

export default ImageGrid;