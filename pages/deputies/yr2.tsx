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
  const colours = 'yr2';
  const title = "From the Year 2 Deputy";
  const quote = "In a world where you can be anything, BE KIND.";
  const text = `In 2022, I was lucky enough again, to be given the privilege of working with the Year 2 team of teachers and students as the Deputy Principal for Year 2, made up of approximately 150 students across 7 classes, 1 of which was composite.
  <span class="break"></span>
  With a strong message of being kind to others, and trying your best with effort and behaviour, I can report that our students did just that, with our teachers leading the way.
  <span class="break"></span>
  My highlight was visiting classrooms and seeing our students smiling and happy as I entered the room, as well as the teachers, an important ingredient for successful learning and teaching. I enjoyed seeing the development of students across the year, academically, socially and emotionally, with our aim of growing students who love learning, love life and love others and wanting to be the best version of themselves they can be.
  <span class="break"></span>
  As you peruse the following pages, you will see what an amazing year 2022 has been for our Year 2 students led by their amazing teachers!`;
  const pageNumber = 0;
  const staff = {
    name: 'Jason Meijboom',
    image: '/staff/Meijboom, Jason.jpg'
  };
  const images = [
    {image: '/other/yr2_dep/1.jpg'},
    {image: '/other/yr2_dep/4.jpg', top: '-8mm'},
    {image: '/other/yr2_dep/3.jpg', top: '-9mm'},
    {image: '/other/yr2_dep/2.jpg', top: '-10mm'},
    {image: '/other/yr2_dep/5.jpg', top: '-5mm'},
    {image: '/other/yr2_dep/6.jpg', top: '-9mm'}
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
                  fontSize: '8pt',
                  lineHeight: '11.5pt',
                }} className="!bg-[url('/paper8.png')] !bg-[length:87mm_115mm] !w-[87mm] !h-[115mm]"/>
              </div>
              <div className="right !left-[-4mm]">
                <TeacherCard teacher={staff}/>
                <ClassPhotoCard classPhoto={images[0]} width="85mm" height="50mm" className="relative top-[9mm]"/>
                <ClassPhotoCard classPhoto={images[1]} width="85mm" height="50mm" className="relative top-[12mm]"/>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <ClassPhotoCard classPhoto={images[2]} width="85mm" height="30mm" className="relative top-[26mm]"/>
              <ClassPhotoCard classPhoto={images[3]} width="85mm" height="30mm" className="relative top-[26mm]"/>
              <ClassPhotoCard classPhoto={images[4]} width="85mm" height="30mm" className="relative top-[26mm]"/>
              <ClassPhotoCard classPhoto={images[5]} width="85mm" height="30mm" className="relative top-[26mm]"/>
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
