
const TextCard = ({ text, textStyle, large }: { text: string, textStyle: object, large: boolean }) => {
  return (
    <div className={`text__card${large ? ' text__card--large': ''}`} style={textStyle}>
      <span dangerouslySetInnerHTML={{__html: text}}></span>
    </div>
          
  )
}

export default TextCard