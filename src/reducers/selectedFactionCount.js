const selectedFactionCountReducer = (state = 0, action) => {
  if (action.type === 'UPDATE') {
    return action.payload;
  }
  return state;
};

export default selectedFactionCountReducer;
