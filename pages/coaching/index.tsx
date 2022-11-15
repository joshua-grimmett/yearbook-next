import type { NextPage } from "next"
import { Photo } from "../../components/ClassPhotoCards"
import { FixedFooter } from "../../components/Footer"
import { PlainHeader } from "../../components/Header"

import Layout from "../../components/Layout"
import Tab from "../../components/Tab"

import coaching from '../../public/other/coaching/data'

const LeftPage = (props: any) => (
  <div className="left">
      <Tab/>

      <div className="relative page__content">
        <PlainHeader
          textStyle={{fontSize: '30pt'}}
          direction='left'
          title={props.title}/>
        
        <div className="grid grid-cols-3 w-[179mm] gap-[5mm] top-[50mm] absolute">
          <span className='text-justify col-span-3 columns-3' style={props.textStyle} dangerouslySetInnerHTML={{__html: props.text}}></span>
          <div className="grid grid-cols-3 col-span-3 gap-[3mm] flex-wrap">
            {props.images.slice(0,9).map((image: any, key: number) => (
              <Photo photo={image} height="45.4mm" width="100%" key={key}/>
            ))}
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
          textStyle={{fontSize: '30pt'}}
          direction='right'
          title={props.title}/>
        
        <div className="grid w-[179mm] gap-[5mm] top-[50mm] absolute">
          <div className="relative">
            <div className="grid grid-cols-2 gap-[3mm]">
              {props.images.slice(9).map((image: any, key: number) => (
                <Photo photo={image} height="52.3mm" width="100%" key={key}/>
              ))}
            </div>
          </div>
        </div>
        
        <FixedFooter direction='right' pageNumber={props.pageNumber}/>
      </div>
  </div>
)

const CouncilTemplate: NextPage = () => {
  return (
    <Layout title={coaching.title}>
      <div className={`page ${coaching.colours}`}>
        <LeftPage {...coaching} pageNumber={coaching.pageNumber}/>
        <RightPage {...coaching} pageNumber={coaching.pageNumber + 1}/>
      </div>
    </Layout>
  )
}

export default CouncilTemplate
