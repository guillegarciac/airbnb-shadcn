import React from "react";
import NavSearch from "./NavSearch";
import Logo from "./Logo";
import LinksDropdown from "./LinksDropdown";
import DarkMode from "./DarkMode";

function Navbar() {
  return (
    <nav className="border-b border-gray-200">
      <div className="container flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4">
        <Logo />
        <NavSearch />
        <div className="flex gap-4 items-center">
          <LinksDropdown />
          <DarkMode />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
