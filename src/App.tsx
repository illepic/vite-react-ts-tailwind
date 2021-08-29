import React, { useEffect, useState } from "react";

import { fetchAllAppointments, Appointment } from "./api";

import Header from "./Header";
import Button from "./Button";

// type Tab = "appointments" | "crews";

function App() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  // Dropdowns
  const [branches, setBranches] = useState<string[]>([]);
  const [phases, setPhases] = useState<string[]>([]);

  // Selected within dropdown
  const [activeBranch, setActiveBranch] = useState("");
  const [activePhase, setActivePhase] = useState("");

  useEffect(() => {
    fetchAllAppointments().then((appointment) => setAppointments(appointment));
  }, []);

  useEffect(() => {
    const branchesSet = new Set<string>();
    const phasesSet = new Set<string>();

    console.log("useEffect");

    appointments.forEach((appointment) => {
      // Determine branch locations
      appointment.branch && branchesSet.add(appointment.branch);
      // Determine phases
      appointment.phase && phasesSet.add(appointment.phase);
    });

    setBranches([...branchesSet]);
    setPhases([...phasesSet]);
  }, [appointments]);

  return (
    <div className="app min-h-full">
      <Header>
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

        <Button>Reload</Button>
      </Header>

      <div className="app-bottom flex p-12">
        <div className="app-bottom__left w-60">
          {appointments.map((appointment) => (
            <div key={appointment.id}>
              <div>{appointment.title}</div>
            </div>
          ))}
        </div>
        <div className="app-bottom__right">Columns here.</div>
      </div>
    </div>
  );
}

export default App;
