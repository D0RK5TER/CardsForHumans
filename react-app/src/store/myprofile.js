// constants
const SET_INFO = "myprofile/SET_INFO";
// const REMOVE_DECK = "mydecks/REMOVE_DECK";

const actionSet = (user) => ({
    type: SET_INFO,
    user,
});

// const actionRemove = () => ({
//     type: REMOVE_DECK,
// });

export const thunkMyInfo = () => async (dispatch) => {
    const response = await fetch("/api/user/current", {
        headers: {
            "Content-Type": "application/json",
        }
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(actionSet(data));
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


const initialState = {};

export default function reducer(state = initialState, action) {
    const newState = { ...state }
    switch (action.type) {
        case SET_INFO:
            newState = action.user
            return newState;
        // case REMOVE_DECK:
        //     return {};
        default:
            return state;
    }
}