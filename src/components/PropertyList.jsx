export default function PropertyList({properties}){
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {properties.map((property) => (
        <div key={property.id} className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">{property.name}</h3>
          <p>Type: {property.type}</p>
          <p>Status: {property.status}</p>
        </div>
      ))}
    </div>
  );
}