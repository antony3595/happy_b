export const loadState = () => {
  try {
    const serializedStore = localStorage.getItem("reduxState");
    if (serializedStore === null) {
      return undefined;
    }
    return JSON.parse(serializedStore);
  } catch (err) {
    return undefined;
  }
};

export const saveState = store => {
  try {
    const serializedStore = JSON.stringify({ ...store });
    localStorage.setItem("reduxState", serializedStore);
  } catch (err) {
    new Error(err);
  }
};
