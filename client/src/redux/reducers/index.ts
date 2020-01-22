const reducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            console.log("action.data: ", action.payload);
            return [...state, action.payload];
            break;    
        default:
            return state;
            break;
    }
};

export default reducer;