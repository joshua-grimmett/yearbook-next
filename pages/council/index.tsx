import type { NextPage } from "next"
import { Photo } from "../../components/ClassPhotoCards"
import DeputyQuote from "../../components/DeputyQuote"
import { FixedFooter } from "../../components/Footer"
import { PlainHeader } from "../../components/Header"

import Layout from "../../components/Layout"
import PlainStaffCard from "../../components/PlainStaffCard"

import councilHead from '../../public/other/council_head/data'
import councilEvents from '../../public/other/council_events/data'

const LeftPage = (props: any) => (
  <div className="left">
      <div className="tab">
        <span>2022</span>
      </div>
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
        
        <div className="grid w-[179mm] gap-[5mm] top-[82mm] absolute">
          <span className='text-justify longBreak columns-3' style={props.textStyle} dangerouslySetInnerHTML={{__html: props.text}}></span>
          <div className="relative">
            <div className="grid grid-cols-3 gap-[3mm]">
              <Photo photo={props.images[0]} width="100mm" height="43.6mm"/>
              <Photo photo={props.images[1]} width="100mm" height="43.6mm"/>
              <Photo photo={props.images[2]} width="100mm" height="43.6mm"/>
              <Photo photo={props.images[3]} width="100mm" height="43.6mm"/>
              <Photo photo={props.images[4]} width="100mm" height="43.6mm"/>
              <Photo photo={props.images[5]} width="100mm" height="43.6mm"/>
            </div>
          </div>
        </div>


        <FixedFooter direction='left' pageNumber={props.pageNumber}/>
      </div>
  </div>
)

const RightPage = (props: any) => (
  <div className="right">
      <div className="tab">
        <span>2022</span>
      </div>
      <div className="relative page__content">
        <PlainHeader textStyle={{
          fontSize: '21pt'
        }} imageInHeader={true} direction='right' title={props.title}/>
        
        <div className="grid w-[179mm] gap-[5mm] top-[50mm] absolute">
          <span className='text-justify longBreak columns-3' style={props.textStyle} dangerouslySetInnerHTML={{__html: props.text}}></span>
          <div className="relative">
            <div className="flex flex-row gap-[3mm] mt-[3mm] relative max-w-[179mm]">
              <Photo photo={props.images[8]} width="200mm" height="43.6mm"/>
              <Photo photo={props.images[0]} width="100mm" height="43.6mm"/>
            </div>
            <div className="grid grid-cols-3 gap-[3mm] mt-[3mm] relative">
              <div className="flex flex-col gap-[3mm]">
                <Photo photo={props.images[3]} width="100mm" height="43.6mm"/>
                <Photo photo={props.images[5]} width="100mm" height="43.6mm"/>
                <Photo photo={props.images[6]} width="100mm" height="43.6mm"/>
              </div>
              <div className="flex flex-col gap-[3mm]">
                <Photo photo={props.images[4]} width="100mm" height="43.6mm"/>
                <Photo photo={props.images[7]} width="100mm" height="43.6mm"/>
              </div>
              <div className="flex flex-col gap-[3mm]">
                <Photo photo={props.images[1]} width="100mm" height="43.6mm"/>
                <Photo photo={props.images[2]} width="100mm" height="43.6mm"/>
              </div>
            </div>
          </div>
        </div>
        <FixedFooter direction='right' pageNumber={props.pageNumber}/>
      </div>
  </div>
)

const CouncilTemplate: NextPage = () => {
  return (
    <Layout title={councilHead.title}>
      <div className={`page ${councilHead.colours}`}>
        <LeftPage {...councilHead}/>
        <RightPage {...councilEvents}/>
      </div>
    </Layout>
  )
}

export default CouncilTemplate
