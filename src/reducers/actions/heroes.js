import Swal from "sweetalert2";
import { types } from "../types/types";

export const heroesAddTeam = ( heroe, team) => {
    const [ hero ] = team.filter(hero =>{ return hero === heroe });
    const  align  = team.filter(hero =>{ return hero.biography.alignment === heroe.biography.alignment })

    if( hero === heroe ){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You already have this character',
        })
        return { type: types.ADD_HERO_ERROR }
    }else if( align.length === 3 ) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'you already have 3 characters with this align',
        })
        return { type: types.ADD_HERO_ERROR }
    }else if( team.length === 6 ){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You already have 6 characters',
        })
        return { type: types.ADD_HERO_ERROR }
    }else{
        return {
            type: types.ADD_DATA,
            payload: heroe
        }
    }

}

export const showHeroData = ( data ) =>({
    type: types.SHOW_HERO,
    payload: data
})

export const removeHeroData = ( data ) =>({
    type: types.REMOVE,
    payload: data
})

