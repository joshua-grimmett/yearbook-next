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
        <div className="grid w-[180mm] top-[50mm] relative">
          <span className='text-justify columns-3' style={props.textStyle} dangerouslySetInnerHTML={{__html: props.text}}></span>
        </div>
        {/* Photos */}
        <div className="grid grid-cols-3 w-[180mm] top-[53mm] gap-[3mm] relative">
          {props.images.map((image: any, key: number) => (
            <Photo width={"60mm"} height={"44mm"} key={key} photo={image}/>
          ))}
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
        
        <div className="relative top-[50mm]">
          <Photo width={"185mm"} height={"94.5mm"} photo={props.images[0]}/>
        </div>
        {/* Photos */}
        <div className="grid grid-cols-3 w-[180mm] gap-[3mm] top-[53mm] relative">
          {props.images.slice(1, 4).map((image: any, key: number) => (
            <Photo width={"100mm"} height={"60mm"} key={key} photo={image}/>
          ))}
        </div>
        <div className="relative top-[56mm]">
          <Photo width={"185mm"} height={"60mm"} photo={props.images[4]}/>
        </div>

        <FixedFooter direction='right' pageNumber={props.pageNumber}/>
      </div>
  </div>
)



const ExcursionTemplate: NextPage = () => {
  const title = "Prep Excursion"
  const text = `WHAT A DAY! Our excursion to Sea World is one of the best days each year! At the start of the day we boarded the bus full of excitement and energy and arrived back in the afternoon with tired feet and fantastic memories. Sea World provides us with a wonderful opportunity to see all the animals we’ve spent the term learning about. We spent the morning learning about the importance of recycling with seals, before watching dolphins soar through the water and the air. We were lucky enough to then learn more about dolphins from the trainers themselves. Following this we visited the polar bear, the stingrays and the little penguins. We made our way back through the jellyfish, who were luminescent and absolutely amazing. We visited the penguins and all huddled around to see the super cute baby penguin. We ended our day by sitting on the grass to eat lunch and watch the jet ski stunt. We slowly piled onto the bus, swapping stories of our day and napping on our way home.`;
  let images = [
    {image: '/other/prep_excursion/1.jpeg'},
    {image: '/other/prep_excursion/2.jpeg'},
    {image: '/other/prep_excursion/3.jpeg'},
    {image: '/other/prep_excursion/16.jpeg'},
    {image: '/other/prep_excursion/5.jpeg'},
    {image: '/other/prep_excursion/6.jpeg', top: '-16mm'},
    {image: '/other/prep_excursion/7.jpeg', top: '-19mm'},
    {image: '/other/prep_excursion/8.jpeg'},
    {image: '/other/prep_excursion/9.jpeg'},
    {image: '/other/prep_excursion/10.jpeg'},
    {image: '/other/prep_excursion/11.jpeg'},
    {image: '/other/prep_excursion/12.jpeg', top: '-17mm'},
    {image: '/other/prep_excursion/13.jpeg'},
    {image: '/other/prep_excursion/14.jpeg'},
    {image: '/other/prep_excursion/15.jpeg'},
    {image: '/other/prep_excursion/17.jpeg'},
    {image: '/other/prep_excursion/4.jpeg', top: '-25mm'},
  ];

  let pageNumber = 1;
  return (
    <Layout title={title}>
      <div className="page prep">
        <LeftPage 
        title={title} 
        text={text} 
        images={images.slice(0,12)} 
        pageNumber={pageNumber}
        textStyle={{
          fontSize: '8.5pt',
          lineHeight: '1.2',
        }}/>
        <RightPage
          images={images.slice(12,17)}
          pageNumber={pageNumber}
          title={title}/>
      </div>
    </Layout>
  )
}

export default ExcursionTemplate
