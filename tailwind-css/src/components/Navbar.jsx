import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-red-500 flex justify-between px-10 py-5 text-white items-center border-t-4 border-blue-800">
        <div className="flex items-center space-x-6">
          <h2 className="text-2xl font-bold">Kalvium</h2>
          <ul className="flex space-x-4">
            <li className="text-teal-400 font-normal">About Us</li>
            <li className="text-teal-400 font-normal">Contacts</li>
            <li className="text-teal-400 font-normal">Courses</li>
          </ul>
        </div>
        <div>
          <button className="border-white border border-1 rounded py-1 px-3">
            Login
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
