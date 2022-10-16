
const ClassPhotoCard = ({ classPhoto, height, width }: { classPhoto: ClassPhoto, height?: string, width?: string }) => {
  return (
    <div className={`card card__class-photo`}>
      <span className="tag"></span>
      <div className="card__inner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          style={{
            objectPosition: `${classPhoto.left ? classPhoto.left : 'center'} ${classPhoto.top ? classPhoto.top : '0mm'} !important`,
            height: height ? height : '',
            width: width ? width : ''
          }} 
          src={classPhoto.image} alt={classPhoto.caption} />
        <span className='card__caption'>{classPhoto.caption}</span>
      </div>
    </div>
  )
}

export default ClassPhotoCard

const ClassPhotoDoubleCard = ({ children }: { children: any }) => {
  return (
    <div className="card__class-photo--double">
      {children}
    </div>
  )
}

export { ClassPhotoDoubleCard }

export type ClassPhoto = {
  image: string
  caption: string
  top?: string,
  left?: string
}