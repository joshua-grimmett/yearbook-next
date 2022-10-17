import TextCard from "./TextCard"
import type { Teacher } from "./TeacherCard"
import TeacherCard from "./TeacherCard"
import ClassPhotoCard from "./ClassPhotoCards"
import { ClassPhotoDoubleCard } from "./ClassPhotoCards"
import type { ClassPhoto } from "./ClassPhotoCards"
import TableTextCard from "./TableTextCard"
import PosterCard from "./PosterCard"

const ClassLeftGrid = ({ teachers, text, classPhotos, textStyle }: {teachers: Teacher[], text: string, classPhotos: ClassPhoto[], textStyle: object}) => {
  return (
    <>
      <ClassTopLeftGrid teachers={teachers} text={text} classPhotos={classPhotos} textStyle={textStyle}/>
      <ClassBottomLeftGrid teachers={teachers} classPhotos={classPhotos}/>
    </>
  )
}

export { ClassLeftGrid }

const LargeClassLeftGrid = ({ teachers, text, classPhotos, textStyle }: {teachers: Teacher[], text: string, classPhotos: ClassPhoto[], textStyle: object}) => {
  return (
    <>
      <div className="grid grid-cols-2 largeClassLeftGrid">
        <div className="left">
          <TextCard text={text} large={true} textStyle={textStyle}/>
          <div className="flex flex-row justify-between w-[119mm]">
            <ClassPhotoCard height='42.23mm' classPhoto={teachers.length < 2 ? classPhotos[4] : classPhotos[3]}/>
            <ClassPhotoCard height='42.23mm' classPhoto={teachers.length < 2 ? classPhotos[5] : classPhotos[4]}/>
          </div>
        </div>
        <div className="right">
          {
            teachers.map((teacher, i) => (
              <TeacherCard key={i} teacher={teacher}/>
            ))
          }
          {
            teachers.length < 2 && <ClassPhotoCard height='42.23mm' classPhoto={classPhotos[0]}/>
          }
          {
            <>
              <ClassPhotoCard height='29.4mm' classPhoto={teachers.length < 2 ? classPhotos[1] : classPhotos[0]}/>
              <ClassPhotoCard height='29.4mm' classPhoto={teachers.length < 2 ? classPhotos[2] : classPhotos[1]}/>
              <ClassPhotoCard height='42.23mm' classPhoto={teachers.length < 2 ? classPhotos[3] : classPhotos[2]}/>
            </>
          }
        </div>
      </div>
    </>
  )
}

export { LargeClassLeftGrid }

const ClassTopLeftGrid = ({ teachers, text, classPhotos, textStyle }: {teachers: Teacher[], text: string, classPhotos: any, textStyle: object} ) => {
  return (
    <div className="topGrid">
      <TextCard text={text} textStyle={textStyle}/>
      <div className="right">
        {
          teachers.map((teacher, i) => (
            <TeacherCard key={i} teacher={teacher}/>
          ))
        }
        {
          teachers.length < 2 && <ClassPhotoCard height='42.23mm' classPhoto={classPhotos[0]}/>
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
          <ClassPhotoDoubleCard>
            <ClassPhotoCard key={i} height={teachers.length > 0 ? '16mm' : '23mm'} classPhoto={classPhotos[2]}/>
            <ClassPhotoCard key={i} height='23mm' classPhoto={classPhotos[3]}/>
          </ClassPhotoDoubleCard>
        )
        return <ClassPhotoCard key={i} classPhoto={classPhoto}/>
      })}
    </div>
  )
}

const ClassRightGrid = ({ 
  question,
  text,
  classPhotos,
  poster,
  tableTextStyle
}: {question: string, text: any, classPhotos: ClassPhoto[], poster: string, tableTextStyle: object}) => {
  return (
    <>
      <ClassTopRightGrid question={question} text={text} classPhotos={classPhotos} poster={poster} tableTextStyle={tableTextStyle}/>
      <ClassBottomRightGrid classPhotos={classPhotos.slice(1)}/>
    </>
  )
}

export { ClassRightGrid }

const ClassTopRightGrid = ({ text, classPhotos, question, poster, tableTextStyle }: {
  text: any,
  classPhotos: ClassPhoto[],
  question: string,
  poster: string,
  tableTextStyle: object
}) => {
  return (
    <div className="posterGrid">
      <TableTextCard question={question} text={text} style={tableTextStyle}/>
      <div className="column">
        <PosterCard image={poster}/>
        <ClassPhotoCard height='24mm' width='82mm' classPhoto={classPhotos[0]} />
      </div>
    </div>
  )
}

const ClassBottomRightGrid = ({ classPhotos }: {
  classPhotos: ClassPhoto[]
}) => {
  return (
    <div className="grid grid-cols-3 relative mt-[18mm]">
      <div className="flex flex-col">
        <ClassPhotoCard height='23.12mm' width='53.5mm' classPhoto={classPhotos[0]} />
        <ClassPhotoCard height='23.12mm' width='53.5mm' classPhoto={classPhotos[1]} />
        <ClassPhotoCard height='23.12mm' width='53.5mm' classPhoto={classPhotos[2]} />
      </div>
      <div className="flex flex-col">
        <ClassPhotoCard height='41.6mm' width='53.5mm' classPhoto={classPhotos[3]} />
        <ClassPhotoCard height='41.6mm' width='53.5mm' classPhoto={classPhotos[4]} />
      </div>
      <div className="flex flex-col">
        <ClassPhotoCard height='41.6mm' width='53.5mm' classPhoto={classPhotos[5]} />
        <ClassPhotoCard height='41.6mm' width='53.5mm' classPhoto={classPhotos[6]} />
      </div>
    </div>
  )
}

const PhotoClassRightGrid = ({ 
  classPhotos,
  poster,
}: {question: string, text: any, classPhotos: ClassPhoto[], poster: string, tableTextStyle: object}) => {
  return (
    <div className="relative top-[12mm]">
      <div className="grid grid-cols-2">
        <div className="left">
          { classPhotos.length !== 12 && <>
            <ClassPhotoCard height='43.95mm' width='82mm' classPhoto={classPhotos[0]}/>
            <ClassPhotoCard height='43.95mm' width='82mm' classPhoto={classPhotos[1]}/>
            </>
          }
          {
            classPhotos.length === 12 && <>
              <ClassPhotoCard height='24.7mm' width='82mm' classPhoto={classPhotos[0]}/>
              <ClassPhotoCard height='24.7mm' width='82mm' classPhoto={classPhotos[1]}/>
              <ClassPhotoCard height='24.7mm' width='82mm' classPhoto={classPhotos[11]}/>
            </>
          }
        </div>
        <div className="right">
          <PosterCard image={poster}/>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-[5mm] w-full">
        <ClassPhotoCard height='43.95mm' width='100%' classPhoto={classPhotos[2]}/>
        <ClassPhotoCard height='43.95mm' width='100%' classPhoto={classPhotos[3]}/>
        <ClassPhotoCard height='43.95mm' width='100%' classPhoto={classPhotos[4]}/>

        <ClassPhotoCard height='31.8mm' width='100%' classPhoto={classPhotos[5]}/>
        <ClassPhotoCard height='31.8mm' width='100%' classPhoto={classPhotos[6]}/>
        <ClassPhotoCard height='31.8mm' width='100%' classPhoto={classPhotos[7]}/>
        <ClassPhotoCard height='31.8mm' width='100%' classPhoto={classPhotos[8]}/>
        <ClassPhotoCard height='31.8mm' width='100%' classPhoto={classPhotos[9]}/>
        <ClassPhotoCard height='31.8mm' width='100%' classPhoto={classPhotos[10]}/>
      </div>
    </div>
  )
}

export { PhotoClassRightGrid }

const PhotoClassLeftGrid = ({ classPhotos }: {classPhotos: ClassPhoto[]}) => {
  return (
    <div className="grid grid-cols-3 gap-x-[5mm] w-full relative top-[55mm]">
      <ClassPhotoCard height='41.65mm' width='100%' classPhoto={classPhotos[0]}/>
      <ClassPhotoCard height='41.65mm' width='100%' classPhoto={classPhotos[1]}/>
      <ClassPhotoCard height='41.65mm' width='100%' classPhoto={classPhotos[2]}/>
      <ClassPhotoCard height='41.65mm' width='100%' classPhoto={classPhotos[3]}/>
      <ClassPhotoCard height='41.65mm' width='100%' classPhoto={classPhotos[4]}/>
      <ClassPhotoCard height='41.65mm' width='100%' classPhoto={classPhotos[5]}/>
      <ClassPhotoCard height='41.65mm' width='100%' classPhoto={classPhotos[6]}/>
      <ClassPhotoCard height='41.65mm' width='100%' classPhoto={classPhotos[7]}/>
      <ClassPhotoCard height='41.65mm' width='100%' classPhoto={classPhotos[8]}/>
      <ClassPhotoCard height='41.65mm' width='100%' classPhoto={classPhotos[9]}/>
      <ClassPhotoCard height='41.65mm' width='100%' classPhoto={classPhotos[10]}/>
      <ClassPhotoCard height='41.65mm' width='100%' classPhoto={classPhotos[11]}/>
    </div>
  )
}

export { PhotoClassLeftGrid }