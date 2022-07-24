const initialState = {
    game: {},
    isLoading: true,
};

const detailReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_DETAIL":
            return {
                ...state,
                game: action.payload.game,
                isLoading: false,
            };
        case "LOADING":
            return {
                ...state,
                isLoading: true,
            }
        default:
            return { ...state }
    }
}

export default detailReducer;