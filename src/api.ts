const CAT_API_URL = "https://api.thecatapi.com/v1";
const CAT_API_HEADERS = {
  headers: {
    "x-api-key": import.meta.env.VITE_CAT_API_KEY,
  },
};
const BREEDS_URL = [CAT_API_URL, "breeds"].join("/");
const CATEGORIES_URL = [CAT_API_URL, "categories"].join("/");
const IMAGES_URL = [CAT_API_URL, "images/search"].join("/");

interface Category {
  id: number;
  name: string;
}
interface ApiBreed {
  id: string;
  name: string;
  image: {
    height: number;
    width: number;
    url: string;
  };
}
// Note the use of Pick<> here to make a new type (Breed) based on 2 keys of
// the existing ApiBreed type
type Breed = Pick<ApiBreed, "id" | "name">;

interface ApiCatImage {
  id: string;
  url: string;
  breed: string;
}
export interface CatImage extends ApiCatImage {}

const fetchFromApi = (url: string): Promise<Response> =>
  fetch(url, CAT_API_HEADERS);

// Using this an an example of typing a fetch()
export const fetchBreeds = async (): Promise<Breed[]> => {
  const response = await fetchFromApi(BREEDS_URL);
  if (!response) throw new Error("Fetch breeds failed!");

  // Note how we "cast" allBreeds here
  const allBreeds: ApiBreed[] = await response.json();
  console.log(allBreeds);

  // And now TypeScript is happy that id and name exist on each Breed
  return allBreeds.map(({ id, name }) => ({ id, name }));
};

export const fetchCategories = async (): Promise<Category[]> => {
  const response = await fetchFromApi(CATEGORIES_URL);
  if (!response) throw new Error("Fetch categories failed!");

  const allCategories: Category[] = await response.json();
  return allCategories;
};

export const fetchCatImages = async (): Promise<CatImage[]> => {
  const searchUrl = `${IMAGES_URL}?limit=100`;
  const response = await fetchFromApi(searchUrl);
  const allImages: ApiCatImage[] = await response.json();

  return allImages;
};
