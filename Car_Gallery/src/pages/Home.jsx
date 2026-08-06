import { useEffect, useState } from "react";

import Hero from "../components/Hero";
import SearchSection from "../components/SearchSection";
import ImageGrid from "../components/ImageGrid";
import LoadingSkeleton from "../components/LoadingSkeleton";

import { getCarImages } from "../services/imageService";

const Home = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const [query, setQuery] = useState("supercars");

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);

      const data = await getCarImages(1, query);

      setImages(data);

      setLoading(false);
    };

    fetchImages();
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

          <h2 className="mt-2 text-5xl font-bold">
            Latest Cars
          </h2>

        </div>

        {loading ? (
          <LoadingSkeleton />
        ) : (
          <ImageGrid
            images={images}
            favorites={[]}
            toggleFavorite={() => {}}
          />
        )}

      </section>

    </main>
  );
};

export default Home;