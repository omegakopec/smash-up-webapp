const factionCounterReducer = (state = 0, action) => {
    switch (action.type){
        case 'UPDATE':
            return action.payload;
        default:
            return state
    }
}

export default factionCounterReducer;
