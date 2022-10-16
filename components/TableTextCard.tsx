
const TableTextCard = ({ text, question, style }: { text: any, question: string, style: object }) => {
  return (
    <div className="tableText__card">
      <span className="question">{question}</span>
      <div className="table" style={style}>
        {text.map((row: any, i: number) => (
          <div className="table__row" key={i}>
            <div className="table__column">{row.name}</div>
            <div className="table__column">{row.job}</div>
          </div>
        ))}
      </div>
    </div>
          
  )
}

export default TableTextCard