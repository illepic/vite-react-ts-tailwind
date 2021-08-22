const CAT_API_URL = "https://api.thecatapi.com/v1";
const CAT_API_HEADERS = {
  headers: {
    "x-api-key": import.meta.env.VITE_CAT_API_KEY,
  },
};
const BREEDS_URL = [CAT_API_URL, "breeds"].join("/");
const CATEGORIES_URL = [CAT_API_URL, "categories"].join("/");

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
// Note the use if Pick<> here to make a new type (Breed) based on a few keys of
// the existing ApiBreed type
type Breed = Pick<ApiBreed, "id" | "name">;

// Using this an an example of typing a fetch()
export const fetchBreeds = async (): Promise<Breed[]> => {
  const response = await fetch(BREEDS_URL, CAT_API_HEADERS);
  if (!response) throw new Error("Fetch breeds failed!");

  // Note how we "cast" allBreeds here
  const allBreeds: ApiBreed[] = await response.json();
  // And now TypeScript is happy that id and name exist on each Breed
  return allBreeds.map(({ id, name }) => ({ id, name }));
};

export const fetchCategories = async (): Promise<Category[]> => {
  const response = await fetch(CATEGORIES_URL, CAT_API_HEADERS);
  return await response.json();
};

/**
 * Example transformation of Phase results
 */
const phaseKey = 18;

type apiPhase = {
  [phaseKey]: {
    value: string;
  };
};

const response: apiPhase[] = [
  {
    18: {
      value: "Phase 1",
    },
  },
  {
    18: {
      value: "Phase 2",
    },
  },
  {
    18: {
      value: "Phase 3",
    },
  },
  {
    18: {
      value: "Phase 1",
    },
  },
  {
    18: {
      value: "Phase 2",
    },
  },
  {
    18: {
      value: "Phase 3",
    },
  },
  {
    18: {
      value: "Phase 4",
    },
  },
];

// 1. Map over the response items and extract the `value` value
// 2. Pass the array created from 1. to a Set() which removes dupes
// 3. Spread this de-duped result into an array
// 4. Sort it
const results = [
  ...new Set(response.map((item) => item[phaseKey].value)),
].sort();

console.log(results);
