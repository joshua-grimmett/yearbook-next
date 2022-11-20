
const ClassOf2022Card = ({student}: {student: any}) => (
  <div className="classOfCard">
    <div className="classOfCard__profile">
      <img src={student.image} alt={`${student.name}`}/>
      <div className="classOfCard__profile--text">
        <span>{student.name}</span>
        <span>{student.class}</span>
      </div>
    </div>
    <div className='classOfCard__questions'>
        { student.questions.map((question: any, qKey: number) => (
          <div key={qKey} className='classOfCard__questions_row'>
            <span className="font-bold" >{question.question}</span>
            <span style={question.styles ?? {}}>{question.answer}</span>
          </div>
        ))}
      </div>
  </div>
)

export default ClassOf2022Card