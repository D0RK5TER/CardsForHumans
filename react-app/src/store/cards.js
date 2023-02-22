// constants
const SET_CARD = "cards/SET_CARD";
const REMOVE = "cards/REMOVE";

const actionSet = (card) => ({
    type: SET_CARD,
    card,
});

export const actionRemove = (id) => ({
    type: REMOVE,
    id
});

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
        case REMOVE:
            delete newState[action.id]
            return newState;
        default:
            return state;
    }
}