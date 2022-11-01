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
  const c = classes[0];
  const title = "From the Prep Deputy";
  const quote = "You don’t have to see the whole staircase to take the first step.";
  const text = `Each year I am amazed by how much our prep students grow – academically, socially and in confidence - from when they take those first steps through the school gate to our end of year celebrations. This growth is nurtured and fostered by our wonderful prep teachers, assistant teachers and inclusion staff who work hard to make sure every student is welcomed and supported in their learning. There are a million different special things our staff do through the year to make learning experiences both effective but also engaging, from explicit phonics lessons with Fred (our phonics frog Mascot); classrooms with corners transformed into Gruffalo caves or castles; hands-on age-appropriate activities linked to curriculum and some mindfulness and fun movement breaks (dancing to our seat) thrown in. I’d like to thank all the staff who have worked with our prep students this year. Patience, kindness and love help grow young brains alongside explicit curriculum teaching.`;
  const pageNumber = 0;
  const staff = {
    name: 'Angela Waide',
    image: '/staff/Waide, Angela.jpg'
  };
  const images = [];

  return (
    <Layout title={title}>
      <div className={`page prep`}>
        <div className="left">
          <div className="page__content">
            <PlainHeader imageInHeader={true} direction="left" title={title}/>
            <div className="topGrid">
              <div>
                <DeputyQuote text={quote} textStyle={{fontSize: '13pt'}}/>
                <TextCard text={`“${text}”`} textStyle={{
                  top: '63mm',
                  fontSize: '8.6pt',
                  lineHeight: '11.5pt',
                }} className="!bg-[url('/paper8.png')] !bg-[length:87mm_115mm] !w-[87mm] !h-[115mm]"/>
                <ClassPhotoCard classPhoto={{image: '/other/prep_dep/4.jpg'}} width="85mm" height="66mm" className="relative left-[-5mm] top-[191.5mm]"/>
              </div>
              <div className="right !left-[-4mm]">
                <TeacherCard teacher={staff}/>
                <ClassPhotoCard classPhoto={{image: '/other/prep_dep/1.jpg'}} width="85mm" height="50mm" className="relative top-[9mm]"/>
                <ClassPhotoCard classPhoto={{image: '/other/prep_dep/2.jpg'}} width="85mm" height="50mm" className="relative top-[12mm]"/>
                <ClassPhotoCard classPhoto={{image: '/other/prep_dep/3.jpg'}} width="85mm" height="66mm" className="relative top-[14.5mm]"/>
              </div>
            </div>
          </div>
          <Footer direction="left" pageNumber={pageNumber}/>
        </div>
      </div>
      {/* <DeputyPage
        className={'prep'}
        title={title}
        staff={}
        images={c.classPhotos}
        pageNumbers={c.pageNumbers}
        quote={"Teachers who love teaching, teach children to love learning."}
        text={}
        textStyle={c.textStyle}/> */}
    </Layout>
  )
}

export default ClassTemplate
