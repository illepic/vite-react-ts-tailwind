import React, { useState } from "react";
import clsx from "clsx";

type Tab = "appointments" | "crews";

const branches = ["branch 1", "branch 2", "branch 3"];

function App() {
  const [activeTab, setActiveTab] = useState<Tab>("appointments");

  return (
    <div className="app">
      <button onClick={() => setActiveTab("appointments")}>Appointments</button>
      <button onClick={() => setActiveTab("crews")}>Crews</button>

      <select>
        {branches.map((branch) => (
          <option value={branch}>{branch}</option>
        ))}
      </select>

      <div
        className={`appointments ${
          activeTab === "appointments" ? "block" : "hidden"
        }`}
      >
        <p>Appointments visible</p>
      </div>
      <div
        className={`appointment ${activeTab === "crews" ? "block" : "hidden"}`}
      >
        <p>Crews Visible</p>
      </div>
    </div>
  );
}

export default App;
