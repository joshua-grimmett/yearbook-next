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
  const title = "From the Year 5 Deputy";
  const quote = `“Seize every opportunity you have, embrace every experience. Make a mark for all the right reasons.” Chrissie Wellington`;
  const text = ` The beginning of 2022 started off a little shaky, with a delayed start to the school year and that dreaded thought of, “Oh here we go again!” However, while there have been some disruptions, our staff and students have been able to work around these and provide our students with a remarkable school year full of opportunities.
  <span class="break"></span>
  Back in February, I welcomed our fresh Year 5 students to the ‘senior senior-school’, where the preparation for high school begins.  However, ‘Senior senior-school’ is also where there is plethora of extra-curricular opportunities on offer ~ a strength of our school because of our staff. Whether it be performing on stage in Wakakirri, REACH, choir or band, participating in a team sport or Kokoda, public speaking and debating or competing in STEM Olympiads and eSports, there is something for every student to discover and enrich their school experience. 
  <span class="break"></span>
  To our students, as you flick through our 2022 Year Book, it’s time to reflect, how are you embracing and contributing to our Coomera Rivers’ community? You’ve still got another year.   Next year you become the ‘very senior seniors of the senior school’! What will be your legacy?
  `;
  const pageNumber = 0;
  const staff = {
    name: 'Wendy Artz',
    image: '/staff/Artz, Wendy.jpg'
  };
  const images = [];

  return (
    <Layout title={title}>
      <div className={`page yr5`}>
        <div className="left">
          <div className="page__content">
            <PlainHeader imageInHeader={true} direction="left" title={title}/>
            <div className="topGrid">
              <div>
                <DeputyQuote text={quote} textStyle={{fontSize: '10pt'}}/>
                <TextCard className=".noQuote" text={`${text}`} textStyle={{
                  top: '63mm',
                  fontSize: '7.5pt',
                  lineHeight: '10pt',
                }} className="!bg-[url('/paper8.png')] !bg-[length:87mm_115mm] !w-[87mm] !h-[115mm]"/>
                <ClassPhotoCard classPhoto={{image: '/other/yr5_dep/4.jpg'}} width="85mm" height="66mm" className="relative left-[-5mm] top-[191.5mm]"/>
              </div>
              <div className="right !left-[-4mm]">
                <TeacherCard teacher={staff}/>
                <ClassPhotoCard classPhoto={{image: '/other/yr5_dep/1.jpg', top: '-20mm'}} width="85mm" height="50mm" className="relative top-[9mm]"/>
                <ClassPhotoCard classPhoto={{image: '/other/yr5_dep/2.jpg', top: '-5mm'}} width="85mm" height="50mm" className="relative top-[12mm]"/>
                <ClassPhotoCard classPhoto={{image: '/other/yr5_dep/3.jpg'}} width="85mm" height="66mm" className="relative top-[14.5mm]"/>
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
