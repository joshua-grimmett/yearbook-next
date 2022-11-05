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
          <span className='text-justify longBreak' style={props.textStyle} dangerouslySetInnerHTML={{__html: props.text}}></span>
          <div className='flex flex-col gap-[3mm]'>
            {props.images.slice(0, 4).map((image: any, key: number) => (
              <Photo width={"60mm"} height={"53mm"} key={key} photo={image}/>
            ))}
          </div>
          <div className='flex flex-col gap-[3mm]'>
            {props.images.slice(4, 8).map((image: any, key: number) => (
              <Photo width={"60mm"} height={"53mm"} key={key} photo={image}/>
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
        
        {/* Photos */}
        <div className="grid grid-cols-3 w-[180mm] gap-[3mm] top-[50mm] relative">
          {props.images.map((image: any, key: number) => (
            <Photo width={"100mm"} height={"53mm"} key={key} photo={image}/>
          ))}
        </div>

        <FixedFooter direction='right' pageNumber={props.pageNumber}/>
      </div>
  </div>
)



const ExcursionTemplate: NextPage = () => {
  const colours = 'yr2'
  const title = "Year 2 Excursion 2"
  const text = `At the end of Term 3, Year 2 students enjoyed an exciting, fun day of memorable adventures at Currumbin Wildlife Sanctuary. Our first stop was the free flight bird show, ‘WildSkies’, which demonstrated the majestic world of flight. We met many of Australia’s most beautiful species of birds including the largest bird of prey in Australia, the wedge-tail eagle. We also had an opportunity to learn about the Australian Pelican, colourful parrots and the closest relative to a dinosaur, a chicken. The students were in awe as these beautiful birds flew wild, skimming over our heads. 
  <span class='break'></span>
  As we continued our adventure through the sanctuary, the students pointed out many koalas, snakes, Tasmanian devils, lizards, flying foxes, wombats, and crocodiles. Finally, we found the highly anticipated kangaroo enclosure. We searched the red-dirt landscape to find the lazy red kangaroos. The students thoroughly enjoyed patting and feeding the beautiful mammals after which, we head to the grassy fields to say hello to grey kangaroos and inquisitive emus. 
  <span class="break"></span> 
  On the bus ride back to school, the students were still buzzing with excitement and ready to share their favourite moments from the day with their families. In line with our Science Curriculum, Year 2 students were able to develop their knowledge of living things and how to care for the environment. It was a brilliant day exploring the range of exciting and fun, educational experiences at Currumbin Wildlife Sanctuary.`;
  let images = [
    {image: '/other/yr2_excursion_2/1.jpeg', top: '-18mm'},
    {image: '/other/yr2_excursion_2/2.jpeg', top: '-20mm'},
    {image: '/other/yr2_excursion_2/3.jpeg'},
    {image: '/other/yr2_excursion_2/4.jpeg', top: '-17mm'},
    {image: '/other/yr2_excursion_2/5.jpeg', top: '-10mm'},
    {image: '/other/yr2_excursion_2/6.jpeg'},
    {image: '/other/yr2_excursion_2/7.jpeg', top: '-9mm'},
    {image: '/other/yr2_excursion_2/8.jpeg', top: '-16mm'},
    {image: '/other/yr2_excursion_2/9.jpeg'},
    {image: '/other/yr2_excursion_2/10.jpeg'},
    {image: '/other/yr2_excursion_2/11.jpeg', top: '-20mm'},
    {image: '/other/yr2_excursion_2/12.jpeg'},
    {image: '/other/yr2_excursion_2/13.jpeg', left: '-9mm'},
    {image: '/other/yr2_excursion_2/14.jpeg', top: '-10mm'},
    {image: '/other/yr2_excursion_2/15.jpeg', top: '-13mm'},
    {image: '/other/yr2_excursion_2/16.jpeg', top: '-13mm'},
    {image: '/other/yr2_excursion_2/17.jpeg', top: '-22mm'},
    {image: '/other/yr2_excursion_2/18.jpeg'},
    {image: '/other/yr2_excursion_2/19.jpeg', top: '-24mm'},
    {image: '/other/yr2_excursion_2/20.jpeg', left: '-3mm'},
  ];

  let pageNumber = 1;
  return (
    <Layout title={title}>
      <div className={`page ${colours}`}>
        <LeftPage 
        title={title} 
        text={text} 
        images={images.slice(0,8)} 
        pageNumber={pageNumber}
        textStyle={{
          fontSize: '9.5pt',
          lineHeight: '13.5pt',
        }}/>
        <RightPage
          images={images.slice(8)}
          pageNumber={pageNumber}
          title={title}/>
      </div>
    </Layout>
  )
}

export default ExcursionTemplate
