import { types } from "./types/types";

const initialState = { heroesId: [69, 69, 69, 69, 69, 69], heroesData:[] }

export const heroesListReducer = ( state = initialState , { payload, type } ) =>{
    switch (type) {
        case types.ADD_DATA:
            return {
                ...state,
                heroesData: [ payload.data ] 
            }
        case types.REMOVE:
            return {}
        default:
            return state;
    }
}