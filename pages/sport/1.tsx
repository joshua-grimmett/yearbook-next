import type { NextPage } from 'next'
import { Photo } from '../../components/ClassPhotoCards'
import { FixedFooter } from '../../components/Footer'
import { PlainHeader } from '../../components/Header'

import Layout from '../../components/Layout'
import PlainStaffCard from '../../components/PlainStaffCard'
import Tab from '../../components/Tab'
import Table from '../../components/Tables'

const TextBlock = (props: any) => (
  <span className={'text-justify longBreak ' + props.className ?? ''} style={props.textStyle} dangerouslySetInnerHTML={{__html: props.text}}></span>
)

const LeftPage = (props: any) => (
  <div className="left">
      <Tab/>
      <div className="relative page__content">
        <PlainHeader textStyle={{
          fontSize: '30pt'
        }} imageInHeader={true} direction='left' title={props.title}/>
        <div className="flex flex-col gap-[4mm] left-[120mm] top-[2mm] absolute">
          <PlainStaffCard staff={props.staff}/>
          <Photo width="100%" height="55mm" photo={props.images[0]}/>
          <Photo width="100%" height="55mm" photo={props.images[1]}/>
      </div>
        
        <div className="grid w-[117mm] left-[-3.2mm] gap-[5mm] top-[50mm] relative">
          {props.textBlock}
        </div>
        
        <FixedFooter direction='left' pageNumber={props.pageNumber}/>
      </div>
  </div>
)

const RightPage = (props: any) => (
  <div className="left">
      <Tab/>
      <div className="relative page__content">
        <PlainHeader textStyle={{
          fontSize: '30pt'
        }} imageInHeader={true} direction='left' title={props.title}/>
        
        <div className="grid grid-cols-3 w-[179mm] left-[-3.2mm] gap-[5mm] top-[50mm] relative">
          {props.textBlock}
          { props.images.slice(2).map((image: any, key: number) => (
            <Photo photo={image} key={key} width="100%" height="40.7mm"/>
          )) }
        </div>
        
        <FixedFooter direction='left' pageNumber={props.pageNumber}/>
      </div>
  </div>
)

const ExcursionTemplate: NextPage = () => {
  const colours = 'plain'
  const title = "Sport"
  const textStyle = {
    fontSize: '8.5pt',
    lineHeight: '9.5pt',
    // top: '30mm',
    // position: 'relative'
  };

  const textBlock = [
    <TextBlock textStyle={textStyle} key={0} text={`2022 saw a sense of normality return to sport at Coomera Rivers, which has been very refreshing for all our sport lovers. Our focus at Coomera Rivers is ‘Fun, Friendship and Fitness’. With this in mind, we encourage maximum participation in Physical Education, Interschool Sport, Representative Sport, and through our extra-curricular activities. Looking back through the year, it has been amazing to see our students shine through their many sporting endeavours.<span class='break' style="height: 3mm"></span>`}/>, 
    <Table
    key={1}
    textStyle={textStyle}
    headers={['Event', 'Old Record', 'New Record']}
    rows={[
      ['10 Years Long Jump — Girls', 'Kaysiyah Ngawhika-Karaitiana', 'Scarlet Mariner: 3.49m'],
      ['11 Years Long Jump — Boys', 'Juwaan Wetere', 'Jacob Johnson: 4.16m'],
      ['11 Years High Jump — Boys', 'Juwaan Wetere', 'Connor Beck: 1.23m'],
      ['10 Years Shotput — Girls', 'Jessica Roustan', 'Bailey Pulepule: 7.36m'],
      ['Year 3 Cross Country 1km — Boys', 'Connor Beck', 'James Porter: 4m 09s'],
      ['9 Years Cross Country 2km — Boys', 'Mason Bradley', 'Harlan Gower: 8m 11s'],
      ['9 Years Cross Country 2km — Girls', 'Remmy Bradley', 'Zara Roger: 9m 05s'],
      ['11 Years Cross Country 3km — Boys', 'Kaito Anzai', 'Zane Frow: 11m 09s'],
      ['11 Years Cross Country 3km — Girls', 'Amity Kellerman', 'Mylah Raschke: 11m 09s<br/>Maya Adams 11m 09s'],
      ['12 Years Cross Country 3km — Boys', 'Caleb Jackson', 'Rocca Goodger: 11m 53s'],
    ]}/>,
    <TextBlock textStyle={textStyle} key={2} text={`<h1>Cross Country</h1><span class='break' style="height: 3mm"></span> Our first big sporting event of the year is always Cross Country, and it was great to see the whole school get outside and cheer on their mates in the enduring long-distance race. Our races vary from 800m to 3000m, which can be very daunting for some of our students, but they still give it their best. Whether students decide to go their hardest, or walk with their friends, they all have a smile once the race has been finished. Well done to the below students who won the race for their age group.<span class='break' style="height: 3mm"></span> `}/>, 
    <Table key={3}
      textStyle={textStyle}
      headers={['Age', 'Girls', 'Boys']}
      rows={[
        ['2010',	'Nesiah-Rose Haeta Theunissen',	'Rocca Goodger'],
        ['2011',	'Maya Adams & Mylah Raschke',	'Zane Frow'],
        ['2012',	'Kiahna Kopua',	'Tae Tuwhangai'],
        ['2013',	'Zara Roger',	'Harlan Gower'],
        ['Year 3',	'Layla O’Shea',	'James Porter'],
        ['Year 2',	'Lilly Naylor',	'Tiaki Mana'],
        ['Year 1',	'Sophia-Rose Meese',	'Neko Tuwhangai'],
        ['Prep',	'Harper Preece & Gabriela Walker',	'Marley Menzies'],
        ]}/>,
    ];

  const rightTextBlock = [
    <TextBlock className="col-span-2 columns-2" key={0} textStyle={textStyle} text={`<h1>Athletics</h1><span class='break' style="height: 3mm"></span>The rain in the middle of the year kept postponing our Athletics Day and unfortunately, we were unable to hold our Track events at Coomera Rivers. Luckily, we were able to move forward with our field events and select our district athletics team who competed at the Broadwater Athletics trials in August. Congratulations to Scarlet Mariner, Bailey Pulepule, Mylah Raschke, Henko Van der Merwe, Zane Frow and Jacob Johnson who competed for Broadwater at the South Coast Athletics trials. A huge congratulations to Scarlet and Bailey who competed for South Coast at the Queensland Athletics State Championships.<span class='break' style="height: 3mm"></span>`}/>,
      <Table key={1}
      textStyle={textStyle}
      headers={['Age', 'Girls', 'Boys']}
      rows={[
          ['2010',	'Roxette Loomes',	'William Faint',],
          ['2011',	'Mylah Raschke',	'Jacob Johnson',],
          ['2012',	'Scarlet Mariner',	'Tae Tuwhangai',],
      ]}/>,
  ]

  let images = [
    {image: '/other/sport/1/1.jpeg'},
    {image: '/other/sport/1/2.jpeg'},
    {image: '/other/sport/1/3.jpeg', top: '-8mm'},
    {image: '/other/sport/1/4.jpeg'},
    {image: '/other/sport/1/5.jpeg'},
    {image: '/other/sport/1/6.jpeg'},
    {image: '/other/sport/1/7.jpeg', top: '-17mm'},
    {image: '/other/sport/1/8.jpeg'},
    {image: '/other/sport/1/9.jpeg'},
    {image: '/other/sport/1/10.jpeg'},
    {image: '/other/sport/1/11.jpeg'},
    {image: '/other/sport/1/12.jpeg'},
    {image: '/other/sport/1/13.jpeg'},
    {image: '/other/sport/1/14.jpeg'},
  ];

  let pageNumber = 1;
  return (
    <Layout title={title}>
      <div className={`page ${colours}`}>
        <LeftPage 
          title={title} 
          staff={[
            {name: 'Mitchell Cope', image: '/staff/Cope, Mitchell.jpg'},
            {name: 'Jack Burrows', image: '/staff/Burrows, Jack.jpg'}
          ]}
          textBlock={textBlock}
          pageNumber={pageNumber}
          textStyle={{
            fontSize: '8.5pt',
            lineHeight: '1.2',
            top: '30mm',
            position: 'relative'
          }}
          images={images}/>
      <RightPage 
          title={title} 
          staff={[
            {name: 'Mitchell Cope', image: '/staff/Cope, Mitchell.jpg'},
            {name: 'Jack Burrows', image: '/staff/Burrows, Jack.jpg'}
          ]}
          textBlock={rightTextBlock}
          pageNumber={pageNumber}
          textStyle={{
            fontSize: '8.5pt',
            lineHeight: '1.2',
            top: '30mm',
            position: 'relative'
          }}
          images={images}/>
      </div>
    </Layout>
  )
}

export default ExcursionTemplate
