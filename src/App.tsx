import React, { useState } from "react";
import clsx from "clsx";

import "./App.css";

type Tab = "appointments" | "crews";

function App() {
  const [count, setCount] = useState(0);
  const [activeTab, setActiveTab] = useState<Tab>("appointments");

  return (
    <div className="app">
      <button onClick={() => setActiveTab("appointments")}>Appointments</button>
      <button onClick={() => setActiveTab("crews")}>Crews</button>

      <div
        className={`appointments hidden ${clsx({
          visible: activeTab === "appointments",
        })}`}
      >
        <p>Appointments visible</p>
      </div>
      <div
        className={`appointment hidden ${clsx({
          visible: activeTab === "crews",
        })}`}
      >
        <p>Crews Visible</p>
      </div>
    </div>
  );
}

export default App;
