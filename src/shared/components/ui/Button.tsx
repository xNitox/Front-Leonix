import { useNavigate } from "react-router-dom"
import { twMerge } from "tailwind-merge";

interface ButtonProps{
    texto:string,
    ruta: string,
    style?: string,
    type?: string
}

export const Button = ({texto,type,ruta,style ="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"}: ButtonProps) => {
    const navigate = useNavigate();
  return (
      <button onClick={() => navigate(ruta)} className={twMerge(style)}>
      {texto} 
    </button>
  )
}
