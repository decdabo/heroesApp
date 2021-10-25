import axios from "axios"
import { useEffect, useState } from "react";

export const useData = ( her ) =>{
    const [data, setData] = useState(undefined);
    useEffect(() => {
        axios.get( `https://superheroapi.com/api.php/117518734017873/search/${her}` )
            .then(res => setData( res.data ) )
            .catch(e => console.log(e));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return data
}