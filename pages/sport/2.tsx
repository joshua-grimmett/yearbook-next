import type { NextPage } from 'next'
import { Photo } from '../../components/ClassPhotoCards'
import { FixedFooter } from '../../components/Footer'
import { PlainHeader } from '../../components/Header'

import Layout from '../../components/Layout'
import Tab from '../../components/Tab'

import data from '../../public/other/sport/2/data'

const LeftPage = (props: any) => (
  <div className={props.direction}>
      <Tab/>
      <div className="relative page__content">
        <PlainHeader
          textStyle={{fontSize: '30pt'}}
          direction={props.direction}
          title={props.title}/>  
        
        <div className="grid grid-cols-3 w-[179mm] gap-[3mm] top-[50mm] absolute">
          <div className="flex flex-col gap-[3mm]">
            <span className='text-justify' style={props.textStyle} dangerouslySetInnerHTML={{__html: props.text}}></span>
            <Photo photo={props.images[10]} className="absolute bottom-0" height="41.2mm" width="32.4%"/>
          </div>
          <div className="grid grid-cols-2 col-span-2 gap-[3mm] flex-wrap">
            {props.images.slice(0,10).map((image: any, key: number) => (
              <Photo photo={image} height="41.2mm" width="100%" key={key}/>
            ))}
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
        
        <div className="grid grid-cols-4 w-[179mm] left-[-3.2mm] gap-[3mm] top-[50mm] relative">
          <div className="flex flex-row col-span-4 gap-[3mm]">
            <div className="flex flex-col gap-[1mm] min-w-[88mm] mt-[8mm]">
              <h1>Representative Sport Honour Board</h1>
              <Photo photo={props.images[27]} height="89mm" width="88mm"/>
            </div>
            <div className="grid grid-cols-1 w-full gap-[3mm]">
              <Photo photo={props.images[11]} height="32.9mm" width="100%"/>
              <Photo photo={props.images[12]} height="32.9mm" width="100%"/>
              <Photo photo={props.images[13]} height="32.9mm" width="100%"/>
              {/* <Photo photo={props.images[14]} height="32.9mm" width="100%"/>
              <Photo photo={props.images[15]} height="32.9mm" width="100%"/>
              <Photo photo={props.images[16]} height="32.9mm" width="100%"/> */}
            </div>
          </div>
          { props.images.slice(14, 26).map((image: any, key: number) => (
            <Photo photo={image} key={key} width="100%" height="25mm"/>
          )) }
          <div className="flex flex-row flex-wrap col-span-2">
            <div className="flex flex-col w-full items-center">
              <h1>Results</h1>
              <Photo photo={props.images[28]} height="20mm" width="93%"/>
            </div>
          </div>
          <Photo photo={props.images[26]} className="col-span-2" height="26mm" width="100%"/>
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
