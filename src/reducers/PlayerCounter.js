const playerCounterReducer = (state, action) => {
  switch (action.type) {
    case 'TWO_PLAYERS':
      return 2;
    case 'THREE_PLAYERS':
      return 3;
    case 'FOUR_PLAYERS':
      return 4;
    default:
      return 0;
  }
};

export default playerCounterReducer;
