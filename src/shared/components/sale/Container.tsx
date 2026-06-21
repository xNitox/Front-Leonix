import type { ReactNode } from "react";
interface ContainerProps{
    children: ReactNode;
}

export const Container = ({children}: ContainerProps) => {
  return (
    // w-full: 100% en celulares
    // max-w-[50rem]: El ancho máximo que querías para tu tabla
    // mx-auto: Centra todo en pantallas de computadora
    // px-4 md:px-8: Da un margen interno responsivo para que el contenido nunca toque los bordes físicos de la pantalla
    <div className="w-full max-w-[50rem] ml-0 px-4 md:px-8">
      {children}
    </div>
  )
}
