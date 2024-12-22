export const getDataFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

export const setDataToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const updateDataInLocalStorage = (key, updatedData) => {
  const currentData = getDataFromLocalStorage(key);
  const index = currentData.findIndex(item => item.name === updatedData.name);
  if (index !== -1) {
    currentData[index] = updatedData;
    setDataToLocalStorage(key, currentData);
  }
};

export const deleteDataFromLocalStorage = (key, name) => {
  const currentData = getDataFromLocalStorage(key);
  const updatedData = currentData.filter(item => item.name !== name);
  setDataToLocalStorage(key, updatedData);
};
