import { types } from "../types/types";

export const heroesAddTeam = ( hero ) => ({
    type: types.ADD_DATA,
    payload: hero,
});

export const showHeroData = ( data ) =>({
    type: types.SHOW_HERO,
    payload: data
})

export const removeHeroData = ( data ) =>({
    type: types.REMOVE,
    payload: data
})