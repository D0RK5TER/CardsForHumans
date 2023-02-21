// constants
const SET_INFO = "myprofile/SET_INFO";
const REMOVE = "myprofile/REMOVE";

const actionSet = (user) => ({
    type: SET_INFO,
    user,
});

export const actionRemove = () => ({
    type: REMOVE,
});

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


const initialState = {};

export default function reducer(state = initialState, action) {
    let newState = { ...state }
    switch (action.type) {
        case SET_INFO:
            newState = action.user
            return newState;
        case REMOVE:
            return {};
        default:
            return state;
    }
}