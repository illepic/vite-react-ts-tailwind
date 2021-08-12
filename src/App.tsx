import React, { useEffect, useState } from "react";
import clsx from "clsx";

import { fetchBreeds, fetchCategories } from "./api";

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
    <div className="app container mx-auto">
      <div className="app-top flex items-center">
        <div>Type:</div>
        <button
          onClick={() => setActiveTab("appointments")}
          className={clsx(
            "font-bold text-white bg-blue-400 rounded-md p-2 mx-2",
            { "bg-blue-900": activeTab === "appointments" }
          )}
        >
          Appointments
        </button>
        <button
          onClick={() => setActiveTab("crews")}
          className={clsx(
            "font-bold text-white bg-blue-400 rounded-md p-2 mx-2",
            { "bg-blue-900": activeTab === "crews" }
          )}
        >
          Crews
        </button>

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

        <button
          className="font-bold text-white bg-blue-400 rounded-md p-2 mx-2"
          onClick={() => console.log("call api")}
        >
          Load
        </button>
      </div>

      <div>
        <p>Active branch: {activeBranch}</p>
        <p>Active phase: {activePhase}</p>
      </div>
      <div className="app-bottom">
        <div>Left</div>
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
  );
}

export default App;
