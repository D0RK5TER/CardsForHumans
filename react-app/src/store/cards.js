// constants
const SET_CARD = "cards/SET_CARD";
const REMOVE = "cards/REMOVE";
const SET_CARDS = "cards/SET_CARDS"
const actionSet = (card) => ({
    type: SET_CARD,
    card,
});

const actionSetMany = (cards) => ({
    type: SET_CARDS,
    cards,
});

export const actionRemove = (id) => ({
    type: REMOVE,
    id
});

export const thunkSplashCards = () => async (dispatch) => {
    const response = await fetch(`/api/card/splash`, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (response.ok) {
        const data = await response.json();
        console.log(data, '!*!*!**!*!*!*!**!')
        await dispatch(actionSetMany(data.cards));
        // await dispatch(actionSetMany(data.questions));
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
export const thunkGetCard = (id) => async (dispatch) => {
    const response = await fetch(`/api/card/${id}`, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (response.ok) {
        const data = await response.json();
        await dispatch(actionSet(data));
        data.ok = true
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
export const thunkMakeCard = (form) => async (dispatch) => {
    const response = await fetch("/api/card", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(form)
    });
    if (response.ok) {
        const data = await response.json();
        await dispatch(actionSet(data));
        // data.ok = true
        return data
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ["Whoopsies! Try Again!"];
    }
};
export const thunkEditCard = (form, id) => async (dispatch) => {
    const response = await fetch(`/api/card/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(form)
    });
    if (response.ok) {
        const data = await response.json();
        await dispatch(actionSet(data));
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
export const thunkDeleteCard = (id) => async (dispatch) => {
    const response = await fetch(`/api/card/${id}`, {
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


const initialState = {};

export default function reducer(state = initialState, action) {
    let newState = { ...state }
    switch (action.type) {
        case SET_CARD:
            newState[action.card.id] = action.card
            return newState;
        case SET_CARDS:
            for (let x of action.cards) newState[x.id] = x
            return newState;
        case REMOVE:
            delete newState[action.id]
            return newState;
        default:
            return state;
    }
}