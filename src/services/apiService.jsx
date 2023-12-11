import axios from 'axios';


const BASE_ROUTE = import.meta.env.VITE_ROUTE_API;


export const getAllProducts = async () => {
    try {
        const response = await axios.get(`${BASE_ROUTE}/producto`);
        return response.data;
    } catch (error) {
        if (error.response) {
            // El servidor respondió con un código de estado fuera del rango 2xx
            console.error('Respuesta del servidor con error:', error.response.data);
            throw new Error('Error al obtener datos del servidor');
        } else if (error.request) {
            // La solicitud fue realizada, pero no se recibió respuesta
            console.error('No se recibió respuesta del servidor');
            throw new Error('Error de parte del cliente: No se recibió respuesta del servidor');
        } else {
            // Algo salió mal en la configuración de la solicitud
            console.error('Error al configurar la solicitud:', error.message);
            throw new Error('Error de parte del cliente: Configuración de solicitud incorrecta');
        }
    }

    /*try {
        const response = await axios.get(`${BASE_ROUTE}/producto`);
        if (!response.ok) {
            throw new Error("Error al obtener datos2");
        }
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.log(error)
        throw new Error("Error de parte del cliente");
    }}*/
    
};


