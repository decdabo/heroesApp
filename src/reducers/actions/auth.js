import { types } from "../types/types"


export const login = (token) => {
    const action = {
        type: types.LOG_IN,
        payload: true
    };
    localStorage.setItem("token", JSON.stringify(token));
    return action;
}

export const logout = () => {
    const action = {
        type: types.LOG_OUT,
        payload: false
    };
    localStorage.removeItem("token");
    return action;
}