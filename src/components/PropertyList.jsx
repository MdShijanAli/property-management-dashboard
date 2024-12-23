import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProperties } from "../features/propertySlice";
import { DeleteIcon } from "../icons/DeleteIcon";
import { EditIcon } from "../icons/EditIcon";
import { getDataFromLocalStorage } from "../utils/localStorage";
import DeleteConFirmationModal from "./DeleteConfirmationModal";

export default function PropertyList() {
  const dispatch = useDispatch();
  const { properties, filters } = useSelector((state) => state.properties);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  useEffect(() => {
    const savedProperties = getDataFromLocalStorage("properties");
    dispatch(setProperties(savedProperties || []));
  }, [dispatch]);

  const filteredProperties = properties.filter((property) => {
    const matchesType = filters.type ? property.type === filters.type : true;
    const matchesStatus = filters.status ? property.status === filters.status : true;
    return matchesType && matchesStatus;
  });

  const handleDeleteProperty = (property) => {
    setSelectedProperty(property)
    setIsModalOpen(true);
  };

  return (
    <div>
      {
        filteredProperties.length > 0 ?
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProperties.map((property) => (
              <div key={property.id} className="group bg-white dark:bg-[#0B1120] dark:border dark:border-gray-800 dark:text-white p-10 rounded-xl shadow-md flex justify-between items-start">
                <div>
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
                <div className="group-hover:grid gap-3 hidden">
                  <button className="border group/btn border-green-600 transition duration-200 ease-in-out hover:bg-green-600 text-white p-2 rounded-full flex items-center gap-2">
                    <EditIcon className="text-green-600 group-hover/btn:text-white transition duration-200 ease-in-out text-xl" />
                  </button>
                  <button onClick={()=> handleDeleteProperty(property)} className="border group/btn border-red-600 transition duration-200 ease-in-out hover:bg-red-600 text-white p-2 rounded-full">
                    <DeleteIcon className="text-red-600 group-hover/btn:text-white transition duration-200 ease-in-out text-xl" />
                  </button>
                </div>
              </div>
            ))}
          </div> :
          <div className="flex justify-center items-center h-96">
            <p className="bg-gray-300 p-5 text-lg rounded-lg font-semibold">No Property Found!!! Please Create a Property From Navbar</p>
          </div>
      }

      <DeleteConFirmationModal properties={filteredProperties} selectedProperty={selectedProperty} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
