import React, { useState } from 'react';
import AddPropertyForm from './components/AddPropertyForm';
import KeyNumbers from './components/KeyNumbers';
import PropertyList from './components/PropertyList';
import Layout from './layout/Layout';

const App = () => {
  const [properties, setProperties] = useState([
    { id: 1, name: 'Apartment A', type: 'Apartment', status: 'Available' },
    { id: 2, name: 'House B', type: 'House', status: 'Rented' },
  ]);

  const handleAddProperty = (property) => {
    setProperties([...properties, { id: Date.now(), ...property }]);
  };

  return (
    <Layout>
      <KeyNumbers checkIns={12} checkOuts={8} />
      <h2 className="text-2xl font-bold mt-6">Properties</h2>
      <PropertyList properties={properties} />
      <h2 className="text-2xl font-bold mt-6">Add New Property</h2>
      <AddPropertyForm onAddProperty={handleAddProperty} />
    </Layout>
  );
};

export default App;