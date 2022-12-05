import TextCard from "./TextCard"
import type { Teacher } from "./TeacherCard"
import TeacherCard from "./TeacherCard"
import ClassPhotoCard from "./ClassPhotoCards"
import { ClassPhotoDoubleCard } from "./ClassPhotoCards"
import ClassOf2022Card from "./ClassOf2022Card"
import type { ClassPhoto } from "./ClassPhotoCards"
import TableTextCard, { LongTableTextCard } from "./TableTextCard"
import PosterCard from "./PosterCard"
import DeputyQuote from "./DeputyQuote"

const ClassLeftGrid = ({ teachers, text, classPhotos, textStyle }: {teachers: Teacher[], text: string, classPhotos: ClassPhoto[], textStyle: object}) => {
  return (
    <>
      <ClassTopLeftGrid teachers={teachers} text={text} classPhotos={classPhotos} textStyle={textStyle}/>
      { classPhotos.length <= 16 && <ClassBottomLeftGrid teachers={teachers} classPhotos={classPhotos}/> }
      { classPhotos.length > 16 && <BottomLeft3x3Grid classPhotos={classPhotos}/> }
    </>
  )
}

export { ClassLeftGrid }

const BottomLeft3x3Grid = ({ classPhotos }: {classPhotos: ClassPhoto[]}) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-x-[2.35mm] relative top-[12mm]">
        <ClassPhotoCard width="53.2mm" height="35.5mm" classPhoto={classPhotos[1]}/>
        <ClassPhotoCard width="53.2mm" height="35.5mm" classPhoto={classPhotos[2]}/>
        <ClassPhotoCard width="53.2mm" height="35.5mm" classPhoto={classPhotos[3]}/>
        <ClassPhotoCard width="53.2mm" height="35.5mm" classPhoto={classPhotos[4]}/>
        <ClassPhotoCard width="53.2mm" height="35.5mm" classPhoto={classPhotos[5]}/>
        <ClassPhotoCard width="53.2mm" height="35.5mm" classPhoto={classPhotos[6]}/>
        <ClassPhotoCard width="53.2mm" height="35.5mm" classPhoto={classPhotos[7]}/>
        <ClassPhotoCard width="53.2mm" height="35.5mm" classPhoto={classPhotos[8]}/>
        <ClassPhotoCard width="53.2mm" height="35.5mm" classPhoto={classPhotos[9]}/>
    </div>
    </>
  )
}

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

const LongClassLeftGrid = ({ teachers, text, classPhotos, textStyle }: {teachers: Teacher[], text: string, classPhotos: ClassPhoto[], textStyle: object}) => {
  return (
    <>
      <div className="grid grid-cols-2 largeClassLeftGrid">
        <div className="left">
          <TextCard text={text} large={true} textStyle={textStyle}/>
          <div className="flex flex-row justify-between w-[119mm]">
            <ClassPhotoCard height='42.23mm' classPhoto={classPhotos[5-teachers.length]}/>
            <ClassPhotoCard height='42.23mm' classPhoto={classPhotos[6-teachers.length]}/>
          </div>
        </div>
        <div className="right">
          {
            teachers.map((teacher, i) => (
              <TeacherCard key={i} teacher={teacher}/>
            ))
          }
          {
            teachers.length < 3 && <ClassPhotoCard height='42.23mm' classPhoto={classPhotos[0]}/>
          }
          {
            <>
              <ClassPhotoCard height='27mm' classPhoto={classPhotos[3-teachers.length]}/>
              <ClassPhotoCard height='27mm' classPhoto={classPhotos[4-teachers.length]}/>
            </>
          }
        </div>
      </div>
    </>
  )
}

export { LongClassLeftGrid }

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

export { ClassTopLeftGrid }

const ClassBottomLeftGrid = ({ classPhotos, teachers }: {classPhotos: ClassPhoto[], teachers: Teacher[]}) => {
  if (teachers.length === 1) {
    return <ClassBottomLeftGrid teachers={[]} classPhotos={classPhotos.slice(1)}/>
  }
  
    return (
    <div className="grid__class">
      { classPhotos.slice(0,7).map((classPhoto: any, i: number) => {
        if (i === 2) return;
        if (i === 3) return (
          <ClassPhotoDoubleCard key={i}>
            <ClassPhotoCard height={teachers.length > 0 ? '16mm' : '23mm'} classPhoto={classPhotos[2]}/>
            <ClassPhotoCard height='23mm' classPhoto={classPhotos[3]}/>
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
  if (!text) {
    return (
      <PhotoClassPosterRightGrid classPhotos={classPhotos} poster={poster}/>
    )
  }
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
      { classPhotos.length > 7 && <div className="flex flex-col">
        <ClassPhotoCard height='23.2mm' width='53.5mm' classPhoto={classPhotos[5]} />
        <ClassPhotoCard height='23.2mm' width='53.5mm' classPhoto={classPhotos[6]} />
        <ClassPhotoCard height='23.2mm' width='53.5mm' classPhoto={classPhotos[7]} />
      </div> }
      { classPhotos.length <= 7 && <div className="flex flex-col">
        <ClassPhotoCard height='41.6mm' width='53.5mm' classPhoto={classPhotos[5]} />
        <ClassPhotoCard height='41.6mm' width='53.5mm' classPhoto={classPhotos[6]} />
      </div> }

    </div>
  )
}

const LongClassRightGrid = ({ 
  question,
  text,
  classPhotos,
  poster,
  tableTextStyle
}: {question: string, text: any, classPhotos: ClassPhoto[], poster: string, tableTextStyle: object}) => {
  const height = poster ? '22.5mm' : '50mm';
  const width = poster ? '82mm' : '82mm';

  return (
    <>
      <div className="posterGrid">
        <LongTableTextCard question={question} text={text} style={tableTextStyle}/>
        <div className="column">
          { poster && <PosterCard image={poster}/> }
          <ClassPhotoCard height={height} width={width} classPhoto={classPhotos[0]} />
          <ClassPhotoCard height={height} width={width} classPhoto={classPhotos[1]} />
          <ClassPhotoCard height={height} width={width} classPhoto={classPhotos[2]} />
          <ClassPhotoCard height={height} width={width} classPhoto={classPhotos[3]} />
        </div>
      </div>
    </>
  )
}

export { LongClassRightGrid }

const PhotoClassRightGrid = (props: any) => {
  const width = '100%';
  const height = '41.65mm';
  
  return (
    <div className="grid grid-cols-3 gap-x-[5mm] w-full relative top-[55mm]">
      { props.classPhotos.map((photo: any, i: number) => {
        if (i < props.classPhotos.length - 1) return <ClassPhotoCard height={height} width={width} key={i} classPhoto={photo}/>
        else return <ClassPhotoCard className='col-span-2' height={height} width={width} key={i} classPhoto={photo}/>
      })}
    </div>
  );
};

export { PhotoClassRightGrid }

const PhotoClassPosterRightGrid = ({ 
  classPhotos,
  poster,
  pagePhotoAllocations
}: {
  question: string,
  text: any,
  classPhotos: ClassPhoto[],
  poster: string,
  tableTextStyle: object,
  pagePhotoAllocations: number
}) => {
  return (
    <div className="relative top-[12mm]">
      <div className="grid grid-cols-2">
        <div className="left">
          { pagePhotoAllocations === 11 && <>
            <ClassPhotoCard height='43.95mm' width='82mm' classPhoto={classPhotos[0]}/>
            <ClassPhotoCard height='43.95mm' width='82mm' classPhoto={classPhotos[1]}/>
            </>
          }
          {
            pagePhotoAllocations === 12 && <>
              <ClassPhotoCard height='24.7mm' width='82mm' classPhoto={classPhotos[0]}/>
              <ClassPhotoCard height='24.7mm' width='82mm' classPhoto={classPhotos[1]}/>
              <ClassPhotoCard height='24.7mm' width='82mm' classPhoto={classPhotos[2]}/>
            </>
          }
          { classPhotos.length === 14 && <>
            <ClassPhotoCard height='43.95mm' width='82mm' classPhoto={classPhotos[2]}/>
            <ClassPhotoCard height='43.95mm' width='82mm' classPhoto={classPhotos[3]}/>
            </>
          }
        </div>
        <div className="right">
          <PosterCard image={poster}/>
        </div>
      </div>
      {
        classPhotos.length > 14 && <>
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
        </>
      }
      { pagePhotoAllocations <= 14 && <>
          <div className="grid grid-cols-3 gap-x-[5mm] w-full">
            <ClassPhotoCard height='43.95mm' width='100%' classPhoto={classPhotos[3]}/>
            <ClassPhotoCard height='43.95mm' width='100%' classPhoto={classPhotos[4]}/>
            <ClassPhotoCard height='43.95mm' width='100%' classPhoto={classPhotos[5]}/>

            <ClassPhotoCard height='31.8mm' width='100%' classPhoto={classPhotos[6]}/>
            <ClassPhotoCard height='31.8mm' width='100%' classPhoto={classPhotos[7]}/>
            <ClassPhotoCard height='31.8mm' width='100%' classPhoto={classPhotos[8]}/>
            <ClassPhotoCard height='31.8mm' width='100%' classPhoto={classPhotos[9]}/>
            <ClassPhotoCard className={pagePhotoAllocations >= 12 ? '' : 'col-span-2'} height='31.8mm' width='100%' classPhoto={classPhotos[10]}/>
            { pagePhotoAllocations >= 12 &&  <ClassPhotoCard height='31.8mm' width='100%' classPhoto={classPhotos[11]}/> }
          </div>
        </>
      }
      {
        classPhotos.length === 14 && <>
          <div className="grid grid-cols-3 gap-x-[5mm] w-full">
            <ClassPhotoCard height='61.5mm' width='100%' classPhoto={classPhotos[4]}/>
            <div className="flex flex-col">
              <ClassPhotoCard height='23.6mm' width='100%' classPhoto={classPhotos[5]}/>
              <ClassPhotoCard height='23.6mm' width='100%' classPhoto={classPhotos[6]}/>
            </div>
            <div className="flex flex-col">
              <ClassPhotoCard height='23.6mm' width='100%' classPhoto={classPhotos[7]}/>
              <ClassPhotoCard height='23.6mm' width='100%' classPhoto={classPhotos[8]}/>
            </div>
            <ClassPhotoCard height='61.5mm' width='100%' classPhoto={classPhotos[9]}/>
            <div className="flex flex-col">
              <ClassPhotoCard height='23.6mm' width='100%' classPhoto={classPhotos[10]}/>
              <ClassPhotoCard height='23.6mm' width='100%' classPhoto={classPhotos[11]}/>
            </div>
            <div className="flex flex-col">
              <ClassPhotoCard height='23.6mm' width='100%' classPhoto={classPhotos[12]}/>
              <ClassPhotoCard height='23.6mm' width='100%' classPhoto={classPhotos[13]}/>
            </div>
          </div>
        </>
      }
    </div>
  )
}

export { PhotoClassPosterRightGrid }

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

const ClassOf2022Grid = ({students}: {students: any}) => {
  if (students === undefined) return <></>
  return (
    <div className="classOfGrid">
      { students.map((student: any, key: number) => ((
        <ClassOf2022Card student={student} key={key}/>
        )))
      }
    </div>
  )
}

export { ClassOf2022Grid }

const DeputyGrid = ({ staff, text, classPhotos, textStyle, quote }: {staff: any, text: string, classPhotos: any, textStyle: object, quote: string} ) => {
  return (
    <div className="topGrid">
      <DeputyQuote text={quote}/>
      <TextCard text={text} textStyle={{
          
        ...textStyle
      }}/>
      <div className="right">
        <TeacherCard teacher={staff}/>
      </div>
    </div>
  )
}

export { DeputyGrid }