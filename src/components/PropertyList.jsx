import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProperties } from "../features/propertySlice";
import { getDataFromLocalStorage } from "../utils/localStorage";

export default function PropertyList(){
  const dispatch = useDispatch();
  const { properties } = useSelector((state) => state.properties);
  const [filterStatus, setFilterStatus] = useState("");

  // Sync Redux with localStorage on page load
  useEffect(() => {
    const savedProperties = getDataFromLocalStorage("properties");
    dispatch(setProperties(savedProperties));
  }, [dispatch]);

  // Filter properties based on status
  const filteredProperties = properties.filter((property) => {
    if (!filterStatus) return true;
    return property.status === filterStatus;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredProperties.map((property) => (
        <div key={property.id} className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">{property.name}</h3>
          <p>Type: {property.type}</p>
          <p>Status: {property.status}</p>
        </div>
      ))}
    </div>
  );
}