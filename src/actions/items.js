export const addItem = (name) => {
  return { type: 'INCREASE_COUNT' };
};

export const removeItem = () => {
  return { type: "DECREASE_COUNT" }
};