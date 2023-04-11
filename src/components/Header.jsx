import React from "react";

function Header() {
  return (
    <header className="header content-center shadow-2xl bg-gradient-to-r bg-teal-600  flex justify-center align-middle ">
          <nav className="flex flex-row  p-2">
            <a className="p-3 hover:text-blue-300 hover:scale-110 ease-in-out duration-200" href="#">
              Home
            </a>
            <a className="p-3 hover:text-blue-300 hover:scale-110 ease-in-out duration-200" href="#">
              About
            </a>
            <a className="p-3 hover:text-blue-300 hover:scale-110 ease-in-out duration-200 " href="#">
              Contact
            </a>
            <a className="p-3 hover:text-blue-300 hover:scale-110 ease-in-out duration-200 " href="#">
              Rules
            </a>
          </nav>
        </header>
  );
}

export default Header;
