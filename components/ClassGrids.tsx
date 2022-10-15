import TextCard from "./TextCard"
import type { Teacher } from "./TeacherCard"
import TeacherCard from "./TeacherCard"
import ClassPhotoCard from "./ClassPhotoCards"
import { ClassPhotoDoubleCard } from "./ClassPhotoCards"
import type { ClassPhoto } from "./ClassPhotoCards"

const ClassLeftGrid = ({ teachers, text, classPhotos }: {teachers: Teacher[], text: string, classPhotos: ClassPhoto[]}) => {
  return (
    <>
      <ClassTopLeftGrid teachers={teachers} text={text} classPhotos={classPhotos}/>
      <ClassBottomLeftGrid teachers={teachers} classPhotos={classPhotos}/>
    </>
  )
}

const ClassTopLeftGrid = ({ teachers, text, classPhotos }: {teachers: Teacher[], text: string, classPhotos: any} ) => {
  return (
    <div className="grid">
      <TextCard text={text}/>
      <div className="right">
        {
          teachers.map((teacher, i) => (
            <TeacherCard key={i} teacher={teacher}/>
          ))
        }
        {
          teachers.length < 2 && <ClassPhotoCard teacherHeight={true} classPhoto={classPhotos[0]}/>
        }
      </div>
    </div>
  )
}

const ClassBottomLeftGrid = ({ classPhotos, teachers }: {classPhotos: ClassPhoto[], teachers: Teacher[]}) => {
  if (teachers.length === 1) {
    return <ClassBottomLeftGrid teachers={[]} classPhotos={classPhotos.slice(1)}/>
  }
  
    return (
    <div className="grid__class">
      { classPhotos.slice(0,7).map((classPhoto: any, i: number) => {
        if (i === 2) return;
        if (i === 3) return (
          <ClassPhotoDoubleCard key={i} classPhotos={[classPhotos[2], classPhotos[3]]}/>
        )
        return <ClassPhotoCard key={i} classPhoto={classPhoto}/>
      })}
    </div>
  )
}

export { ClassLeftGrid }