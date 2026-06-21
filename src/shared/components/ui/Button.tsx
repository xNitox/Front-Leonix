import { useNavigate } from "react-router-dom"

interface ButtonProps{
    texto:string,
    ruta: string
    style: string
}

export const Button = ({texto,ruta,style}: ButtonProps) => {
    const navigate = useNavigate();
  return (
      <button onClick={() => navigate(ruta)} className={style}>
      {texto}
    </button>
  )
}
