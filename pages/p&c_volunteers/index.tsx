import type { NextPage } from "next"
import { Photo } from "../../components/ClassPhotoCards"
import { FixedFooter } from "../../components/Footer"
import { PlainHeader } from "../../components/Header"

import Layout from "../../components/Layout"
import Tab from "../../components/Tab"

import pnc from '../../public/other/p&c/data'
import volunteers from '../../public/other/volunteers/data'

const LeftPage = (props: any) => (
  <div className="left">
      <Tab/>

      <div className="relative page__content">
        <PlainHeader textStyle={{
          fontSize: '21pt'
        }} imageInHeader={false} direction='left' title={props.title}/>
        
        <div className="grid w-[179mm] gap-[5mm] top-[50mm] absolute">
          <span className='text-justify longBreak columns-3' style={props.textStyle} dangerouslySetInnerHTML={{__html: props.text}}></span>
          <div className="relative">
            <div className="grid grid-cols-3 gap-[3mm] mt-[3mm] relative">
              <Photo className="col-span-2" photo={props.images[0]} width="100mm" height="38.31mm"/>
              <Photo photo={props.images[1]} width="100mm" height="38.31mm"/>
              <Photo photo={props.images[2]} width="100mm" height="64.31mm"/>
              <Photo photo={props.images[3]} width="100mm" height="64.31mm"/>
              <Photo photo={props.images[4]} width="100mm" height="64.31mm"/>
            </div>
          </div>
        </div>

        <FixedFooter direction='left' pageNumber={props.pageNumber}/>
      </div>
  </div>
)

const RightPage = (props: any) => (
  <div className="right">
      <Tab/>
      <div className="relative page__content">
        <PlainHeader 
          textStyle={{fontSize: '21pt'}}
          direction='right'
          title={props.title}/>
        
        <div className="grid w-[179mm] gap-[5mm] top-[50mm] absolute">
          <span className='text-justify longBreak columns-3' style={props.textStyle} dangerouslySetInnerHTML={{__html: props.text}}></span>
          <div className="relative">
            <div className="grid grid-cols-2 gap-[3mm] mt-[3mm]">
              <Photo photo={props.images[0]} width="100mm" height="50mm"/>
              <Photo photo={props.images[1]} width="100mm" height="50mm"/>
            </div>
            <div className="grid grid-cols-4 gap-[3mm] mt-[3mm]">
              <Photo photo={props.images[3]} width="100mm" height="107.5mm"/>
              <Photo photo={props.images[6]} width="100mm" height="107.5mm"/>
              <div className="flex flex-col col-span-2 gap-[3mm]">
                <Photo photo={props.images[2]} width="100mm" height="33.8mm"/>
                <Photo photo={props.images[4]} width="100mm" height="33.8mm"/>
                <Photo photo={props.images[5]} width="100mm" height="33.8mm"/>
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
    <Layout title={`${pnc.title} and ${volunteers.title}`}>
      <div className={`page ${pnc.colours}`}>
        <LeftPage {...pnc}/>
        <RightPage {...volunteers}/>
      </div>
    </Layout>
  )
}

export default CouncilTemplate
