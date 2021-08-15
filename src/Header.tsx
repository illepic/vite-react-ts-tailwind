import React from "react";

const Header: React.FC<{}> = ({ children }) => (
  <header className="app-header flex items-center p-12 bg-green-200">
    {children}
  </header>
);

export default Header;
