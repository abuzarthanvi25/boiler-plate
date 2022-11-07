let fillData = (state, stateSetter, key, value) => {
  state[key] = value;
  stateSetter({ ...state });
};

export { fillData };
