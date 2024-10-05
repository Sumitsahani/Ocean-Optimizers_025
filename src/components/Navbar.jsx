// src/components/Navbar.jsx

import { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";
import { logo } from "../assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="w-full flex py-2 justify-between items-center navbar bg-white">
      <img src={logo} alt="hoobank" className="w-[124px] h-[90px]" />

      {/* Buttons Container */}
      <div className="flex space-x-4">
        <button
          onClick={() => navigate("/login")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Sign In
        </button>
        <button
          onClick={() => navigate("/register")}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Register
        </button>
        <button
          onClick={() => navigate("/contact")}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
