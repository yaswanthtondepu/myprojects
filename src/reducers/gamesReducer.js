const initState = {
    upcoming: [],
    searched: []
}
const gamesReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_GAMES':
            return {
                ...state,
                upcoming: action.payload.upcoming,
            }
        case 'FETCH_SEARCHED_GAMES':
            return {
                ...state,
                searched: action.payload.searched
            }
        case 'CLEAR_SEARCHED_GAMES':
            return {
                ...state,
                searched: [],
            }
        default:
            return { ...state }
    }
}

export default gamesReducer;