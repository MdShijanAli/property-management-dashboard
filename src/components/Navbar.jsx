import { useState } from "react";
import AddPropertyForm from './AddPropertyForm';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow p-4 relative">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">Property Management</h1>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          <li><a href="#" className="text-gray-700 hover:text-green-600">Dashboard</a></li>
          <li><a href="#" className="text-gray-700 hover:text-green-600">Properties</a></li>
          <li>
            <button onClick={toggleModal} className="text-gray-700 hover:text-green-600">
              Add Property
            </button>
          </li>
        </ul>
        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-gray-700 hover:text-green-600 focus:outline-none"
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
      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul
          className="absolute top-full left-0 w-full bg-white shadow-md z-10 md:hidden"
        >
          <li>
            <a href="#" className="block text-gray-700 hover:text-green-600 p-4">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="block text-gray-700 hover:text-green-600 p-4">
              Properties
            </a>
          </li>
          <li>
            <button
              onClick={toggleModal}
              className="block text-gray-700 hover:text-green-600 p-4">
              Add Property
            </button>
          </li>
        </ul>
      )}

      {/* Modal */}
      <AddPropertyForm isOpen={isModalOpen} onClose={toggleModal} />
    </nav>
  );
}
