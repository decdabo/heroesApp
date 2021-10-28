import { types } from "./types/types";

const theState = () => {
    if(JSON.parse(localStorage.getItem("token"))){
        return { logged: true}
    }else{
        return { logged: false }
    }
}

const initialState = theState()

export const authReducer = (state = initialState, { type, payload } ) =>{
    switch (type) {
        case types.LOG_IN:
            return {
                logged: payload
            }
        case types.LOG_OUT:
            return {}
        default:
            return state;
    }
}