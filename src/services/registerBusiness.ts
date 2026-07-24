import { apiClient } from "./apiClient";

interface registerBusinessProps {
    id: string,
    name_commerce: string,
    owner_name: string,
    owner_last_name: string,
    rut_commerce: string,
    phone: string,
    email: string,
    city: string
}

export const registerBusiness = async (data: registerBusinessProps) => {
    try {
        const response = await apiClient.post('/api/registerCommerce',data)
        return response.data
    } catch (error) {
        console.error("Ups, error al registrar el comercio: ", {});
        throw error;
    }
}

