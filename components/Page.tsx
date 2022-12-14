import Header, { PlainHeader } from './Header';
import Footer, { FixedFooter } from './Footer';

import type { ClassPhoto } from './ClassPhotoCards';
import type { Teacher } from './TeacherCard';
import { ClassLeftGrid, ClassRightGrid, LargeClassLeftGrid, PhotoClassRightGrid, PhotoClassLeftGrid, LongClassLeftGrid, LongClassRightGrid, DeputyGrid, PhotoClassPosterRightGrid } from './ClassGrids';
import Tab from './Tab';
import { SERVER_PROPS_ID } from 'next/dist/shared/lib/constants';

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
       <LargeLeftPage
        pageNumber={props.pageNumbers[0]} 
        pagePhotoAllocations={props.pagePhotoAllocations[0]}
        {...props}/>
      <LargeRightPage
        pageNumber={props.pageNumbers[1]}
        previousPagePhotoAllocations={props.pagePhotoAllocations[0]}
        classPhotos={props.classPhotos.slice(props.pagePhotoAllocations[0])}
        {...props}
        pagePhotoAllocations={props.pagePhotoAllocations[1]}/>
    </div>
  )
}

export { LargeDoublePage }


const LongDoublePage = (props: any) => {
  return (
    <div className={`page ${props.className}`}>
      <LongLeftPage
        pageNumber={props.pageNumbers[0]} 
        pagePhotoAllocations={props.pagePhotoAllocations[0]}
        {...props}/>
      <LongRightPage
        pageNumber={props.pageNumbers[1]}
        previousPagePhotoAllocations={props.pagePhotoAllocations[0]}
        classPhotos={props.classPhotos.slice(props.pagePhotoAllocations[0])}
        pagePhotoAllocations={props.pagePhotoAllocations[1]}
        {...props}/>
    </div>
  )
}

export { LongDoublePage }

const PhotoDoublePage = (props: any) => {
  const previousPhotos = props.previousPagePhotoAllocations.reduce((a: number, b: number) => a + b)
  const classPhotos = props.classPhotos.slice(previousPhotos);
  return (
    <div className={`page ${props.className}`}>
      <PhotoLeftPage 
        pageNumber={props.pageNumbers[0]}
        {...props}
        classPhotos={classPhotos}/>
      <PhotoRightPage
        pageNumber={props.pageNumbers[1]}
        classPhotos={classPhotos.slice(props.pagePhotoAllocations[0])}
        poster={props.poster}
        pagePhotoAllocations={props.pagePhotoAllocations[1]}/>
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
  tableTextStyle,
  pagePhotoAllocations
}: {
  title: string,
  pageNumber: number,
  classPhotos: ClassPhoto[],
  tableText: string,
  question: string,
  poster: string,
  teachers: Teacher[],
  tableTextStyle: object,
  pagePhotoAllocations: number
}) => {
  return (
    <div className="right">
      <div className="page__content">
        { tableText && <ClassRightGrid
          question={question}
          text={tableText}
          tableTextStyle={tableTextStyle}
          classPhotos={classPhotos.slice(teachers.length > 1 ? 5 : 6)}
          poster={poster}/>
        }
        { !tableText && <PhotoClassPosterRightGrid
          pagePhotoAllocations={pagePhotoAllocations}
          classPhotos={classPhotos.slice(teachers.length > 1 ? 5 : 6)}
          poster={poster}/>
        }
      </div>
      <Footer direction="right" pageNumber={pageNumber}/>
    </div>
  )
}

export { LargeRightPage }

const PhotoLeftPage = ({
  title, pageNumber, classPhotos
}: {
  title: string,
  pageNumber: number,
  classPhotos: ClassPhoto[]
}) => {
  return (
    <div className="left">
      <div className="page__content">
        <Header direction="left" title={title}/>
        <PhotoClassLeftGrid classPhotos={classPhotos}/>
      </div>
      <Footer direction="left" pageNumber={pageNumber}/>
    </div>
  )
}

export { PhotoLeftPage }

const PhotoRightPage = ({
  pageNumber,
  classPhotos,
  poster,
  pagePhotoAllocations
}: {
  pageNumber: number,
  classPhotos: ClassPhoto[],
  poster: string,
  pagePhotoAllocations: number
}) => {
  return (
    <div className="right">
      <div className="page__content">
        { !poster && <PhotoClassRightGrid classPhotos={classPhotos} poster={poster}/> }
        { poster && 
          <PhotoClassPosterRightGrid
            classPhotos={classPhotos}
            poster={poster}
            pagePhotoAllocations={pagePhotoAllocations}/>
        }
      </div>
      <Footer direction="right" pageNumber={pageNumber}/>
    </div>
  )
}

export { PhotoRightPage }

const LongLeftPage = ({
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
        <LongClassLeftGrid teachers={teachers} text={text} classPhotos={classPhotos} textStyle={textStyle}/>
      </div>
      <Footer direction="left" pageNumber={pageNumber}/>
    </div>
  )
}

const LongRightPage = ({
  pageNumber,
  classPhotos,
  tableText,
  question,
  poster,
  teachers,
  tableTextStyle,
  pagePhotoAllocations,
  previousPagePhotoAllocations
}: { 
  title: string,
  pageNumber: number,
  classPhotos: ClassPhoto[],
  tableText: string,
  question: string,
  poster: string,
  teachers: Teacher[],
  tableTextStyle: object,
  pagePhotoAllocations: number[],
  previousPagePhotoAllocations: number[]
}) => {
  classPhotos = classPhotos.slice(pagePhotoAllocations[0]-teachers.length-1);
  return (
    <div className="right">
      <div className="page__content">
        <LongClassRightGrid
          question={question}
          text={tableText}
          tableTextStyle={tableTextStyle}
          classPhotos={classPhotos.slice(teachers.length+1)}
          poster={poster}/>
      </div>
      <Footer direction="right" pageNumber={pageNumber}/>
    </div>
  )
}

const PlainPage = ({ direction, title, children, pageNumber }: {direction: Direction, title: string, children?: any, pageNumber: number}) => {
  return (
    <div className={direction}>
      <Tab/>
      <div className="relative page__content">
        <PlainHeader direction={direction} title={title}/>
        {children}
        <FixedFooter direction={direction} pageNumber={pageNumber}/>
      </div>
    </div>
  )
}

export { PlainPage }

const PlainDoublePage = ({ children }: { children: any }) => (
  <div className="page plain">
    {children}
  </div>
)

export { PlainDoublePage }

const DeputyPage = (props: any) => {
  return (
    <div className={`page ${props.className}`}>
      <DeputyLeftPage pageNumber={props.pageNumbers[0]} {...props}/>
      {/* <NormalRightPage pageNumber={props.pageNumbers[1]} {...props}/> */}
    </div>
  )
}

export { DeputyPage }

const DeputyLeftPage = ({
  title, pageNumber, staff, text, images, textStyle, quote
}: { 
  title: string,
  pageNumber: number,
  staff: any,
  text: string,
  images: any,
  textStyle: object,
  quote: string
}) => {
  return (
    <div className="left">
      <div className="page__content">
        <PlainHeader imageInHeader={true} direction="left" title={title}/>
        <DeputyGrid staff={staff} text={text} textStyle={textStyle} quote={quote}/>
      </div>
      <Footer direction="left" pageNumber={pageNumber}/>
    </div>
  )
}

export { DeputyLeftPage }