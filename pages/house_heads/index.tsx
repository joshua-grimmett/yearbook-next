import type { NextPage } from "next"
import { Photo } from "../../components/ClassPhotoCards"
import { FixedFooter } from "../../components/Footer"
import { PlainHeader } from "../../components/Header"

import Layout from "../../components/Layout"
import Tab from "../../components/Tab"

import houseHeads from '../../public/other/house_heads/data'

const RightPage = (props: any) => (
  <div className="right">
      <Tab/>

      <div className="relative page__content">
        <PlainHeader
          textStyle={{fontSize: '30pt'}}
          direction='right'
          title={"What Goes Here?"}/>

        <FixedFooter direction='right' pageNumber={props.pageNumber}/>
      </div>
  </div>
)

const House = (props: any) => (
  <div className={`border-[2pt] ${props.boldClass} flex flex-row`}>
    <div className="grid grid-cols-2 items-center gap-[1mm] p-[4mm] w-[54mm]">
      {props.images.map((photo: any, key: number) => (
        <div key={key} className={`flex flex-col items-end`}>
          <h1 className="headingFont text-center font-bold w-full text-black not-italic text-[9pt]" dangerouslySetInnerHTML={{__html: props.names[key].split(' ').join('<br/>')}}></h1>
          <Photo width="30mm" height="25mm" photo={photo}/>
        </div>
      ))}
    </div>
    <div className="flex flex-col items-start p-[4mm]  w-full">
      <div className="flex flex-col">
        <h1 className={`${props.headerClass} mb-[2mm] capitalize`}>{props.name}</h1>
        <span className='text-justify' style={props.textStyle} dangerouslySetInnerHTML={{__html: props.text}}></span>
      </div>
    </div>
  </div>
);

const LeftPage = (props: {
  images: any[],
  text: string[],
  textStyle: any,
  title: string,
  pageNumber: number,
}) => (
  <div className="left">
      <Tab/>
      <div className="relative page__content">
        <PlainHeader
          textStyle={{fontSize: '20pt'}}
          direction='left'
          imageInHeader={true}
          title={props.title}/>
        
        <div className="grid w-[179mm] gap-[5mm] top-[50mm] absolute">
          <House 
            name='foxwell'
            boldClass='bold-foxwell'
            headerClass='text-foxwell'
            text={props.text[0]}
            images={props.images.slice(0,2)}
            names={['Rocca Goodger', 'Ella Gurr']}
            textStyle={props.textStyle} 
            />
          <House 
            name='colman'
            boldClass='bold-colman'
            headerClass='text-colman'
            text={props.text[1]}
            images={props.images.slice(2,4)}
            names={['Memphis Warbin', 'Fellyn Hunt']}
            textStyle={props.textStyle} 
            />
          <House
            name='pedley'
            boldClass='bold-pedley'
            headerClass='text-pedley'
            text={props.text[2]}
            images={[props.images[4]]}
            names={['Papu Purcell']}
            textStyle={props.textStyle}
            />
          <House
            name='signato'
            boldClass='bold-signato'
            headerClass='text-signato'
            text={props.text[3]}
            images={props.images.slice(5)}
            names={['Kayden Yarbrough', 'Mya Yarker']}
            textStyle={props.textStyle}
            />
        </div>
        
        <FixedFooter direction='left' pageNumber={props.pageNumber}/>
      </div>
  </div>
)

const CouncilTemplate: NextPage = () => {
  return (
    <Layout title={houseHeads.title}>
      <div className={`page ${houseHeads.colours}`}>
        <LeftPage {...houseHeads}/>
        <RightPage {...houseHeads}/>
      </div>
    </Layout>
  )
}

export default CouncilTemplate
