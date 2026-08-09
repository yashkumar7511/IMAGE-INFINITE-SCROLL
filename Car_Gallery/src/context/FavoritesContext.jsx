import { createContext, useEffect, useState } from "react";

export const FavoritesContext = createContext();

const STORAGE_KEY = "car-gallery-favorites";

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (image) => {
    setFavorites((prev) => {
      if (prev.some((item) => item.id === image.id)) {
        return prev;
      }
      return [...prev, image];
    });
  };

  const removeFavorite = (id) => {
    setFavorites((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const isFavorite = (id) => {
    return favorites.some((item) => item.id === id);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};