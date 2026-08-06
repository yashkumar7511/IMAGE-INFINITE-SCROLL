import { FaHeart, FaRegHeart } from "react-icons/fa";

const ImageCard = ({
  image,
  isFavorite = false,
  onFavorite,
}) => {
  return (
    <div
      className="
        group
        overflow-hidden
        rounded-2xl
        bg-slate-900
        shadow-lg
        transition
        duration-300
        hover:-translate-y-2
        hover:shadow-orange-500/20
      "
    >
      <div className="relative">

        <img
          src={image.urls.regular}
          alt={image.alt_description || "Car"}
          className="
            h-72
            w-full
            object-cover
            transition
            duration-500
            group-hover:scale-110
          "
        />

        <button
          onClick={() => onFavorite(image)}
          className="
            absolute
            right-4
            top-4
            rounded-full
            bg-black/60
            p-3
            backdrop-blur
          "
        >
          {isFavorite ? (
            <FaHeart className="text-red-500" />
          ) : (
            <FaRegHeart className="text-white" />
          )}
        </button>

      </div>

      <div className="p-5">

        <h3 className="truncate text-lg font-semibold">
          {image.user.name}
        </h3>

        <p className="mt-2 text-sm text-slate-400">
          {image.alt_description || "Luxury Car"}
        </p>

      </div>
    </div>
  );
};

export default ImageCard;