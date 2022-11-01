
const TextCard = ({ text, textStyle, large, className }: { text: string, textStyle?: object, large?: boolean, className?: string }) => {
  return (
    <div className={`text__card ${className} ${large ? ' text__card--large': ''}`} style={textStyle}>
      <span dangerouslySetInnerHTML={{__html: text}}></span>
    </div>
          
  )
}

export default TextCard