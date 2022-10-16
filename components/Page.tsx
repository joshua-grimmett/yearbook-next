import Header from './Header';
import Footer from './Footer';

import type { ClassPhoto } from './ClassPhotoCards';
import type { Teacher } from './TeacherCard';
import { ClassLeftGrid, ClassRightGrid } from './ClassGrids';

const DoublePage = (props: any) => {
  console.log(props.className)
  return (
    <div className={`page ${props.className}`}>
      <LeftPage pageNumber={props.pageNumbers[0]} {...props}/>
      <RightPage pageNumber={props.pageNumbers[1]} {...props}/>
    </div>
  )
}

const LeftPage = ({
  title, pageNumber, teachers, text, classPhotos, textStyle
}: { 
  title: string,
  pageNumber: number,
  teachers: Teacher[],
  text: string,
  classPhotos: ClassPhoto[],
  textStyle: object
}) => {
  return (
    <div className="left">
      <div className="page__content">
        <Header direction="left" title={title}/>
        <ClassLeftGrid teachers={teachers} text={text} classPhotos={classPhotos} textStyle={textStyle}/>
      </div>
      <Footer direction="left" pageNumber={pageNumber}/>
    </div>
  )
}

const RightPage = ({
  pageNumber,
  classPhotos,
  tableText,
  question,
  poster,
  teachers,
  tableTextStyle
}: { 
  title: string,
  pageNumber: number,
  classPhotos: ClassPhoto[],
  tableText: string,
  question: string,
  poster: string,
  teachers: Teacher[],
  tableTextStyle: object
}) => {
  return (
    <div className="right">
      <div className="page__content">
        <ClassRightGrid
          question={question}
          text={tableText}
          tableTextStyle={tableTextStyle}
          classPhotos={classPhotos.slice(teachers.length > 1 ? 7 : 8)}
          poster={poster}/>
      </div>
      <Footer direction="right" pageNumber={pageNumber}/>
    </div>
  )
}

export default DoublePage

export type Direction = 'left' | 'right';