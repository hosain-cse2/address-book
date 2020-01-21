const reducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            return [...state, action.data];
            break;    
        default:
            return state;
            break;
    }
};

export default reducer;