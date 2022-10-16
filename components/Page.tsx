import Header from './Header';
import Footer from './Footer';

import type { ClassPhoto } from './ClassPhotoCards';
import type { Teacher } from './TeacherCard';
import { ClassLeftGrid, ClassRightGrid, LargeClassLeftGrid } from './ClassGrids';

const DoublePage = (props: any) => {
  return (
    <div className={`page ${props.className}`}>
      <NormalLeftPage pageNumber={props.pageNumbers[0]} {...props}/>
      <NormalRightPage pageNumber={props.pageNumbers[1]} {...props}/>
    </div>
  )
}

export default DoublePage


const LargeDoublePage = (props: any) => {
  return (
    <div className={`page ${props.className}`}>
      <LargeLeftPage pageNumber={props.pageNumbers[0]} {...props}/>
      <NormalLeftPage pageNumber={props.pageNumbers[1]} {...props}/>
    </div>
  )
}

export { LargeDoublePage }


const PhotoDoublePage = (props: any) => {
  return (
    <div className={`page ${props.className}`}>
      <LargeLeftPage pageNumber={props.pageNumbers[2]} {...props}/>
      <LargeRightPage pageNumber={props.pageNumbers[3]} {...props}/>
    </div>
  )
}

export { PhotoDoublePage }


const NormalLeftPage = ({
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


const NormalRightPage = ({
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

export type Direction = 'left' | 'right';

const LargeLeftPage = ({
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
        <LargeClassLeftGrid teachers={teachers} text={text} classPhotos={classPhotos} textStyle={textStyle}/>
      </div>
      <Footer direction="left" pageNumber={pageNumber}/>
    </div>
  )
}

export { LargeLeftPage }

const LargeRightPage = ({
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