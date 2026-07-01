
import { apiClient } from "./apiClient"

type StaffFormData = {
    role: string,
    name: string,
    last_name: string,
    email: string,
    phone: string,
    rut: string,
    pin: string
}
export const getRoles = async () => {
    try {
        const response = await apiClient.get('/api/role');
        return response.data
    } catch (error) {
        console.error('no fue posible obtener los roles', error);
        throw error;
    }
}

export const createStaff = async (data: StaffFormData) => {
    try {
        
        const response = await apiClient.post('/api/CreateStaff', data)
        return response.data;
    }
    catch(error){
        console.error('Error al crear el rol',error)
        throw error;
    }
}