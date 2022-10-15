
const TeacherCard = ({ teacher }: { teacher: Teacher }) => (
  <div className="card card__teacher">
    <span className="tag">{teacher.name}</span>
    <div className="card__inner">
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img src={teacher.image} alt={teacher.name}/>
    </div>
  </div>
)

export default TeacherCard

export type Teacher = {
  name: string
  image: string
}