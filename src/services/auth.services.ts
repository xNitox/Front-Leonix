import { apiClient } from "./apiClient"


export const loginApi = async (user: string, password: string, rutCommerce?: string) => {
    try {
        // Axios hace el stringify y maneja los errores HTTP automáticamente
        const response = await apiClient.post('api/auth/login', { user, password, rutCommerce });

        const data = response.data //retorna la respuesta directa del backend
        //1.si el inicio de sessió es exitoso capturar datos para guardar sesion:

        // 2. Guardas el token JWT en el localStorage (llave, valor)
        // El token es lo que demuestra que el usuario ya se validó

        localStorage.setItem('token', data.session.access_token);
        localStorage.setItem('role', data.role);
        const userIdentifier = data.user.email || data.user.rut || user;
        localStorage.setItem('userIdentifier', userIdentifier);
        localStorage.setItem('email', data.user.email);
        /* Guardamos el objeto completo transformado a texto */
        localStorage.setItem('user', JSON.stringify(data.user))
        if (data.user?.commerce_id) {

            localStorage.setItem('commerce_id', JSON.stringify(data.user.commerce_id))
        }
        console.log("¡Sesión de " + data.role + " guardada con éxito!");
        return data;
    } catch (error) {
        console.error("Error al guardar la sesión en el navegador", error)
        throw error;
    }
};


export const getCommerceId = () => {
    const user = localStorage.getItem('user');
    if (!user) return null;

    const parsedUser = JSON.parse(user);
    return parsedUser.commerce_id ?? null;

}
