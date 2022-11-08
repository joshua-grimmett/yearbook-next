import type { NextPage } from 'next'
import { Photo } from '../../components/ClassPhotoCards'
import { FixedFooter } from '../../components/Footer'
import { PlainHeader } from '../../components/Header'

import Layout from '../../components/Layout'
import Tab from '../../components/Tab'

import data from '../../public/other/sport/3/data'

const LeftPage = (props: any) => (
  <div className={props.direction}>
      <Tab/>
      <div className="relative page__content">
        <PlainHeader
          textStyle={{fontSize: '30pt'}}
          direction={props.direction}
          title={props.title}/>  
        
        <div className="grid grid-cols-3 w-[179mm] gap-[3mm] top-[50mm] absolute">
          <span className='text-justify col-span-3 columns-3' style={props.textStyle} dangerouslySetInnerHTML={{__html: props.text}}></span>
          {props.images.slice(0,9).map((image: any, key: number) => (
            <Photo photo={image} height="39mm" width="100%" key={key}/>
          ))}
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
        
        <div className="grid grid-cols-2 w-[179mm] left-[-3.2mm] gap-[3mm] top-[50mm] relative">
          <div className="flex flex-row col-span-2 gap-[3mm]">
            <div className="flex flex-col gap-[1mm] min-w-[134mm]">
              <Photo photo={props.images[18]} height="68mm" width="134mm"/>
            </div>
            <div className="grid grid-cols-1 w-full gap-[3mm]">
              <Photo photo={props.images[9]} height="32.5mm" width="100%"/>
              <Photo photo={props.images[10]} height="32.5mm" width="100%"/>

            </div>
          </div>
          { props.images.slice(11, 16).map((image: any, key: number) => (
            <Photo photo={image} key={key} width="100%" height="34.7mm"/>
          )) }
          <Photo photo={props.images[16]} width="100%" height="23.7mm"/>
          <Photo photo={props.images[17]} width="100%" height="34.7mm"/>
          <div className="flex flex-row flex-wrap">
            <div className="flex flex-col w-full items-center relative top-[-11mm]">
              <h1>Players of the Year</h1>
              <Photo photo={props.images[19]} height="40mm" width="96mm"/>
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
