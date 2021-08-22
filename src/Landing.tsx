import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <h1>Landing</h1>
      <Link to="/app">Link to App</Link>
    </div>
  );
}

export default Landing;
