
const PlainStaffCard = ({ staff }: { staff: any }) => (
  <div className="card card__staff--plain">
    <span>{staff.name}</span>
    <div className="card__inner">
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img src={staff.image} alt={staff.name}/>
    </div>
  </div>
)

export default PlainStaffCard