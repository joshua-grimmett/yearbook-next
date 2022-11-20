import type { NextPage } from "next"
import { Photo } from "../../components/ClassPhotoCards"
import { FixedFooter } from "../../components/Footer"
import { PlainHeader } from "../../components/Header"

import Layout from "../../components/Layout"
import Tab from "../../components/Tab"

import debating from '../../public/other/debating/data'

const LeftPage = (props: any) => (
  <div className="left">
      <Tab/>

      <div className="relative page__content">
        <PlainHeader
          textStyle={{fontSize: '30pt'}}
          direction='left'
          title={props.title}/>
        
        <div className="grid grid-cols-3 w-[179mm] gap-[5mm] top-[50mm] absolute">
          <span className='text-justify columns-1' style={{
            fontSize: '9.5pt',
            lineHeight: '11.5pt'
          }} dangerouslySetInnerHTML={{__html: props.text[0]}}></span>
          <div className="grid grid-cols-2 col-span-2 gap-[3mm] flex-wrap">
            {props.images.slice(0,6).map((image: any, key: number) => (
              <Photo photo={image} height="52.4mm" width="100%" key={key}/>
            ))}
            <Photo className='col-span-2' photo={props.images[6]} height="53mm" width="100%"/>
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
        
        <div className="grid grid-cols-3 w-[179mm] gap-[5mm] top-[50mm] absolute">
          <div className="flex flex-col">
            <span className='text-justify columns-1' style={{fontSize: '8.5pt', lineHeight: '12pt', marginBottom: '6.5mm'}} dangerouslySetInnerHTML={{__html: props.text[1]}}></span>
            <div className="flex flex-col gap-[3mm]">
              <Photo photo={props.images[16]} height="85.4mm" width="100%"/>
              <Photo photo={props.images[7]} height="37mm" width="100%"/>
            </div>
          </div>
          <div className="flex flex-col gap-[3mm] flex-wrap">
            {props.images.slice(8,12).map((image: any, key: number) => (
              <Photo photo={image} height="52.4mm" width="100%" key={key}/>
            ))}
          </div>
          <div className="flex flex-col gap-[3mm] flex-wrap">
            {props.images.slice(12,16).map((image: any, key: number) => (
              <Photo photo={image} height="52.4mm" width="100%" key={key}/>
            ))}
          </div>
        </div>
        
        <FixedFooter direction='right' pageNumber={props.pageNumber}/>
      </div>
  </div>
)

const CouncilTemplate: NextPage = () => {
  return (
    <Layout title={debating.title}>
      <div className={`page ${debating.colours}`}>
        <LeftPage {...debating}/>
        <RightPage {...debating} pageNumber={debating.pageNumber + 1}/>
      </div>
    </Layout>
  )
}

export default CouncilTemplate
