import { types } from "./types/types";

const initialState = { teamHero: [], showHero:{} }

export const heroesListReducer = ( state = initialState , { type, payload } ) =>{
    switch (type) {
        case types.ADD_DATA:
            return {
                ...state,
                teamHero: [...state.teamHero, payload],
            }
        case types.REMOVE:
            return {}
        case types.SHOW_HERO:
            return{
                ...state,
                showHero: payload
            }
        default:
            return state;
    }
}