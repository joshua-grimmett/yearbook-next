import type { NextPage } from 'next'
import ClassPhotoCard, { Photo } from '../../components/ClassPhotoCards'
import DeputyQuote from '../../components/DeputyQuote'
import { FixedFooter } from '../../components/Footer'
import { PlainHeader } from '../../components/Header'

import Layout from '../../components/Layout'
import PlainStaffCard from '../../components/PlainStaffCard'

const LeftPage = (props: any) => (
  <div className="left">
      <div className="tab">
        <span>2022</span>
      </div>
      <div className="relative page__content">
        <PlainHeader textStyle={{
          fontSize: '21pt'
        }} imageInHeader={true} direction='left' title={props.title}/>
        <div className="topGrid">
          <div></div>
          <div className="right !left-[-4mm] top-[-11mm]">
            <PlainStaffCard staff={{name: 'Emma Blyth', image: '/staff/Blyth, Emma.jpg'}}/>
          </div>
        </div>
        
        {/* Text */}
        <div className="grid w-[180mm] left-[-3.2mm] grid-cols-3 gap-[5mm] top-[-25mm] relative">
          <div className='flex flex-col gap-[3mm]'>
            {props.images.slice(0, 4).map((image: any, key: number) => (
              <Photo width={"57mm"} height={image.height ?? "53mm"} key={key} photo={image}/>
            ))}
          </div>
          <div className='flex flex-col gap-[3mm]'>
            {props.images.slice(4, 7).map((image: any, key: number) => (
              <Photo width={"57mm"} height={image.height ?? "53mm"} key={key} photo={image}/>
            ))}
          </div>
          <span className='text-justify longBreak' style={props.textStyle} dangerouslySetInnerHTML={{__html: props.text}}></span>
        </div>
        <Photo className="top-[-22mm] left-[-3.2mm] relative" width={props.images[7].width ?? "118.4mm"} height={props.images[7].height ?? "53mm"} photo={props.images[7]}/>
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
        <PlainHeader textStyle={{
          fontSize: '21pt'
        }} imageInHeader={true} direction='right' title={props.title}/>
        <div className="topGrid">
          <div className="right !left-[-37mm] top-[-11mm]">
            <PlainStaffCard staff={props.staff}/>
          </div>
          <div></div>
        </div>
        
        {/* Text */}
        <div className="grid w-[180mm] left-[-3.2mm] grid-cols-3 gap-[5mm] top-[-25mm] relative">
          <span className='text-justify longBreak' style={props.textStyle} dangerouslySetInnerHTML={{__html: props.text}}></span>
          <div className='flex flex-col gap-[3mm]'>
            {props.images.slice(0, 5).map((image: any, key: number) => (
              <Photo width={"57mm"} height={image.height ?? "53mm"} key={key} photo={image}/>
            ))}
          </div>
          <div className='flex flex-col gap-[3mm]'>
            {props.images.slice(5, 9).map((image: any, key: number) => (
              <Photo width={"57mm"} height={image.height ?? "53mm"} key={key} photo={image}/>
            ))}
          </div>
        </div>
        {/* <Photo className="top-[-22mm] left-[-3.2mm] relative" width={props.images[7].width ?? "118.4mm"} height={props.images[7].height ?? "53mm"} photo={props.images[7]}/> */}
        <FixedFooter direction='right' pageNumber={props.pageNumber}/>
      </div>
  </div>
)



const ExcursionTemplate: NextPage = () => {
  const colours = 'plain'
  const title = "Performing Arts - Strings and Music"
  const leftText = `Monday has been Mrs Blyth’s favourite day of the week this year as she had the opportunity to spend the day making music with an amazing group of students in the Junior and Senior strings groups. It has been a wonderful year of music making and musical experiences! We have competed and received awards at Fanfare and the Beenleigh Eisteddfod. We performed for our family and friends at ‘Busking at the Cafe’ in Term 1 and the Senior Strings performed at our 2023 recruiting concert in Term 4. At the writing of this Year Book, both groups are now busily preparing for our end of year ‘Time To Shine’ concert and an unforgettable finale- ‘Let's go out with a BANG!’ 
  <span class='break' style="height: 6mm"></span>
  One of the highlights of 2022 would have to be our excursion to Southbank to see the Queensland Symphony Orchestra perform. The students’ mouths fell open when the QSO began playing! It was so wonderful to take them to experience a performance of that caliber.  `;
  const rightText = `Did you know the effect of music is like fireworks in the brain? No other activity engages multiple parts and networks of the brain simultaneously and students at Coomera Rivers are fortunate to have these brain workouts every single week!
  <span class='break' style="height: 6mm"></span> 
  Prep, Year 1 and Year 2 have had a great time in their music lessons with Mrs Blyth learning about the instruments of the orchestra, playing tuned and untuned percussion instruments, singing and playing musical games. Years 3 and 4 classes have had amazing fun with Mrs Zander. They have learned new rhythms and notes, compared and contrasted songs from Australia and around the world and even started composing short songs to play on the ukulele. Year 5 and 6 students have enjoyed testing their aural skills and learning about music through the time and watching some awesome video clips. They’ve created music to fit films and had a hands-on focus for ukulele in Year 5 and acoustic guitar in Year 6.`;
  let leftImages = [
    {image: '/other/strings/5.jpeg', height: '15mm', top: '-13mm'},
    {image: '/other/strings/2.jpeg'},
    {image: '/other/strings/8.jpeg', height: '44mm'},
    {image: '/other/strings/4.jpeg', height: '47mm'},
    {image: '/other/strings/1.jpeg'},
    {image: '/other/strings/6.jpeg', height: '78mm'},
    {image: '/other/strings/7.jpeg', height: '31mm'},
    {image: '/other/strings/3.jpeg', height: '48mm', width: '118.4mm'},
  ];

  let rightImages = [
    {image: '/other/music/1.jpeg', height: '33mm', top: '-8mm'},
    {image: '/other/music/2.jpeg', height: '31mm'},
    {image: '/other/music/3.jpeg'},
    {image: '/other/music/4.jpeg', height: '36mm'},
    {image: '/other/music/5.jpeg', height: '56mm'},
    {image: '/other/music/6.jpeg'},
    {image: '/other/music/7.jpeg'},
    {image: '/other/music/8.jpeg'},
    {image: '/other/music/9.jpeg'},
  ];

  let pageNumber = 1;
  return (
    <Layout title={title}>
      <div className={`page ${colours}`}>
        <LeftPage 
          title={"Performing Arts - Strings"} 
          text={leftText} 
          images={leftImages.slice(0,8)} 
          pageNumber={pageNumber}
          textStyle={{
            fontSize: '10.5pt',
            lineHeight: '13.5pt',
            top: '30mm',
            position: 'relative'
          }}/>
          <RightPage
          title={"Music"} 
          text={rightText} 
          images={rightImages} 
          pageNumber={pageNumber++}
          staff={{
            name: 'Cassie Zander',
            image: '/staff/Zander, Cassie.jpg',
          }}
          textStyle={{
            fontSize: '10.5pt',
            lineHeight: '13.5pt',
            top: '30mm',
            position: 'relative'
          }}/>
      </div>
    </Layout>
  )
}

export default ExcursionTemplate
