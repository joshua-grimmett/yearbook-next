import type { NextPage } from "next"
import { Photo } from "../../components/ClassPhotoCards"
import DeputyQuote from "../../components/DeputyQuote"
import { FixedFooter } from "../../components/Footer"
import { PlainHeader } from "../../components/Header"

import Layout from "../../components/Layout"
import PlainStaffCard from "../../components/PlainStaffCard"

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
          <div className="right !left-[-37mm] top-[-11mm] relative">
            <PlainStaffCard staff={props.staff}/>
            <div className="flex flex-col gap-[3.5mm] relative top-[3mm]">
              <Photo photo={props.images[0]} width="57mm" height="57mm"/>
              <Photo photo={props.images[1]} width="57mm" height="57mm"/>
            </div>
          </div>
          <div></div>
        </div>
        
        {/* Text Block 2 columns */}
        <div className="grid w-[126mm] left-[58.8mm] gap-[5mm] top-[50mm] absolute">
          <span className='text-justify longBreak columns-2' style={props.textStyle} dangerouslySetInnerHTML={{__html: props.text}}></span>
          <DeputyQuote text={props.quote} textStyle={{
            top: '112.7mm',
            maxWidth: '100%'
          }}/>
          <div className="top-[25mm] relative">
            <div className="grid grid-cols-2 gap-[3mm]">
              <Photo photo={props.images[2]} width="100mm" height="38.31mm"/>
              <Photo photo={props.images[3]} width="100mm" height="38.31mm"/>
              <Photo photo={props.images[4]} width="100mm" height="38.31mm"/>
              <Photo photo={props.images[5]} width="100mm" height="38.31mm"/>
            </div>
          </div>
        </div>


        <FixedFooter direction='right' pageNumber={props.pageNumber}/>
      </div>
  </div>
)

const SchoolHeadTemplate: NextPage = () => {
  const colours = "plain"
  const title = "Head of School"
  const textStyle = {
    fontSize: "8.5pt",
    lineHeight: "1.2",
  };
  const quote = `"All our dreams can come true if we have the courage to pursue them." Walt Disney`;
  const text = `Wow… These seven years of primary have been a thrill! We’re both proud to represent our school as your 2022 Heads of School. Believe it or not, our leadership journey began in 2016 when we both sat in Prep admiring the Year 3 student councillors. They influenced and inspired us to strive to become great leaders like them. Throughout our primary school journey, both of us had our minds and hearts set on being a leader. We’ve both been class student councillors however, even without a badge, we’ve ensured we’ve shown leadership and a sense of pride in our wonderful school. You can imagine our delight when in 2021, Mrs Artz announced the 2022 Heads of School and we stood together on stage, accepting our badges from the graduating Year 6 leaders. Out of 65 applicants, we were chosen. Wow! What an absolute honour! 
  <span class="break"></span>
  Year 6 has been an amazing year. We are extremely proud to be the first Year 6 cohort to successfully win the debate of having the opportunity to have a Year 6 Senior shirt.  We look great! 
  <span class="break"></span>
  We both share similar highlights like Kokoda, Debating, mySpeak, 2021 Musical, Interschool Sports, Cutting Edge for Kids, being with wonderful teachers and sharing lots of special moments with our close friends; but for Annabelle, her highlights would also include Wakakirri and The Great Debate, whereas Lucas, thoroughly enjoyed The Jacobs Well Writers’ Workshop. You can see our opportunities have been plentiful and there’s probably more but we have a word limit. We also  mustn’t forget all the wonderful things our P&C do to provide our school with so much more. There’s discos, colour-runs, Subways, just to name a few …. Did we mention Subways?
  <span class="break"></span>
  From the both of us we would like to thank all staff however we must make special mention of, “Womley” (Mrs Wager, Mrs Comley), Mr Graham and Mrs Artz.  They have certainly made our last year of primary school very special.  We’d also like to thank our parents – they have supported us beyond words.  To every student, be sure to dream big and keep your focus on the goal. We both never gave up on our dream to be badged school leaders. We will miss Coomera Rivers as we move on to high school next year but as they say, we’ll take a little bit of Coomera Rivers with us.`;

  let images = [
    {image: "/other/school_head/1.jpg"},
    {image: "/other/school_head/3.jpg"},
    {image: "/other/school_head/2.jpg"},
    {image: "/other/school_head/4.jpg"},
    {image: "/other/school_head/5.jpg"},
    {image: "/other/school_head/6.jpg"},
  ];

  let pageNumber = 1;
  return (
    <Layout title={title}>
      <div className={`page ${colours}`}>
        <RightPage 
          title={title} 
          quote={quote}
          staff={[
            {name: "Annabelle Nichol", image: "/classOf2022/images/Nichol, Annabelle.jpg"},
            {name: "Lucas Ikenasio", image: "/classOf2022/images/Ikenasio, Lucas.jpg"}
          ]}
          text={text}
          pageNumber={pageNumber}
          textStyle={textStyle}
          images={images}/>
      </div>
    </Layout>
  )
}

export default SchoolHeadTemplate
