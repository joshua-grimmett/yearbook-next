import type { NextPage } from "next"
import { Photo } from "../../components/ClassPhotoCards"
import { FixedFooter } from "../../components/Footer"
import { PlainHeader } from "../../components/Header"

import Layout from "../../components/Layout"
import Tab from "../../components/Tab"
import Table from "../../components/Tables"

import chess from '../../public/other/chess/data'

const LeftPage = (props: any) => (
  <div className="left">
      <Tab/>

      <div className="relative page__content">
        <PlainHeader textStyle={{
          fontSize: '21pt'
        }} imageInHeader={false} direction='left' title={props.title}/>
        
        <div className="grid w-[179mm] gap-[5mm] top-[50mm] absolute">
          <div className="grid grid-cols-2 gap-[3mm]">
            <span className='text-justify longBreak' style={props.textStyle} dangerouslySetInnerHTML={{__html: props.text[0]}}></span>
            <div>
              <Table textStyle={props.textStyle} headers={props.tables[0].headers} rows={props.tables[0].rows}/>
              <Table textStyle={props.textStyle} headers={props.tables[1].headers} rows={props.tables[1].rows}/>
            </div>
            <Photo className="col-span-2" photo={props.images[6]}/>
            <span className='text-justify longBreak col-span-2 columns-2' style={props.textStyle} dangerouslySetInnerHTML={{__html: props.text[1]}}></span>
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
          <div className="relative">
            <div className="grid grid-cols-2 gap-[3mm] mt-[3mm]">
              <Photo photo={props.images[0]} width="100mm" height="70.6mm"/>
              <Photo photo={props.images[1]} width="100mm" height="70.6mm"/>
              <Photo photo={props.images[2]} width="100mm" height="70.6mm"/>
              <Photo photo={props.images[3]} width="100mm" height="70.6mm"/>
              <Photo photo={props.images[4]} width="100mm" height="70.6mm"/>
              <Photo photo={props.images[5]} width="100mm" height="70.6mm"/>
            </div>
          </div>
        </div>
        
        <FixedFooter direction='right' pageNumber={props.pageNumber}/>
      </div>
  </div>
)

const CouncilTemplate: NextPage = () => {
  return (
    <Layout title={chess.title}>
      <div className={`page ${chess.colours}`}>
        <LeftPage {...chess}/>
        <RightPage {...chess} pageNumber={chess.pageNumber + 1}/>
      </div>
    </Layout>
  )
}

export default CouncilTemplate
