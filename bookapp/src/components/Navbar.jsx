import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between h-14 items-center px-5 bg-sky-600 text-white">
      <h1 className="text-xl font-bold">Book Manager</h1>
      <ul className="list-none flex m-0 p-0 gap-4">
        <li>
          <Link to={"/"} className="hover:underline underline-offset-1">
            Home
          </Link>
        </li>
        <li>
          <Link to={"/add"} className="hover:underline underline-offset-1">
            Add Book
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
