import type { NextPage } from "next"
import { Photo } from "../../components/ClassPhotoCards"
import DeputyQuote from "../../components/DeputyQuote"
import { FixedFooter } from "../../components/Footer"
import { PlainHeader } from "../../components/Header"

import Layout from "../../components/Layout"
import PlainStaffCard from "../../components/PlainStaffCard"

import principal from '../../public/other/principal/data'
import pnc from '../../public/other/p&c_page/data'
import Tab from "../../components/Tab"

const LeftPage = (props: any) => (
  <div className="left">
      <Tab/>
      <div className="relative page__content">
        <PlainHeader textStyle={{
          fontSize: '21pt'
        }} imageInHeader={true} direction='left' title={props.title}/>
        
        <div className="topGrid">
          <DeputyQuote text={props.quote} textStyle={{
            top: '36.7mm'
          }}/>
          <div className="right top-[-11mm]">
            <PlainStaffCard staff={props.staff}/>
          </div>
        </div>
        
        <div className="grid grid-cols-2 w-[179mm] gap-[5mm] top-[82mm] absolute">
          <span className='text-justify longBreak' style={props.textStyle} dangerouslySetInnerHTML={{__html: props.text[0]}}></span>
          <div className="relative">
            <div className="grid gap-[3mm]">
            <span className='text-justify longBreak' style={props.textStyle} dangerouslySetInnerHTML={{__html: props.text[1]}}></span>
              <Photo photo={props.images[0]} width="100mm" height="39.6mm"/>
              <Photo photo={props.images[1]} width="100mm" height="39.6mm"/>
              <Photo photo={props.images[2]} width="100mm" height="39.6mm"/>
            </div>
          </div>
        </div>


        <FixedFooter direction='left' pageNumber={props.pageNumber}/>
      </div>
  </div>
)

const RightPage = (props: any) => (
  <div className={props.direction}>
      <Tab/>
      <div className="relative page__content">
        <PlainHeader textStyle={{
          fontSize: '21pt'
        }} imageInHeader={true} direction={props.direction} title={props.title}/>
        
        <div className="topGrid">
          <div className="relative top-[-11mm]">
            <PlainStaffCard staff={props.staff}/>
          </div>
          <DeputyQuote text={props.quote} textStyle={{
            top: '36.7mm',
            left: '91mm'
          }}/>
        </div>
        
        <div className="grid grid-cols-2 w-[179mm] gap-[5mm] top-[82mm] absolute">
          <span className='text-justify longBreak' style={props.textStyle} dangerouslySetInnerHTML={{__html: props.text[0]}}></span>
          <div className="relative">
            <div className="grid gap-[3mm]">
            <span className='text-justify longBreak' style={props.textStyle} dangerouslySetInnerHTML={{__html: props.text[1]}}></span>
              <Photo photo={props.images[0]} width="100mm" height="39.6mm"/>
              <Photo photo={props.images[1]} width="100mm" height="39.6mm"/>
              {/* <Photo photo={props.images[2]} width="100mm" height="39.6mm"/> */}
            </div>
          </div>
        </div>


        <FixedFooter direction={props.direction} pageNumber={props.pageNumber}/>
      </div>
  </div>
)

const CouncilTemplate: NextPage = () => {
  return (
    <Layout title={principal.title}>
      <div className={`page ${principal.colours}`}>
        <LeftPage {...principal}/>
        <RightPage {...pnc} direction={'right'}/>
      </div>
    </Layout>
  )
}

export default CouncilTemplate
