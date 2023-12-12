import { apiBack } from "./api";

export const getAllProducts = async () => {
  try {
    const response = await apiBack("/producto");
    return response.data;
  } catch (error) {
    if (error.response) {
      // El servidor respondió con un código de estado fuera del rango 2xx
      console.error("Respuesta del servidor con error:", error.response.data);
      throw new Error("Error al obtener datos del servidor");
    } else if (error.request) {
      // La solicitud fue realizada, pero no se recibió respuesta
      console.error("No se recibió respuesta del servidor");
      throw new Error(
        "Error de parte del cliente: No se recibió respuesta del servidor"
      );
    } else {
      // Algo salió mal en la configuración de la solicitud
      console.error("Error al configurar la solicitud:", error.message);
      throw new Error(
        "Error de parte del cliente: Configuración de solicitud incorrecta"
      );
    }
  }
};

export const postProduct = async (product) => {
  try {
    const { data } = await apiBack.post("/producto", product);
    return {
      status: true,
      data,
    };
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (product) => {
  const { nombre, descripcion, precio, stock, imagen, idCategoria, estado } =
    product;

  try {
    const { data } = await apiBack.put(`/producto/${product.id}`, { nombre,descripcion,precio,stock,imagen,estado,idCategoria });
    return {
      status: true,
      data,
    };
  } catch (error) {
    console.log(error);
  }
};

export const destroyProduct = async (id) => {
  try {
    const { data } = await apiBack.delete(`/producto/${id}`);
    return {
      status: true,
      data,
    };
  } catch (error) {
    console.log(error);
  }
};

export const getCategoriesProd = async () => {
  try {
    const response = await apiBack("/categoria");
    return response.data;
  } catch (error) {
    if (error.response) {
      // El servidor respondió con un código de estado fuera del rango 2xx
      console.error("Respuesta del servidor con error:", error.response.data);
      throw new Error("Error al obtener datos del servidor");
    } else if (error.request) {
      // La solicitud fue realizada, pero no se recibió respuesta
      console.error("No se recibió respuesta del servidor");
      throw new Error(
        "Error de parte del cliente: No se recibió respuesta del servidor"
      );
    } else {
      // Algo salió mal en la configuración de la solicitud
      console.error("Error al configurar la solicitud:", error.message);
      throw new Error(
        "Error de parte del cliente: Configuración de solicitud incorrecta"
      );
    }
  }
};
