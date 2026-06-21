import axios from "axios";

export interface ProductsSaleProps {
    codigo: number,
    nombreProducto: string,
    cantidad: number,
    precio: number,
    ahorro?: number
}
export const getProductsSale = async (): Promise<ProductsSaleProps[]> => {
    const response = await axios.get("http://localhost:3000/api/products");
    return response.data
}
