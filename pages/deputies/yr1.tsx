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
  const colours = 'yr1';
  const title = "From the Year 1 Deputy";
  const quote = "Teachers who love teaching, teach children to love learning.";
  const text = `What a pleasure it always is being welcomed into our year 1 classrooms to see the fabulous learning that is on offer to our students on a daily basis. Whether it be exciting, hands-on science lessons where students created their own fidget toys from various materials; exploring minibeasts with some real-life insect class pets; getting outside the classroom to explore measuring and directions; recreating stories through puppet and small worlds play; or creative activities using iPads and digital learning – there is always something interesting happening. A favourite is listening to the teachers bringing classic picture books to life with their expression and character play and igniting a passion for reading in students too.
  <span class="break"></span>
  I would like to thank all our teachers, assistant teachers, and inclusion and intervention staff, who have worked with our year 1 students this year. Each of you has contributed in a meaningful way to helping each student grow, not just academically, but in their social abilities and confidence as well.`;
  const pageNumber = 0;
  const staff = {
    name: 'Angela Waide',
    image: '/staff/Waide, Angela.jpg'
  };
  const images = [
    {image: '/other/yr1_dep/1.jpg'},
    {image: '/other/yr1_dep/2.jpg'},
    {image: '/other/yr1_dep/3.jpg'},
    {image: '/other/yr1_dep/4.jpg'},
    {image: '/other/yr1_dep/5.jpg'},
    {image: '/other/yr1_dep/6.jpg'},
    {image: '/other/yr1_dep/7.jpg'},
    {image: '/other/yr1_dep/8.jpg'},
  ];

  return (
    <Layout title={title}>
      <div className={`page ${colours}`}>
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
              </div>
              <div className="right !left-[-4mm]">
                <TeacherCard teacher={staff}/>
                <ClassPhotoCard classPhoto={images[0]} width="85mm" height="50mm" className="relative top-[9mm]"/>
                <ClassPhotoCard classPhoto={images[1]} width="85mm" height="50mm" className="relative top-[12mm]"/>
              </div>
            </div>
            <div className="grid grid-cols-3">
              <ClassPhotoCard classPhoto={images[2]} width="53mm" height="30mm" className="relative top-[26mm]"/>
              <ClassPhotoCard classPhoto={images[3]} width="53mm" height="30mm" className="relative top-[26mm]"/>
              <ClassPhotoCard classPhoto={images[4]} width="53mm" height="30mm" className="relative top-[26mm]"/>
              <ClassPhotoCard classPhoto={images[5]} width="53mm" height="30mm" className="relative top-[26mm]"/>
              <ClassPhotoCard classPhoto={images[6]} width="53mm" height="30mm" className="relative top-[26mm]"/>
              <ClassPhotoCard classPhoto={images[7]} width="53mm" height="30mm" className="relative top-[26mm]"/>
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
