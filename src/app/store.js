import { configureStore } from "@reduxjs/toolkit";
import propertyReducer from './../features/propertySlice';

const store = configureStore({
  reducer: {
    properties: propertyReducer,
  },
});

export default store;
