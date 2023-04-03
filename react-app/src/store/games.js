import { REMOVE_USER } from "./session"

const LOAD_GAMES = 'game/LOAD_GAMES'
const ADD_GAME = 'game/ADD_GAME'
const UPDATE_GAME = 'game/UPDATE_GAME'
const DELETE_GAME = 'game/DELETE_GAME'


// --- ACTIONS --- //

const loadGames = (games) => ({
    type: LOAD_GAMES,
    games
});

const addGame = (game) => {
    return {
        type: ADD_GAME,
        game
    }
}

const updateGame = (game) => ({
    type: UPDATE_GAME,
    game
})

const deleteGame = (gameId) => {
    return {
        type: DELETE_GAME,
        gameId
    }
}

export const clearGamesState = () => ({
    type: REMOVE_USER,

})
// --- THUNKS --- //

export const thunkGames = () => async (dispatch) => {
    const response = await fetch(`/api/game`, {
        method: 'GET'
    });

    if (response.ok) {

        const data = await response.json()

        dispatch(loadGames(data));
        return data
    }
};


export const thunkOneGame = gameId => async (dispatch) => {
    const response = await fetch(`/api/game/${gameId}`, {
        headers: {
            'Content-Type': 'application/json'
        },
    });
    if (response.ok) {
        const data = await response.json()
        dispatch(addGame(data))
        return data
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ["Whoopsies! Try Again!"];
    }
}


export const thunkCreateGame = (game) => async (dispatch) => {
    const response = await fetch(`/api/game`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(game)
    })

    if (response.ok) {
        const game = await response.json()

        dispatch(addGame(game))
        return game
    }
}


export const thunkUpdateGame = (game) => async (dispatch) => {
    const response = await fetch(`/api/game/${game.id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(game)
    })

    if (response.ok) {
        const game = await response.json()

        dispatch(updateGame(game))
        return game
    }
}


export const thunkDeleteGame = (game) => async (dispatch) => {
    const response = await fetch(`/api/game/${game.id}`, {
        method: "DELETE"
    })

    if (response.ok) {
        dispatch(deleteGame(game.id))
        return response
    }

    return
}



const initialState = {}


// --- REDUCE/STORE --- //

export default function reducer(state = initialState, action) {
    let newState = { ...state }
    switch (action.type) {
        case LOAD_GAMES:
            // const games = {
            //     ...state, games: { ...state.GAMEs },
            //     game: { ...state.game }
            // }
            // action.games.forEach((game) => (games[game.id] = game))
            // games;
            return newState
        case ADD_GAME:
            newState[action.game.game.id] = action.game
            return newState

        case UPDATE_GAME:
            // const updateGAME = {
            //     ...state,
            //     GAME: { ...state.GAME, ...action.GAME.GAME }
            // }
            // updateGAME
            return newState

        case DELETE_GAME:
            // const deleteGAME = {
            //     ...state,
            //     GAMEs: { ...state.GAMEs },
            //     GAME: { ...state.GAME }
            // }
            // delete deleteGAME.GAMEs[action.GAMEId]
            // deleteGAME.GAME = {}
            // deleteGAME
            return newState

        case REMOVE_USER: {
            return initialState
        }
        default:
            return state;
    }
}
