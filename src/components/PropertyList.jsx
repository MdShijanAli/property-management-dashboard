import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProperties } from "../features/propertySlice";
import { getDataFromLocalStorage } from "../utils/localStorage";

export default function PropertyList() {
  const dispatch = useDispatch();
  const { properties, filters } = useSelector((state) => state.properties);

  useEffect(() => {
    const savedProperties = getDataFromLocalStorage("properties");
    dispatch(setProperties(savedProperties || []));
  }, [dispatch]);

  const filteredProperties = properties.filter((property) => {
    const matchesType = filters.type ? property.type === filters.type : true;
    const matchesStatus = filters.status ? property.status === filters.status : true;
    return matchesType && matchesStatus;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredProperties.map((property) => (
        <div key={property.id} className="bg-white p-10 rounded-xl shadow-md">
          <p className="mb-3">
            Date: <span className="font-semibold">{property.date || "N/A"}</span>
          </p>
          <h3 className="text-xl font-bold">{property.name}</h3>
          <p className="leading-loose">
            Type: <span className="font-semibold">{property.type || "N/A"}</span>
          </p>
          <p>
            Status:{" "}
            <span
              className={`font-semibold ${ property.status === "Available" ? "text-green-600" : "text-red-600"
                }`}
            >
              {property.status || "N/A"}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}
