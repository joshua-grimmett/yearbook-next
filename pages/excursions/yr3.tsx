import type { NextPage } from 'next'
import { Photo } from '../../components/ClassPhotoCards'
import { FixedFooter } from '../../components/Footer'
import { PlainHeader } from '../../components/Header'

import Layout from '../../components/Layout'

const LeftPage = (props: any) => (
  <div className="left">
      <div className="tab">
        <span>2022</span>
      </div>
      <div className="relative page__content">
        <PlainHeader direction='left' title={props.title}/>
        
        {/* Text */}
        <div className="grid w-[180mm] grid-cols-3 gap-[4mm] top-[50mm] relative">
          <div className='flex flex-col gap-[3mm]'>
            <span className='text-justify longBreak' style={props.textStyle} dangerouslySetInnerHTML={{__html: props.text}}></span>
            <Photo className="absolute bottom-0" width={"60mm"} height={"71.5mm"} photo={props.images[6]}/>
          </div>
          <div className='flex flex-col gap-[3mm]'>
            {props.images.slice(0, 3).map((image: any, key: number) => (
              <Photo width={"60mm"} height={"71.5mm"} key={key} photo={image}/>
            ))}
          </div>
          <div className='flex flex-col gap-[3mm]'>
            {props.images.slice(3, 6).map((image: any, key: number) => (
              <Photo width={"60mm"} height={"71.5mm"} key={key} photo={image}/>
            ))}
          </div>
        </div>
        <FixedFooter direction='left' pageNumber={props.pageNumber}/>
      </div>
  </div>
)

const RightPage = (props: any) => (
  <div className="right">
      <div className="tab">
        <span>2022</span>
      </div>
      <div className="relative page__content">
        <PlainHeader direction='right' title={props.title}/>
        <div className="grid w-[180mm] grid-cols-2 gap-[3mm] top-[50mm] relative">
          {props.images.map((image: any, key: number) => (
            <Photo width={"100mm"} height={"71.5mm"} key={key} photo={image}/>
          ))}
        </div>
        <FixedFooter direction='right' pageNumber={props.pageNumber}/>
      </div>
  </div>
)



const ExcursionTemplate: NextPage = () => {
  const title = "Year 3 Excursion"
  const text = `The year 3 students travelled up to Ngutana-Lui Aboriginal Torres Strait Islander Cultural Studies Centre in Inala. Throughout the day students, staff and parents participated in a range of engaging activities to further enhance their knowledge of the diverse Aboriginal and Torres Strait Islander culture. We completed dot paintings of native Australian animals which is a way of telling important stories. We learnt the correct way to throw a boomerang and pretended to hunt for food whilst developing our hand eye co-ordination skills through games. 
  <span class="break"></span>
  We listened and learnt all about traditional bush medicine and now we know which plants in nature could help us if we are hurt and which are best to clean our hands or make our clothes smell nice. We even found out about a plant that is a natural insect repellent. We learnt about how we could use different parts of animals to help collect and carry food, use as a utensil, wear as clothes, and even hold and rock your baby. 
  <span class="break"></span>
  We learnt how to use leaves and fibres to create works of art, jewellery, nets or even a sail for a boat. The students, parents and staff learnt all about the Torres Strait Islands and about their traditional fisherman. 
  <span class="break"></span>
  At the end of the excursion, the elders taught us special dances and songs and then played the digeridoo for us all to enjoy. It truly was a day to remember.  `;
  let images = [
    {image: '/other/yr3_excursion/10.jpeg'},
    {image: '/other/yr3_excursion/11.jpeg'},
    {image: '/other/yr3_excursion/3.jpeg'},
    {image: '/other/yr3_excursion/4.jpeg'},
    {image: '/other/yr3_excursion/9.jpeg'},
    {image: '/other/yr3_excursion/13.jpeg'},
    {image: '/other/yr3_excursion/7.jpeg', top: '-27mm'},
    {image: '/other/yr3_excursion/8.jpeg'},
    {image: '/other/yr3_excursion/5.jpeg'},
    {image: '/other/yr3_excursion/1.jpeg'},
    {image: '/other/yr3_excursion/2.jpeg'},
    {image: '/other/yr3_excursion/12.jpeg'},
    {image: '/other/yr3_excursion/6.jpeg'},
  ];

  let pageNumber = 1;
  return (
    <Layout title={title}>
      <div className="page yr3">
        <LeftPage 
        title={title} 
        text={text} 
        images={images.slice(0,7)} 
        pageNumber={pageNumber}
        textStyle={{
          fontSize: '8.5pt',
          lineHeight: '1.2',
        }}/>
        <RightPage
          images={images.slice(7,13)}
          pageNumber={pageNumber}
          title={title}/>
      </div>
    </Layout>
  )
}

export default ExcursionTemplate
