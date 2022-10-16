
const TextCard = ({ text, textStyle }: { text: string, textStyle: object }) => {
  return (
    <div className="text__card" style={textStyle}>
      <span dangerouslySetInnerHTML={{__html: text}}></span>
    </div>
          
  )
}

export default TextCard