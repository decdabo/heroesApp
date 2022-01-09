import axios from "axios"

const baseUrl = "https://heroes-alkemy.herokuapp.com/api/"

export const authRequest = async(method, values) =>{
    try {
        const response = await axios.post(`${baseUrl}${method}`, values)
        return response;
    } catch (error) {
        console.log(error);
    }
}