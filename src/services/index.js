import axios from 'axios';


export const fetchData = async (userName) => {
    return axios.get(`https://api.github.com/users/${userName}`)
}