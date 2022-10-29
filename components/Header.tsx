import { Direction } from "./Page"

const Header = ({ title, direction }: {title?: string, direction?: Direction }) => {
  return (
    <div className="page__header">
      <div className="page__header--title">
        <span>{title}</span>
      </div>
    </div>
  )
}

export default Header

const PlainHeader = ({ title, direction }: {title?: string, direction?: Direction }) => {
  return (
    <div className="page__header__plain">
      <div className="page__header__plain--title">
        <span>{title}</span>
      </div>
    </div>
  )
}

export { PlainHeader }