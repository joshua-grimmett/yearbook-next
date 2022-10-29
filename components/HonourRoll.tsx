
const HonourRoll = ({ staff, buffer, headers }: { staff: any, buffer: number, headers: string }) => {
  if (!buffer) buffer = 0;
  const firstHalf = staff.slice(0, staff.length / 2 - buffer);
  const secondHalf = staff.slice(staff.length / 2 - buffer);
  // secondHalf.unshift(firstHalf[0]);

  return (
    <div className="honourRoll">
      <div className="honourRoll__col"> 
        {firstHalf.map((row, i) => {
          const rowHeader = (row.includes('20') && row.includes(',,,'));
          if (rowHeader) return (
            <div key={i} className="honourRoll__rowHeader">
              <span>{row.split(',').join('')}</span>
            </div>
          )
          if (row === headers) {
            return (
              <div key={i} className="honourRoll__row honourRoll__rowDefinitions">
                {row.split(',').map((cell, j) => (
                  <span className='honourRoll__item' key={j} dangerouslySetInnerHTML={{__html: cell.split('\n').join('<hr></hr>')}}></span>
                ))}
              </div>
            )
          }
          return (
            <div key={i} className="honourRoll__row">
              {row.split(',').map((cell, j) => (
                <span className='honourRoll__item' key={j} dangerouslySetInnerHTML={{__html: cell.split('\n').join('<hr></hr>')}}></span>
              ))}
            </div>
        )})} 
      </div> 
      <div className="honourRoll__col">
        {secondHalf.map((row, i) => {
          const rowHeader = (row.includes('20') && row.includes(',,,'));
          if (rowHeader) return (
            <div key={i} className="honourRoll__rowHeader">
              <span>{row.split(',').join('')}</span>
            </div>
          )
          return (
            <div key={i} className="honourRoll__row">
              {row.split(',').map((cell, j) => (
                <span className='honourRoll__item' key={j} dangerouslySetInnerHTML={{__html: cell.split('\n').join('<hr></hr>')}}></span>
              ))}
            </div>
        )})} 
    </div>
  </div>
  )
}

export default HonourRoll

const HonourRollColumn = (list) => {
}

export { HonourRollColumn }