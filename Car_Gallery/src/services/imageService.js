import unsplash from "../api/unsplash";

export const getCarImages = async (
  page = 1,
  query = "supercars"
) => {
  try {
    const { data } = await unsplash.get("/search/photos", {
      params: {
        query: `${query} car`,
        page,
        per_page: 12,
        orientation: "landscape",
      },
    });

    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};