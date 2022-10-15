
const ClassPhotoCard = ({ classPhoto, teacherHeight }: { classPhoto: ClassPhoto, teacherHeight?: boolean }) => {
  return (
    <div className={`card card__class-photo ${teacherHeight ? 'card__teacher-height' : ''}`}>
      <span className="tag"></span>
      <div className="card__inner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          style={{objectPosition: `center ${classPhoto.top ? classPhoto.top : '0mm'} !important`}} 
          src={classPhoto.image} alt={classPhoto.caption} />
        <span className='card__caption'>{classPhoto.caption}</span>
      </div>
    </div>
  )
}

export default ClassPhotoCard

const ClassPhotoDoubleCard = ({ classPhotos }: { classPhotos: ClassPhoto[] }) => {
  return (
    <div className="card__class-photo--double">
      <ClassPhotoCard classPhoto={classPhotos[0]} />
      <ClassPhotoCard classPhoto={classPhotos[1]} />
    </div>
  )
}

export { ClassPhotoDoubleCard }

export type ClassPhoto = {
  image: string
  caption: string
  top?: string
}