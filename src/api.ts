const CAT_API_URL = "https://api.thecatapi.com/v1";
const CAT_API_HEADERS = {
  headers: {
    "x-api-key": import.meta.env.VITE_CAT_API_KEY,
  },
};
const BREEDS_URL = [CAT_API_URL, "breeds"].join("/");
const CATEGORIES_URL = [CAT_API_URL, "categories"].join("/");

interface Breed {
  name: string;
}
interface Category {
  id: number;
  name: string;
}

export const fetchBreeds = async (): Promise<Breed[]> => {
  const response = await fetch(BREEDS_URL, CAT_API_HEADERS);
  return await response.json();
};

export const fetchCategories = async (): Promise<Category[]> => {
  const response = await fetch(CATEGORIES_URL, CAT_API_HEADERS);
  return await response.json();
};
