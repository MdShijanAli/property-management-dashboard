import { useEffect, useState } from "react";
import { DarkMoodIcon } from "../icons/DarkMoodIcon";
import { LightMoodIcon } from "../icons/LightMoodIcon";
import { setDataToLocalStorage } from "../utils/localStorage";
import AddPropertyForm from './AddPropertyForm';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const handleSwitchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setDataToLocalStorage("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 dark:border-b dark:border-black shadow p-4 relative">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold dark:text-white">Property Management</h1>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4 items-center">
          <li><a href="#" className="text-gray-700 hover:text-green-600 dark:text-white">Dashboard</a></li>
          <li><a href="#" className="text-gray-700 hover:text-green-600 dark:text-white">Properties</a></li>
          <li>
            <button onClick={toggleModal} className="text-gray-700 hover:text-green-600 dark:text-white">
              Add Property
            </button>
          </li>
          <li onClick={handleSwitchTheme} className="cursor-pointer">
            {
              theme === 'dark' ? (
                <LightMoodIcon className="dark:text-white" />
              ) : (
                <DarkMoodIcon className="dark:text-white" />
              )
            }
          </li>
        </ul>
        <div className="flex md:hidden items-center gap-4">
          {/* Mobile Menu Button */}
          <div onClick={handleSwitchTheme} className="cursor-pointer">
            {
              theme === 'dark' ? (
                <LightMoodIcon className="dark:text-white" />
              ) : (
                <DarkMoodIcon className="dark:text-white" />
              )
            }
          </div>
          <button
            className="text-gray-700 hover:text-green-600 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul
          className="absolute top-full left-0 w-full bg-white dark:bg-[#0B1120] dark:border-b dark:border-gray-800 shadow-md z-10 md:hidden"
        >
          <li>
            <a href="#" className="block text-gray-700 dark:text-white hover:text-green-600 p-4">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="block text-gray-700 dark:text-white hover:text-green-600 p-4">
              Properties
            </a>
          </li>
          <li>
            <button
              onClick={toggleModal}
              className="block text-gray-700 dark:text-white hover:text-green-600 p-4">
              Add Property
            </button>
          </li>
        </ul>
      )}

      {/* Modal */}
      <AddPropertyForm mode="add" isOpen={isModalOpen} onClose={toggleModal} />
    </nav>
  );
}
