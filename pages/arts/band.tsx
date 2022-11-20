import type { NextPage } from 'next'
import ClassPhotoCard, { Photo } from '../../components/ClassPhotoCards'
import DeputyQuote from '../../components/DeputyQuote'
import { FixedFooter } from '../../components/Footer'
import { PlainHeader } from '../../components/Header'

import Layout from '../../components/Layout'
import PlainStaffCard from '../../components/PlainStaffCard'
import Tab from '../../components/Tab'

const LeftPage = (props: any) => (
  <div className="left">
      <Tab/>
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
      <Tab/>
      <div className="relative page__content">
        <PlainHeader textStyle={{
          fontSize: '21pt'
        }} imageInHeader={true} direction='right' title={props.title}/>
        
        <div className="grid grid-cols-3 w-[179mm] gap-[5mm] top-[50mm] absolute">
          <span className='text-justify columns-3 col-span-3' style={{
            fontSize: '9.5pt',
            lineHeight: '11.5pt'
          }} dangerouslySetInnerHTML={{__html: props.text}}></span>
          <div className="grid grid-cols-3 col-span-3 gap-[3mm] flex-wrap">
            {props.images.slice(0,8).map((image: any, key: number) => (
              <>
              { [0,3,4].includes(key) && <Photo className="col-span-2" photo={image} height="54.5mm" width="100%" key={key}/> }
              { ![0,3,4].includes(key) && <Photo photo={image} height="54.5mm" width="100%" key={key}/> }
              </>
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
  const rightText = `It’s Raining Tacos would have to be to be of the year 1-6 Choir’s favourite choir songs for 2022! This year we competed in the Gold Coast Eisteddfod and came away with a second place and gold award with many of our supportive parents believing it should have been a first! We had ponchos, Mexican hats, tacos shells, meat, lettuce, and cheese, cheese, cheese, cheese, CHEESE!  
  <span class='break' style="height: 3mm"></span> 
  The choir also enjoyed performing for our families and friends at ‘Busking at the Café’ in Term 1 and our end of year concert ‘Time To Shine’ in Term 4. They particularly enjoyed singing along in the epic finale to ‘Bang!’ backed by our school band and string players.
  <span class='break' style="height: 3mm"></span> 
  Thank you Year 1-6 Choir for an awesome year of music making! I have loved your enthusiasm and commitment each week and watching your absolute love of performing and being on stage. 
  <span class='break' style="height: 3mm"></span> 
  Keep on singing!
  <span class='break' style="height: 3mm"></span> 
  Love Mrs Blyth.`;
  let leftImages = [
    {image: '/other/band/1.jpg', height: '39mm', top: '-6mm'},
    {image: '/other/band/2.jpg', height: '47mm'},
    {image: '/other/band/3.jpg', height: '40mm', top: '-6mm'},
    {image: '/other/band/4.jpg', height: '40mm'},
    {image: '/other/band/5.jpg', height: '39mm'},
    {image: '/other/band/6.jpg', height: '56mm', top: '-7mm'},
    {image: '/other/band/7.jpg', height: '64mm'},
    {image: '/other/band/8.jpg', height: '46mm'},
    {image: '/other/band/9.jpg', height: '42mm'},
  ];

  let rightImages = [
    {image: '/other/choir/1.jpeg', top: '-9mm'},
    {image: '/other/choir/2.jpeg'},
    {image: '/other/choir/3.jpeg'},
    // {image: '/other/choir/4.jpeg'},
    // {image: '/other/choir/5.jpeg'},
    {image: '/other/choir/6.jpeg'},
    {image: '/other/choir/7.jpeg'},
    {image: '/other/choir/8.jpeg'},
  ];

  let pageNumber = 42;
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
        <RightPage
          title={"Performing Arts - Choir"}
          text={rightText}
          images={rightImages}
          pageNumber={pageNumber + 1}
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
