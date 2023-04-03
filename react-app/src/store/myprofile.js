// constants
const SET_INFO = "myprofile/SET_INFO";
const REMOVE = "myprofile/REMOVE";
const LIKE = "myprofile/LIKE"
const REMOVE_LIKE = "myprofile/REMOVE_LIKE"
// --- ACTIONS --- //

const actionSet = (user) => ({
    type: SET_INFO,
    user,
});

export const actionRemove = () => ({
    type: REMOVE,
});

export const actionSetLike = (id) => ({
    type: LIKE,
    id
})
export const actionRemoveLike = (likes) => ({
    type: REMOVE_LIKE,
    likes
})

// --- THUNKS --- //

export const thunkMyInfo = () => async (dispatch) => {
    const response = await fetch("/api/user/current", {
        headers: {
            "Content-Type": "application/json",
        }
    });
    if (response.ok) {
        const data = await response.json();
        await dispatch(actionSet(data));
        return null;
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ["An error occurred. Please try again."];
    }
};
export const thunkMakeFav = (form) => async (dispatch) => {
    const response = await fetch("/api/like", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(form)
    });
    if (response.ok) {
        const data = await response.json();
        await dispatch(actionSetLike(data));
        return null;
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ["An error occurred. Please try again."];
    }
};

export const thunkDeleteFav = (id) => async (dispatch) => {

    const response = await fetch(`/api/like/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (response.ok) {
        const data = await response.json();
        await dispatch(actionRemoveLike(data));
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
}

export const thunkDeckCard = (deck, cid) => async (dispatch) => {
    const response = await fetch(`/api/deck/${deck}/card`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ card: cid })
    });
    if (response.ok) {
        await dispatch(thunkMyInfo())
        return null;
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ["Whoopsies! Try Again!"];
    }



}
// --- REDUCE/STORE --- //

const initialState = {};

export default function reducer(state = initialState, action) {
    let newState = { ...state }
    switch (action.type) {
        case SET_INFO:
            newState = action.user
            return newState;
        case REMOVE:
            return {};
        case LIKE:
            newState.favorites ?
                newState.favorites.push(action.id) :
                newState.favorites = [action.id]
            return newState
        case REMOVE_LIKE:
            newState.favorites = [action.likes]
            return newState
        default:
            return state;
    }
}
