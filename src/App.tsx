import React, { useEffect, useState } from "react";

import { fetchBreeds, fetchCategories, fetchCatImages, CatImage } from "./api";

import Header from "./Header";
import Button from "./Button";

type Tab = "appointments" | "crews";

function App() {
  const [activeTab, setActiveTab] = useState<Tab>("appointments");
  const [cats, setCats] = useState<CatImage[]>([]);

  const [breeds, setBreeds] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const [activeBreed, setActiveBreed] = useState("");
  const [activeCategory, setActiveCategory] = useState("");

  // const getImages = async () => {
  //   const images = await fetchCatImages();
  //   setImages(images);
  // };

  useEffect(() => {
    // fetchBreeds().then((breeds) =>
    //   setBranches(breeds.map((breed) => breed.name))
    // );
    // fetchCategories().then((categories) =>
    //   setPhases(categories.map((category) => category.name))
    // );
    fetchCatImages().then((cats) => setCats(cats));
  }, []);

  useEffect(() => {
    const breeds = cats.map((cat) => cat.breed);
    console.log(breeds);
  }, [cats]);

  return (
    <div className="app min-h-full">
      <Header>
        <div>Type:</div>

        <Button
          clickHandler={() => setActiveTab("appointments")}
          active={activeTab === "appointments"}
        >
          Appointments
        </Button>

        <Button
          clickHandler={() => setActiveTab("crews")}
          active={activeTab === "crews"}
        >
          Crews
        </Button>

        <div className="mx-2">
          <label htmlFor="select-branch">Branch location:</label>
          <select
            id="select-branch"
            className="block"
            onChange={(e) => setActiveBreed(e.target.value)}
          >
            {breeds.map((branch) => (
              <option value={branch} key={branch}>
                {branch}
              </option>
            ))}
          </select>
        </div>

        {activeTab === "appointments" && (
          <div className="mx-2">
            <label htmlFor="select-crew">Job phase:</label>
            <select
              id="select-crew"
              className="block"
              onChange={(e) => setActiveCategory(e.target.value)}
            >
              {categories.map((phase) => (
                <option value={phase} key={phase}>
                  {phase}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* <Button clickHandler={getImages}>Load</Button> */}
      </Header>

      <div className="app-bottom flex p-12">
        <div className="app-bottom__left w-60">
          {cats.map((cat) => (
            <div key={cat.id}>
              <img src={cat.url} />
            </div>
          ))}
        </div>
        <div className="app-bottom__right">
          <div
            className={`appointments ${
              activeTab === "appointments" ? "block" : "hidden"
            }`}
          >
            <p className="text-center">Appointments visible</p>
          </div>

          <div
            className={`appointment ${
              activeTab === "crews" ? "block" : "hidden"
            }`}
          >
            <p className="text-center">Crews Visible</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
