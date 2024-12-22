// File: src/App.js
import React from 'react';
import KeyNumbers from './components/KeyNumbers';
import PropertyList from './components/PropertyList';
import Layout from './layout/Layout';

const App = () => {

  return (
    <Layout>
      <KeyNumbers checkIns={12} checkOuts={8} />
      <h2 className="text-2xl font-bold mt-6">Properties</h2>
      <PropertyList />
    </Layout>
  );
};

export default App;
