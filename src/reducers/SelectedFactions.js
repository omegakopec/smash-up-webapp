const selectedFactionReducer = (state = [], action) => {
  let index;
  const arr = state;

  switch (action.type) {
    case 'ADD_FACTIONS':
      return [...state.concat(action.payload)];

    case 'REMOVE_FACTIONS':
      if (typeof (action.payload) === 'string') {
        index = arr.indexOf(action.payload);
        arr.splice(index, 1);
        return arr;
      }
      action.payload.forEach((element) => {
        index = arr.indexOf(element);
        arr.splice(index, 1);
      });
      return arr;

    default:
      return state;
  }
};

export default selectedFactionReducer;
