import type { NextPage } from "next"
import { Photo } from "../../components/ClassPhotoCards"
import { FixedFooter } from "../../components/Footer"
import { PlainHeader } from "../../components/Header"

import Layout from "../../components/Layout"
import Tab from "../../components/Tab"

import bullang from '../../public/other/bullang/data'

const LeftPage = (props: any) => (
  <div className="left">
      <Tab/>

      <div className="relative page__content">
        <PlainHeader
          textStyle={{fontSize: '21pt'}}
          direction='left'
          title={props.title}/>
        
        <div className="grid w-[179mm] gap-[5mm] top-[50mm] absolute">
          <span className='text-justify longBreak columns-3' style={props.textStyle} dangerouslySetInnerHTML={{__html: props.text}}></span>
          <div className="grid grid-cols-3 gap-[3mm]">
            {props.images.slice(0,5).map((image: any, key: number) => (
              <>
                { (key !== 0) && <Photo photo={image} height="76mm" width="65mm" key={key}/> }
                { (key == 0) && <Photo className="col-span-2" photo={image} height="76mm" width="128mm" key={key}/> }
              </>
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
          textStyle={{fontSize: '21pt'}}
          direction='right'
          title={props.title}/>
        
        <div className="grid w-[179mm] gap-[5mm] top-[50mm] absolute">
          <div className="relative">
            <div className="grid grid-cols-3 gap-[3mm]">
              {props.images.slice(6).map((image: any, key: number) => (
                <Photo photo={image} height="53mm" width="65mm" key={key}/>
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
    <Layout title={bullang.title}>
      <div className={`page ${bullang.colours}`}>
        <LeftPage {...bullang}/>
        <RightPage {...bullang}/>
      </div>
    </Layout>
  )
}

export default CouncilTemplate
