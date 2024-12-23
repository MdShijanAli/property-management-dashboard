import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setProperties } from "../features/propertySlice";
import { DeleteIcon } from "../icons/DeleteIcon";
import { setDataToLocalStorage } from "../utils/localStorage";
import Modal from "./Modal";

export default function DeleteConFirmationModal({ isOpen, onClose, properties = [], selectedProperty = {} }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteProperty = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      const updatedProperties = properties.filter((property) => property.id !== selectedProperty?.id);
      dispatch(setProperties(updatedProperties));
      setDataToLocalStorage("properties", updatedProperties);
      toast.success('Property Deleted Successfully');
      setIsLoading(false);  
      onClose();
    }, 1000)
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} isLoading={isLoading} onAction={handleDeleteProperty} title="Delete Property ??" btnCaption="Confirm" >
      <div className="flex items-center gap-3">
        <h2 className="dark:text-white">Are You Sure Want to Delete This Property?</h2>
        <span><DeleteIcon className="text-2xl text-red-600 dark:text-white" /></span>
      </div>
    </Modal>
  );
}