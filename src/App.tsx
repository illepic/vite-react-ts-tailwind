import React, { useState } from "react";
import clsx from "clsx";

type Tab = "appointments" | "crews";

const branches = ["branch 1", "branch 2", "branch 3"];

function App() {
  const [activeTab, setActiveTab] = useState<Tab>("appointments");

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
          <label htmlFor="select-branch">Select branch:</label>
          <select id="select-branch" className="block">
            {branches.map((branch) => (
              <option value={branch} key={branch}>
                {branch}
              </option>
            ))}
          </select>
        </div>

        {activeTab === "crews" && (
          <div className="mx-2">
            <label htmlFor="select-crew">Select crew:</label>
            <select id="select-crew" className="block">
              <option value="crew 1">crew 1</option>
              <option value="crew 2">crew 2</option>
            </select>
          </div>
        )}
      </div>

      <div className="app-bottom">
        <div
          className={`appointments ${
            activeTab === "appointments" ? "block" : "hidden"
          }`}
        >
          <p>Appointments visible</p>
        </div>
        <div
          className={`appointment ${
            activeTab === "crews" ? "block" : "hidden"
          }`}
        >
          <p>Crews Visible</p>
        </div>
      </div>
    </div>
  );
}

export default App;
