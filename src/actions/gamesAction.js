import projects from "../data";
//Action Creators

export const loadGames = () => async (dispatch) => {
    //Fetch Axios
    const upcomingGamesData = projects;
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            upcoming: upcomingGamesData,
        }
    })
}

export const fetchSearch = (gameName) => async (dispatch) => {
    const searchGames = projects;

    dispatch({
        type: "FETCH_SEARCHED_GAMES",
        payload: {
            searched: searchGames.data.results,
        },
    });
}