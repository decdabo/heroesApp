import axios from "axios"

const baseUrl = process.env.REACT_APP_LOGIN

export const authRequest = async(method, values) =>{
    try {
        const response = await axios.post(`${baseUrl}${method}`, values)
        return response;
    } catch (error) {
        console.log(error);
    }
}