import type { NextPage } from 'next'
import { Photo } from '../../components/ClassPhotoCards'
import { FixedFooter } from '../../components/Footer'
import { PlainHeader } from '../../components/Header'

import Layout from '../../components/Layout'
import Tab from '../../components/Tab'

import data from '../../public/other/sport/4/data'

const LeftPage = (props: any) => (
  <div className={props.direction}>
      <Tab/>
      <div className="relative page__content">
        <PlainHeader
          textStyle={{fontSize: '30pt'}}
          direction={props.direction}
          title={props.title}/>  
        
        <div className="grid grid-cols-3 w-[179mm] gap-[3mm] top-[50mm] absolute">
          <span className='text-justify' style={props.textStyle} dangerouslySetInnerHTML={{__html: props.text}}></span>
          <div className='grid grid-cols-2 col-span-2 gap-[3mm]'>
            {props.images.slice(0,6).map((image: any, key: number) => (
              <Photo photo={image} height="52.5mm" width="100%" key={key}/>
            ))}
            <Photo className="col-span-2" photo={props.images[6]} height="52.5mm" width="100%"/>
          </div>
        </div>

        <FixedFooter direction={props.direction} pageNumber={props.pageNumber}/>
      </div>

  </div>
)

const RightPage = (props: any) => (
  <div className={props.direction}>
      <Tab/>
      <div className="relative page__content">
        <PlainHeader 
          textStyle={{fontSize: '30pt'}} 
          direction={props.direction}
          title={props.title}/>
        
        <div className="grid w-[179mm] gap-[3mm] top-[50mm] absolute">
          <div className="relative">
            <div className="grid grid-cols-3 gap-[3mm]">
              {props.images.slice(7).map((image: any, key: number) => (
                <Photo photo={image} height="71.15mm" width="100%" key={key}/>
              ))}
            </div>
          </div>
        </div>
        
        <FixedFooter direction={props.direction} pageNumber={props.pageNumber}/>
      </div>
  </div>
)

const SportTemplate: NextPage = () => {
  return (
    <Layout title={data.title}>
      <div className={`page ${data.colours}`}>
        <LeftPage {...data}/>
        <RightPage
          {...data}
          pageNumber={data.pageNumber + 1}
          direction="right"/>
      </div>
    </Layout>
  )
}

export default SportTemplate
