import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { getDataFromLocalStorage, setDataToLocalStorage } from "../utils/localStorage";
import { addProperty, setProperties } from './../features/propertySlice';
import Modal from "./Modal";

export default function AddPropertyForm({ isOpen = false, onClose, mode = "add", selectedProperty = {}, properties = [] }) {
  const { name: selectedName, type: selectedType, status: selectedStatus } = selectedProperty || {};

  console.log("selectedName", selectedName);

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setName(selectedName || '');
    setType(selectedType || '');
    setStatus(selectedStatus || '');
  }, [selectedName, selectedType, selectedStatus]);

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

    if (mode === "edit") {
      setTimeout(() => {
        const updatedProperties = properties.map((property) => {
          if (property.id === selectedProperty.id) {
            return {
              ...property,
              name,
              type,
              status,
            };
          }
          return property;
        });
        dispatch(setProperties(updatedProperties));
        setDataToLocalStorage("properties", updatedProperties);
        toast.success('Property Updated successfully');
        // Reset the form
        setName('');
        setType('');
        setStatus('');
        setIsLoading(false);
        onClose();
      }, 1000)
    } else {
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
      }, 1000);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isLoading={isLoading} onAction={handleSubmit} title={mode === "add" ? "Add Property" : "Edit Property"} btnCaption={mode === "add" ? "Add" : "Update"}>
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
            <option selected="" disabled={mode==="edit"}>Select Type</option>
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
            <option selected="" disabled={mode==="edit"}>Select Status</option>
            <option>Available</option>
            <option>Rented</option>
          </select>
        </div>

      </div>
    </Modal>
  );
}