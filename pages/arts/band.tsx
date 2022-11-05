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
            <PlainStaffCard staff={props.staff}/>
          </div>
        </div>
        
        {/* Text */}
        <div className="grid w-[180mm] left-[-3.2mm] grid-cols-3 gap-[5mm] top-[-25mm] relative">
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
          <span className='text-justify longBreak' style={props.textStyle} dangerouslySetInnerHTML={{__html: props.text}}></span>
        </div>
        {/* <Photo className="top-[-22mm] left-[-3.2mm] relative" width={props.images[7].width ?? "118.4mm"} height={props.images[7].height ?? "53mm"} photo={props.images[7]}/> */}
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
            {props.images.slice(5, 10).map((image: any, key: number) => (
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
  const title = "Performing Arts - Band"
  const leftText = `This year, Coomera Rivers State School Instrumental Band Program comprised of over 80 energetic grade 4, 5 and 6 students split into the Coomera Rivers Beginner and Senior Bands.
  <span class='break' style="height: 3mm"></span> 
  With the easing of COVID restrictions we have had a year full of performances! Busking at the Cafe, Fanfare (a regional competition for school bands, ensembles and orchestras) and the Gold Coast Eisteddfod have been the highlights for many students this year.
  <span class='break' style="height: 3mm"></span> 
  Fanfare saw the Senior band take home a SILVER Award with some great, positive feedback for their efforts, and both bands received BRONZE awards at the Gold Coast Eisteddfod with some tough competition in both their sections. 
  <span class='break' style="height: 3mm"></span> 
  Currently we are working towards a recruitment concert for the grade 3 cohort and our end of year extravaganza ‘Time to Shine’.
  <span class='break' style="height: 3mm"></span> 
  It’s been an amazing year with some very talented students and I am so proud of all their efforts. Bring on 2023!  `;
  const rightText = `Did you know the effect of music is like fireworks in the brain? No other activity engages multiple parts and networks of the brain simultaneously and students at Coomera Rivers are fortunate to have these brain workouts every single week!
  <span class='break' style="height: 3mm"></span> 
  Prep, Year 1 and Year 2 have had a great time in their music lessons with Mrs Blyth learning about the instruments of the orchestra, playing tuned and untuned percussion instruments, singing and playing musical games. Years 3 and 4 classes have had amazing fun with Mrs Zander. They have learned new rhythms and notes, compared and contrasted songs from Australia and around the world and even started composing short songs to play on the ukulele. Year 5 and 6 students have enjoyed testing their aural skills and learning about music through the time and watching some awesome video clips. They’ve created music to fit films and had a hands-on focus for ukulele in Year 5 and acoustic guitar in Year 6.`;
  let leftImages = [
    {image: '/other/band/1.jpg', height: '39mm', top: '-6mm'},
    {image: '/other/band/2.jpg', height: '47mm'},
    {image: '/other/band/3.jpg', height: '40mm', top: '-6mm'},
    {image: '/other/band/4.jpg', height: '40mm'},
    {image: '/other/band/5.jpg', height: '39mm'},
    {image: '/other/band/6.jpg', height: '56mm', top: '-7mm'},
    {image: '/other/band/7.jpg'},
    {image: '/other/band/8.jpg', height: '46mm'},
    {image: '/other/band/9.jpg'},
  ];

  let pageNumber = 1;
  return (
    <Layout title={title}>
      <div className={`page ${colours}`}>
        <LeftPage 
          title={"Performing Arts - Band"} 
          staff={{name: 'Adam Owens', image: '/staff/Owens, Adam.jpg'}}
          text={leftText} 
          images={leftImages} 
          pageNumber={pageNumber}
          textStyle={{
            fontSize: '10.5pt',
            lineHeight: '13pt',
            top: '30mm',
            position: 'relative'
          }}/>
      </div>
    </Layout>
  )
}

export default ExcursionTemplate
