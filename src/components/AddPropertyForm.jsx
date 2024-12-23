import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { getDataFromLocalStorage, setDataToLocalStorage } from "../utils/localStorage";
import { createProperty } from './../features/propertySlice';
import Modal from "./Modal";

export default function AddPropertyForm({ onAddProperty, isOpen = false, onClose }) {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  // Function to add property to localStorage
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!type) {
      toast.error('Please select a type');
      return
    }
    if (!status) {
      toast.error('Please select a status');
      return
    }

    setIsLoading(true);

    setTimeout(() => {
      const newProperty = { id: crypto.randomUUID(), name, type, status };
      const currentProperties = getDataFromLocalStorage("properties");

      // Add new property to localStorage
      currentProperties.push(newProperty);
      dispatch(createProperty(newProperty));
      setDataToLocalStorage("properties", currentProperties);
      toast.success('Property added successfully');
      // Reset the form
      setName('');
      setType('');
      setStatus('');
      setIsLoading(false);
      onClose();
    }, 1500);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded shadow">
        <div className="mb-4">
          <label className="block text-gray-700">Property Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-2 border rounded"
            required
          >
            <option default>Select Type</option>
            <option>Apartment</option>
            <option>House</option>
            <option>Commercial</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full p-2 border rounded"
            required
          >
            <option default>Select Type</option>
            <option>Available</option>
            <option>Rented</option>
          </select>
        </div>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded flex items-center gap-3">
          {isLoading && <div class="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full " role="status" aria-label="loading">
          </div>}
          Add Property
        </button>
      </form>
    </Modal>
  );
}