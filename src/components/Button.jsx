import React from "react";

const Button = ({ styles }) => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-black bg-white border-2 border-[#0066FF] rounded-[10px] outline-none transition duration-300 ease-in-out hover:bg-[#0066FF] hover:text-white ${styles}`}
  >
    Get Started
  </button>
);

export default Button;
