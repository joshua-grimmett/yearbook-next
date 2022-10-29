import useSiteMetadata from "./SiteMetadata"
import { Direction } from "./Page"

const Footer = ({ pageNumber, direction }: { pageNumber: number, direction: Direction }) => {
    const {footerText} = useSiteMetadata();
    return (
        <div className={`footer footer__${direction}`}>
            <div className="footer__inner">
                <div className="footer__inner-pageNumber">
                    <span>{pageNumber}</span>
                </div>
                <div className="footer__inner-text">
                    <span dangerouslySetInnerHTML={{__html: footerText}}/>
                </div>
            </div>
        </div>
    )
}

export default Footer

const FixedFooter = ({ pageNumber, direction }: { pageNumber: number, direction: Direction }) => {
    const {footerText} = useSiteMetadata();
    return (
        <div className={`fixed_footer footer footer__${direction}`}>
            <div className="footer__inner">
                <div className="footer__inner-pageNumber">
                    <span>{pageNumber}</span>
                </div>
                <div className="footer__inner-text">
                    <span dangerouslySetInnerHTML={{__html: footerText}}/>
                </div>
            </div>
        </div>
    )
}

export { FixedFooter }