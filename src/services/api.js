import axios from 'axios';


const BASE_ROUTE = import.meta.env.VITE_ROUTE_API;

const apiBack = axios.create({
    baseURL: BASE_ROUTE,
    timeout: 1000,
    headers: {
        "Content-Type": "application/json"
    }
})


export {
    apiBack
}