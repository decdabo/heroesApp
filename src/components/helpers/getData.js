import axios from "axios"

export const getData = ( her ) =>{  
        try {
            return axios.get( `https://superheroapi.com/api.php/117518734017873/search/${her}` )
            .then(res => res.data  )
            .catch(e => console.log(e));
        } catch (error) {
            console.log(error)
        }

}
