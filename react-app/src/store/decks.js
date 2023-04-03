// constants
const SET_DECK = "decks/SET_DECK";
const REMOVE = "decks/REMOVE";
const SET_DECKS = "decks/SET_DECKS"
// --- ACTIONS --- //

const actionSetD = (deck) => ({
    type: SET_DECK,
    deck,
});

const actionSetManyD = (decks) => ({
    type: SET_DECKS,
    decks,
});

export const actionRemove = (id) => ({
    type: REMOVE,
    id
});
// --- THUNKS --- //
export const thunkGetDeck = (id) => async (dispatch) => {
    const response = await fetch(`/api/deck/${id}`, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (response.ok) {
        const data = await response.json();
        await dispatch(actionSetD(data.deck));
        return null;
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ["Whoopsies! Try Again!"];
    }
};
export const thunkMakeDeck = (form) => async (dispatch) => {
    const response = await fetch("/api/deck", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(form)
    });
    if (response.ok) {
        const data = await response.json();
        await dispatch(actionSetD(data.deck));
        // data.ok = true
        return data;
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data;
        }
    } else {
        return ["Whoopsies! Try Again!"];
    }
};
export const thunkEditDeck = (form, id) => async (dispatch) => {
    const response = await fetch(`/api/deck/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(form)
    });
    if (response.ok) {
        const data = await response.json();
        await dispatch(actionSetD(data));
        // data.ok = true
        return null;
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ["Whoopsies! Try Again!"];
    }
};
export const thunkDeleteDeck = (id) => async (dispatch) => {
    const response = await fetch(`/api/deck/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (response.ok) {
        const data = await response.json();
        await dispatch(actionRemove(id));
        data.ok = true
        return data;
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ["Whoopsies! Try Again!"];
    }
};

// --- REDUCE/STORE --- //

const initialState = {};

export default function reducer(state = initialState, action) {
    let newState = { ...state }
    switch (action.type) {
        case SET_DECK:
            newState[action.deck.id] = action.deck
            return newState;
        case SET_DECKS:
            for (let x of action.decks) newState[x.id] = x
            return newState;
        case REMOVE:
            delete newState[action.id]
            return newState;
        default:
            return state;
    }
}