import type { NextPage } from 'next'
import { classes } from '../../metadata';

import Layout from '../../components/Layout'
import { PlainHeader } from '../../components/Header';
import Footer from '../../components/Footer';
import DeputyQuote from '../../components/DeputyQuote';
import TextCard from '../../components/TextCard';
import TeacherCard from '../../components/TeacherCard';
import ClassPhotoCard from '../../components/ClassPhotoCards';

const ClassTemplate: NextPage = () => {
  const title = "From the Year 6 Deputy";
  const quote = `“We can’t be afraid of change. You may feel very secure in the pond that you are in, but if you never venture out of it, you will never know that there is a such a thing as an ocean, a sea.” C JoyBell`;
  const text = `Year 6 – The final year of primary school when students are constantly hearing each event or moment labelled with the “This is the last one for primary school,” and “They won’t let you do that in high school!” While it’s a time to be excited for new beginnings, it’s also a time when we speculate whether we’re ready because let’s be honest, change can be hard at any stage of our lives. However, it’s not until we appreciate that we’ve actually been preparing for this moment since the very beginning of our primary school journey, that we realize, we are more than ready! As the Deputy for Year 6, I feel so honored to play a part in our students’ final year of primary school and I am incredibly confident that our teachers have collectively ensured our students are not just ready for high school, but they’re ready for life.  I watch already in awe at how our students want to positively contribute to not only our community but our world and make it a better place and this excites me. 
  <span class="break"></span>
  To our graduating students, I can’t wait to hear of your future successes and to our Year 6 team of teachers, thank you for your commitment and dedication. You are truly an amazing team to work with.  `;
  const pageNumber = 0;
  const staff = {
    name: 'Wendy Artz',
    image: '/staff/Artz, Wendy.jpg'
  };
  const images = [];

  return (
    <Layout title={title}>
      <div className={`page yr6`}>
        <div className="left">
          <div className="page__content">
            <PlainHeader imageInHeader={true} direction="left" title={title}/>
            <div className="topGrid">
              <div>
                <DeputyQuote text={quote} textStyle={{fontSize: '9pt'}}/>
                <TextCard text={`${text}`} textStyle={{
                  top: '69mm',
                  fontSize: '7.5pt',
                  lineHeight: '10pt',
                }} className="!bg-[url('/paper8.png')] !bg-[length:87mm_115mm] !w-[87mm] !h-[115mm]"/>
                <ClassPhotoCard classPhoto={{image: '/other/yr6_dep/4.jpg'}} width="85mm" height="66mm" className="relative left-[-5mm] top-[191.5mm]"/>
              </div>
              <div className="right !left-[-4mm]">
                <TeacherCard teacher={staff}/>
                <ClassPhotoCard classPhoto={{image: '/other/yr6_dep/1.jpg', top: '-5mm'}} width="85mm" height="50mm" className="relative top-[9mm]"/>
                <ClassPhotoCard classPhoto={{image: '/other/yr6_dep/2.jpg', top: '-25mm'}} width="85mm" height="50mm" className="relative top-[12mm]"/>
                <ClassPhotoCard classPhoto={{image: '/other/yr6_dep/3.jpg'}} width="85mm" height="66mm" className="relative top-[14.5mm]"/>
              </div>
            </div>
          </div>
          <Footer direction="left" pageNumber={pageNumber}/>
        </div>
      </div>
    </Layout>
  )
}

export default ClassTemplate
