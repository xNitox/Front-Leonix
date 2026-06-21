import { InputField } from "../shared/components/ui/InputField";
import { TittleApp } from "../shared/components/ui/TittleApp";
import leonix from "../assets/images/leonix.png";
import { useState } from "react";
import { useAuth } from "../services/useAuth";

export const Login = () => {
    const P_STYLE = "text-sm font-medium text-slate-300 mb-1 color-white";

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [rutCommerce, setrutCommerce] = useState("");

    const { handleLogin, loading, error } = useAuth();

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        //Enviamos los identificadores al hook
        handleLogin(user, password,rutCommerce);
    }
    return (
        <div className="flex  flex-col items-center justify-center bg-cyan-950 w-full min-h-screen">
            <form onSubmit={handleSubmit} className="w-full max-w-sm p-4" >
                {
                    error && (
                        <div className="p-3 mb-4 text-xs font-medium text-red-400 bg-red-950/50 border border-red-800 rounded-md text-center">
                            {error}
                        </div>
                    )
                }
                <img
                    src={leonix}
                    alt="Logo de Leonix"
                    className="w-100 h-100 mb-[-2rem]"
                />
                <TittleApp />
                <div >
                    <p className={P_STYLE}>Rut comercio</p>
                    <InputField placeholder="1032432..." type="text" value={rutCommerce} onChange={(e) => setrutCommerce(e.target.value)}/>
                    <p className={P_STYLE}>Ingrese su usuario:</p>
                    <InputField placeholder="Ingrese su usuario" type="text" value={user} onChange={(e) => setUser(e.target.value)} />
                    <p className={P_STYLE}>Ingrese su contraseña</p>
                    <InputField placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit"
                        disabled={loading}
                        className="hover:bg-orange-700 w-full active:bg-blue-800 text-white font-medium text-sm py-2 px-4 rounded-md shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-2">
                        {loading ? "Cargando..." : "Entrar"}</button>
                </div>
            </form>
        </div>
    )
}
