interface SubTitle{
    text: string,
    className?: string
}

export const SubTitle = ({text,className = ""}:SubTitle) => {
  return (
    <h2 className={`text-white font-semibold text-2xl ${className}`}
    >{text}</h2>
  )
}
