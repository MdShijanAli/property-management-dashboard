import { createSlice } from "@reduxjs/toolkit";
import { getDataFromLocalStorage, setDataToLocalStorage } from "../utils/localStorage";

const initialState = {
  properties: getDataFromLocalStorage("properties") || [],
  filters: {
    type: "",
    status: "",
  },
};

const propertySlice = createSlice({
  name: "properties",
  initialState,
  reducers: {
    addProperty: (state, action) => {
      state.properties.push(action.payload);
      setDataToLocalStorage("properties", state.properties);
    },
    setProperties: (state, action) => {
      state.properties = action.payload;
    },
    setFilter: (state, action) => {
      state.filters = {
        ...state.filters,
        ...action.payload,
      };
    },
  },
});

export const { addProperty, setProperties, setFilter } = propertySlice.actions;
export default propertySlice.reducer;
