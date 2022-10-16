
const PosterCard = ({ image }: { image: string }) => (
  <div className="card card__poster">
    <div className="card__inner">
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img src={image} alt={''}/>
    </div>
  </div>
)

export default PosterCard