// constants
const SET_PRINT = "prints/SET_PRINT";
const REMOVE = "prints/REMOVE";
const REMOVE_ALL = "prints/REMOVE_ALL"

const actionSetC = (print) => ({
    type: SET_PRINT,
    print,
});


export const actionRemove = (id) => ({
    type: REMOVE,
    id
});
export const actionRemoveAll = () => ({
    type: REMOVE_ALL,
    
});
export const thunkGetPrints = () => async (dispatch) => {
    const response = await fetch(`/api/print`, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (response.ok) {
        const data = await response.json();
        // console.log(data)
        await dispatch(actionSetC(data.deck));
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
export const thunkMakePrint = (form) => async (dispatch) => {
    const response = await fetch(`/api/print`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(form)
    });
    if (response.ok) {
        const data = await response.json();
        await dispatch(actionSetC(data));
        return null
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ["Whoopsies! Try Again!"];
    }
};
export const thunkDeletePrint = (id) => async (dispatch) => {
    if (id) {
        const response = await fetch(`/api/print/${id}`, {
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
    }
    else {
        const response = await fetch(`/api/print`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            const data = await response.json();
            await dispatch(actionRemoveAll());
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
};


const initialState = {};

export default function reducer(state = initialState, action) {
    let newState = { ...state }
    switch (action.type) {
        case SET_PRINT:
            newState[action.print.id] = action.print
            return newState;
        case REMOVE:
            delete newState[action.id]
            return newState;
        case REMOVE_ALL:
            return {}
        default:
            return state;
    }
}