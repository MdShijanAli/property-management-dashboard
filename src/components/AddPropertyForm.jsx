import { useState } from "react";
import Modal from "./Modal";

export default function AddPropertyForm({onAddProperty, isOpen = false, onClose}) {
  const [name, setName] = useState('');
  const [type, setType] = useState('Apartment');
  const [status, setStatus] = useState('Available');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProperty({ name, type, status });
    setName('');
    setType('Apartment');
    setStatus('Available');
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
          >
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
          >
            <option>Available</option>
            <option>Rented</option>
          </select>
        </div>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Add Property
        </button>
      </form>
    </Modal>
  );
}