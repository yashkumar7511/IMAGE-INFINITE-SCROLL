import { useContext, useEffect, useState } from "react";

import Hero from "../components/Hero";
import SearchSection from "../components/SearchSection";
import ImageGrid from "../components/ImageGrid";
import LoadingSkeleton from "../components/LoadingSkeleton";

import { getCarImages } from "../services/imageService";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import { FavoritesContext } from "../context/FavoritesContext";

const Home = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("supercars");
  const [page, setPage] = useState(1);

  const {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  } = useContext(FavoritesContext);

  const toggleFavorite = (image) => {
    if (isFavorite(image.id)) {
      removeFavorite(image.id);
    } else {
      addFavorite(image);
    }
  };

  const loadMore = () => {
    if (!loading) {
      setPage((prev) => prev + 1);
    }
  };

  const lastElementRef = useInfiniteScroll(loadMore);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);

      const data = await getCarImages(page, query);

      if (page === 1) {
        setImages(data);
      } else {
        setImages((prev) => [...prev, ...data]);
      }

      setLoading(false);
    };

    fetchImages();
  }, [page, query]);

  useEffect(() => {
    setPage(1);
  }, [query]);

  return (
    <main>
      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <SearchSection
          query={query}
          setQuery={setQuery}
        />

        <div className="mb-10">
          <p className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Gallery
          </p>

          <h2 className="mt-2 text-5xl font-bold text-white">
            Latest Cars
          </h2>
        </div>

        {loading && page === 1 ? (
          <LoadingSkeleton />
        ) : (
          <>
            <ImageGrid
              images={images}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />

            <div
              ref={lastElementRef}
              className="h-10"
            ></div>

            {loading && (
              <div className="py-10 text-center text-slate-400">
                Loading more cars...
              </div>
            )}
          </>
        )}
      </section>
    </main>
  );
};

export default Home;