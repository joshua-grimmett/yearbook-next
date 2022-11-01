import QuoteMark from "./QuoteMark"

const DeputyQuote = ({ text, textStyle, large }: { text: string, textStyle?: object, large?: boolean }) => {
  return (
    <div className='deputyQuote' style={textStyle}>
      <QuoteMark className="img"/>
      <span dangerouslySetInnerHTML={{__html: text}}></span>
    </div>
          
  )
}

export default DeputyQuote