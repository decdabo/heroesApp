import { types } from "../types/types";

export const heroesAddData = ( hero ) => ({
    type: types.ADD_DATA,
    payload: {
        data: hero
    }
});