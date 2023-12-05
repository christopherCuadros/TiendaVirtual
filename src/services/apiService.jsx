import { Axios } from "axios";


const BASE_ROUTE = import.meta.env.VITE_SERVICE_CODE;


export const getAllProducts = async () => {
    const [data,setData] = useState(null);
    try {
        const response = await Axios.get(`${BASE_ROUTE}/products`)
        if(!response.ok){
            throw new Error("Error al obtener datos");
        }

        setData(response.data);
        return data;
    } catch (error) {
        throw new Error("Error de parte del cliente");
    }

}

