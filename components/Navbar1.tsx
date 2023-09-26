import { useState } from "react";

export default function Navbar1() {
  const [open, setOpen] = useState(false);

  const OpenSidebar = (e) => {
    const sidebar = document.getElementById("myNav");

    if (open) {
      sidebar.style.width = "0%";
      setOpen(false);
    } else {
      sidebar.style.width = "100%";
      setOpen(true);
    }
  };

const Navbar1 = () => {
  return (
    <div>
      <header className="h-screen w-0 fixed z-50 top-0 left-0 bg-black bg-opacity-90 overflow-x-hidden transition-all duration-500">
      <div className="fixed inset-0 z-10 bg-black bg-opacity-90 overflow-x-hidden transition-all duration-500 transform translate-x-full" id="myNav">
        <a href="javascript:void(0)" className="absolute top-5 right-5 text-6xl text-white" onClick={OpenSidebar}>&times;</a>

        <div className="relative top-1/4 w-full text-center">
          <a href="/" className="block text-gray-600 text-5xl py-10 no-underline hover:text-white transition duration-200">Home</a>
          <a href="/" className="block text-gray-600 text-5xl py-10 no-underline hover:text-white transition duration-200">About</a>
          <a href="/" className="block text-gray-600 text-5xl py-10 no-underline hover:text-white transition duration-200">Services</a>
          <a href="/" className="block text-gray-600 text-5xl py-10 no-underline hover:text-white transition duration-200">Contact</a>
        </div>
      </div>
      <button onClick={OpenSidebar} className="text-6xl cursor-pointer">&#9776; open</button>

      </header>
    </div>
  );
};}

