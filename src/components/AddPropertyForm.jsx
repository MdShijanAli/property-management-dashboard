import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { getDataFromLocalStorage, setDataToLocalStorage } from "../utils/localStorage";
import { addProperty } from './../features/propertySlice';
import Modal from "./Modal";

export default function AddPropertyForm({ onAddProperty, isOpen = false, onClose }) {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

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
      const newProperty = { id: crypto.randomUUID(), name, type, status, date: new Date().toLocaleDateString() };
      const currentProperties = getDataFromLocalStorage("properties");

      currentProperties.push(newProperty);
      dispatch(addProperty(newProperty));
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
    <Modal isOpen={isOpen} onClose={onClose} isLoading={isLoading} onAction={handleSubmit} title="Add Property" btnCaption="Add Property">
      <div className="bg-gray-100 dark:bg-[#0B1120] p-4 rounded shadow">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2 dark:text-white">Property Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter Property Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2 dark:text-white">Type</label>
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
          <label className="block text-gray-700 mb-2 dark:text-white">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full p-2 border rounded"
            required
          >
            <option default>Select Status</option>
            <option>Available</option>
            <option>Rented</option>
          </select>
        </div>

      </div>
    </Modal>
  );
}