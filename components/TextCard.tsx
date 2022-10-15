
const TextCard = ({ text }: { text: string }) => {
  return (
    <div className="text__card">
      <span dangerouslySetInnerHTML={{__html: text}}></span>
    </div>
          
  )
}

export default TextCard