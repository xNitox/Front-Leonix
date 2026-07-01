interface TitleProps{
    titulo: string,
}



export const SectionTitle = ({titulo}:TitleProps) => {
  return (
    <h1 className='text-white font-bold text-3xl'>{titulo}</h1>
  )
}
