import React, { useEffect, useState } from "react";
import clsx from "clsx";

import { fetchBreeds, fetchCategories } from "./api";

import Header from "./Header";
import Button from "./Button";

type Tab = "appointments" | "crews";

function App() {
  const [activeTab, setActiveTab] = useState<Tab>("appointments");
  const [branches, setBranches] = useState<string[]>([]);
  const [phases, setPhases] = useState<string[]>([]);

  const [activeBranch, setActiveBranch] = useState("");
  const [activePhase, setActivePhase] = useState("");

  useEffect(() => {
    fetchBreeds().then((breeds) =>
      setBranches(breeds.map((breed) => breed.name))
    );
    fetchCategories().then((categories) =>
      setPhases(categories.map((category) => category.name))
    );
  }, []);

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
            onChange={(e) => setActiveBranch(e.target.value)}
          >
            {branches.map((branch) => (
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
              onChange={(e) => setActivePhase(e.target.value)}
            >
              {phases.map((phase) => (
                <option value={phase} key={phase}>
                  {phase}
                </option>
              ))}
            </select>
          </div>
        )}

        <Button clickHandler={() => console.log("call api")}>Load</Button>
      </Header>

      <div className="app-bottom flex p-12">
        <div className="app-bottom__left w-60">Left</div>
        <div className="app-bottomo__right">
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
