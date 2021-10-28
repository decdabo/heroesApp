import { types } from "./types/types";

const initialState = { teamHero: [], showHero:{} }

export const heroesListReducer = ( state = initialState , { type, payload } ) =>{
    switch (type) {
        case types.ADD_DATA:
            return {
                ...state,
                teamHero: [...state.teamHero, payload],
            }
        case types.REMOVE:{
            const { teamHero } = state;
            const filteredHeroes = teamHero.filter( hero =>{return hero !== payload})
                return {
                    ...state,
                    teamHero: [...filteredHeroes]
                }
            }
        case types.SHOW_HERO:
            return{
                ...state,
                showHero: payload
            }
        case types.ADD_HERO_ERROR:
            return {
                ...state
            }
        default:
            return state;
    }
}