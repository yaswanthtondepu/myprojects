import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL, searchGameURL } from '../api';
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
    const searchGames = await axios.get(searchGameURL(gameName));

    dispatch({
        type: "FETCH_SEARCHED_GAMES",
        payload: {
            searched: searchGames.data.results,
        },
    });
}