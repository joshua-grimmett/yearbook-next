import type { NextPage } from "next"
import { Photo } from "../../components/ClassPhotoCards"
import { FixedFooter } from "../../components/Footer"
import { PlainHeader } from "../../components/Header"

import Layout from "../../components/Layout"
import Tab from "../../components/Tab"

import abPatterson from '../../public/other/ab_patterson/data'

const LeftPage = (props: any) => (
  <div className="left">
      <Tab/>

      <div className="relative page__content">
        <PlainHeader
          textStyle={{fontSize: '30pt'}}
          direction='left'
          title={"What Goes Here?"}/>

        <FixedFooter direction='left' pageNumber={props.pageNumber}/>
      </div>
  </div>
)

const RightPage = (props: any) => (
  <div className="right">
      <Tab/>
      <div className="relative page__content">
        <PlainHeader 
          textStyle={{fontSize: '20pt'}}
          direction='right'
          imageInHeader={true}
          title={props.title}/>
        
        <div className="grid w-[179mm] gap-[5mm] top-[50mm] absolute">
          <div className="relative">
            <div className="grid grid-cols-3 gap-[3mm]">
              <span className='text-justify' style={props.textStyle} dangerouslySetInnerHTML={{__html: props.text}}></span>
              <div className="col-span-2 grid grid-cols-2 gap-[3mm] h-[200mm]">
                {props.images.map((image: any, key: number) => (
                  <Photo photo={image} height="52.5mm" width="100%" key={key}/>
                ))}
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
    <Layout title={abPatterson.title}>
      <div className={`page ${abPatterson.colours}`}>
        <LeftPage {...abPatterson}/>
        <RightPage {...abPatterson}/>
      </div>
    </Layout>
  )
}

export default CouncilTemplate
