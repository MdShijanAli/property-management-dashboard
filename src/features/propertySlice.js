import { createSlice } from "@reduxjs/toolkit";
import { getDataFromLocalStorage, setDataToLocalStorage } from "../utils/localStorage";

const initialState = {
  properties: getDataFromLocalStorage("properties") || [],
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
  },
});

export const createProperty = (property) => async (dispatch) => {
  dispatch(addProperty(property));
};

// Export actions and reducer
export const { addProperty, setProperties } = propertySlice.actions;
export default propertySlice.reducer;
