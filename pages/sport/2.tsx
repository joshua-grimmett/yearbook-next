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
          <span className='text-justify col-span-3 columns-3' style={props.textStyle} dangerouslySetInnerHTML={{__html: props.text[0]}}></span>
          <div className="flex flex-col items-center col-span-2 gap-[1mm] min-w-[88mm]">
            <h1>Representative Sport Honour Board</h1>
            <Photo photo={props.images[27]} height="119mm" width="117mm"/>
          </div>
          <span className='text-justify col-span-1 flex-col justify-center flex' style={props.textStyle} dangerouslySetInnerHTML={{__html: props.text[1]}}></span>
            
          {/* <div className="flex flex-col gap-[3mm]">
            <Photo photo={props.images[10]} className="absolute bottom-0" height="41.2mm" width="32.4%"/>
          </div> */}
          <div className="grid grid-cols-3 col-span-3 gap-[3mm] flex-wrap">
            {props.images.slice(0,6).map((image: any, key: number) => (
              <Photo photo={image} height="30.2mm" width="100%" key={key}/>
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
          { props.images.slice(6, 27).map((image: any, key: number) => (
            <Photo photo={image} key={key} width="100%" height="34.1mm"/>
          )) }
          <div className="flex flex-row flex-wrap col-span-3">
            <div className="flex flex-col w-full items-center">
              <h1>Results</h1>
              <Photo photo={props.images[28]} height="28mm" width="112mm"/>
            </div>
          </div>
          {/* <Photo photo={props.images[26]} className="col-span-2" height="26mm" width="100%"/> */}
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
