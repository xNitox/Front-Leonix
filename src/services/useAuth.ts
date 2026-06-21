import { useState } from "react"
import { loginApi } from "./auth.services";
import { useNavigate } from "react-router-dom";


export const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [roleAuth, setRoleAuth] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (user: string, password: string, rutCommerce?: string) => {
        setLoading(true);
        setError(null);

        try {
            const data = await loginApi(user, password, rutCommerce);
            /* Falta implementar el guardado de datos para usar acces_toke, rut, userData "hacer despues" */
            const { role, access_token, rut, user: userData, name, } = data;
            console.log("Login exitoso", data);

            localStorage.setItem('role', role);

            if (data.role === 'owner') {
                navigate('/admin-dashboard', { state: { data: name } })
                setRoleAuth(role)
            }else if (data.role === 'cashier'){
                navigate('/cashier',{state: {data:name}})
            }else{
                console.error("Rol no encontrado",data.role)
            }

        }
        catch (err: any) {
            // Axios extrae el mensaje de error real que mandó el backend
            const serverMessage = err.response?.data?.message || "Error al conectar con el servidor";
            setError(serverMessage);
        } finally {
            setLoading(false);
        }
    };
    return { handleLogin, loading, error };
}



