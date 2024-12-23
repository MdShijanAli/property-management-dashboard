// File: src/App.js
import React from 'react';
import { Toaster } from 'react-hot-toast';
import Filter from './components/Filter';
import KeyNumbers from './components/KeyNumbers';
import PropertyList from './components/PropertyList';
import Layout from './layout/Layout';

const App = () => {

  return (
    <Layout className="">
      <div className='py-6'>
        <div className='pb-10 flex items-center gap-3'>
          <div className='size-16'>
            <img className='w-full h-full rounded-full' src="https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/445403371_1835538306918427_5731986926777791337_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEoLc-zcqlmtFOkuAuOA7UYG1uyKp0o7fEbW7IqnSjt8cO5ja4IfyHRqYsH9o0Z7BcaXEQxlRdV6KPfgxUHbYrQ&_nc_ohc=DUjey4iqcM0Q7kNvgGnfBjH&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=AA2154YH8p3oKUwB5Fm-Q1a&oh=00_AYBjkD8ObZmkR9VGOCHunwnwjuyGaCKoOOPlwVrA7GNldg&oe=676EAFEA" alt="" />
          </div>
          <div className='dark:text-white'>
            <h2 className='font-semibold text-2xl'>Good Morning</h2>
            <p className='text-gray-500'>Here is Overview for your  Properties</p>
          </div>
        </div>
        <KeyNumbers />
        <div className='sm:flex grid sm:justify-between sm:items-center gap-3 py-6'>
          <h2 className="text-2xl font-bold dark:text-white">Properties</h2>
          <div className='flex items-center gap-3'>
            <p className='dark:text-white'>Filter By</p>
            <Filter />
          </div>
        </div>
        <PropertyList />
      </div>

      <Toaster />
    </Layout>
  );
};

export default App;
