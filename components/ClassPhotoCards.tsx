
const ClassPhotoCard = ({ classPhoto, height, width, ...props }: { classPhoto: ClassPhoto, height?: string, width?: string, props: any }) => {
  const style: any = {
    objectPosition: `${classPhoto.left ? classPhoto.left : 'center'} ${classPhoto.top ? classPhoto.top : '0mm'} !important`
  }
  if (width) style['width'] = width;
  if (height) style['height'] = height;

  console.log(style);

  return (
    <div className={`card card__class-photo ${props.className}`}>
      <span className="tag"></span>
      <div className="card__inner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          style={{
            objectPosition: `${classPhoto.left ? classPhoto.left : 'center'} ${classPhoto.top ? classPhoto.top : '0mm'}`,
            width: width ? width : '',
            height: height ? height : ''
          }} 
          src={classPhoto.image} alt={classPhoto.caption} />
        {classPhoto.caption && <span className='card__caption'>{classPhoto.caption}</span> }
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

const Photo = (props: any) => (
  <img
    className={`photo ${props.className}`}
    style={{
      objectPosition: `${props.photo.left ? props.photo.left : 'center'} ${props.photo.top ? props.photo.top : '0mm'} !important`,
      height: props.photo.height ?? props.height,
      width: props.photo.width ?? props.width
    }} 
    src={props.photo.image}/>
)

export { Photo }