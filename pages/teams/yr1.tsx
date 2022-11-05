import type { NextPage } from 'next'

import Layout from '../../components/Layout'
import { PlainHeader } from '../../components/Header';
import Footer from '../../components/Footer';
import DeputyQuote from '../../components/DeputyQuote';
import TextCard from '../../components/TextCard';
import TeacherCard from '../../components/TeacherCard';
import ClassPhotoCard from '../../components/ClassPhotoCards';

const LeftPage = ({ title, pageNumber }: {title: string, pageNumber: number} ) => {
  const quote = "Teachers who love teaching, teach children to love learning.";
  const text = `What a pleasure it always is being welcomed into our year 1 classrooms to see the fabulous learning that is on offer to our students on a daily basis. Whether it be exciting, hands-on science lessons where students created their own fidget toys from various materials; exploring minibeasts with some real-life insect class pets; getting outside the classroom to explore measuring and directions; recreating stories through puppet and small worlds play; or creative activities using iPads and digital learning – there is always something interesting happening. A favourite is listening to the teachers bringing classic picture books to life with their expression and character play and igniting a passion for reading in students too.
  <span class="break"></span>
  I would like to thank all our teachers, assistant teachers, and inclusion and intervention staff, who have worked with our year 1 students this year. Each of you has contributed in a meaningful way to helping each student grow, not just academically, but in their social abilities and confidence as well.`;
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
  )
}

const RightPage = ({ title, pageNumber }: {title: string, pageNumber: number} ) => {
  const text = `This year, the Year 1 teachers have worked collaboratively to create new and exciting learning opportunities for our students. We have watched our students grow and blossom into confident learners in 2022 and we are all incredibly proud of their achievements. 
  <span class="break"></span>
  We have sure packed a lot into the year and have created so many memories that will last a lifetime. Our excursion to Jacobs Well Environmental Centre was a favourite for many. 
  <span class="break"></span>
  Our students celebrated their parents this year with a Mother’s Day and Father’s Day picnic. It was lovely to see how excited our students were when their parents walked through the Year 1 precinct to spend the afternoon reading and playing board games together. 
  <span class="break"></span>
  Students have developed their skills of reading and writing as they progressed through the Read Write Inc program. There have been countless hours of ‘Fred Talking’ to decode unfamiliar words. Students have worked hard on their writing skills by creating a narrative, story retell and information text. Students participated in mathematical problem solving and the learning of many new concepts including: number; measurement; money; time; shape and fractions. Students have engaged in a variety of fun activities in PE, Health, Digi Tech, Music, Dance and Drama lessons each week. Students have worked hard in Science to construct a robot, fidget toy and musical instruments from recycled materials. 
  <span class="break"></span>
  We are incredibly proud of the Year 1 students and wish them all the best next year!`;
  const question = 'What would your dream job be if you weren’t a teacher?';
  return (
    <div className="right">
      <div className="page__content">
        <PlainHeader imageInHeader={true} direction="right" title={title}/>
        <div className="grid grid-cols-3 gap-[5mm]">
          <ClassPhotoCard classPhoto={{image: '/other/yr1_team/1.jpeg'}} width="85mm" height="50mm" className="relative top-[54mm]"/>
          <ClassPhotoCard classPhoto={{image: '/other/yr1_team/2.jpeg'}} width="85mm" height="50mm" className="relative top-[54mm]"/>
          <ClassPhotoCard classPhoto={{image: '/other/yr1_team/3.jpeg'}} width="85mm" height="50mm" className="relative top-[54mm]"/>
          <ClassPhotoCard classPhoto={{image: '/other/yr1_team/4.jpeg'}} width="85mm" height="50mm" className="relative top-[54mm]"/>
          <ClassPhotoCard classPhoto={{image: '/other/yr1_team/5.jpeg'}} width="85mm" height="50mm" className="relative top-[54mm]"/>
          <ClassPhotoCard classPhoto={{image: '/other/yr1_team/6.jpeg'}} width="85mm" height="50mm" className="relative top-[54mm]"/>
        </div>
        <div className="teamTextCard">
          <div className="grid grid-cols-2 w-[211mm] px-[16mm] py-[14mm] gap-[9mm] justify" style={{
            fontSize: '8pt',
            lineHeight: '9pt'
          }}>
            <span className="w-full" dangerouslySetInnerHTML={{__html: text}}></span>
            <div className='py-[5mm]'>
              <span className="font-bold" style={{
                fontSize: '9pt',
              }}>Q: {question}</span>
              <div className="grid grid-cols-2" style={{
                fontSize: '8.5pt',
                lineHeight: '14pt',
                padding: '6mm'
              }}>
                <span className='my-[2mm]'>Michelle Benton</span>
                <span className='my-[2mm]'>An events planner</span>
                <span className='my-[2mm]'>Renee Briggs</span>
                <span className='my-[2mm]'>A flight attendant</span>
                <span className='my-[2mm]'>Di Costello </span>
                <span className='my-[2mm]'>A resort manager in the Whitsunday Islands</span>
                <span className='my-[2mm]'>Amanda Frey </span>
                <span className='my-[2mm]'>A food Taster!</span>
                <span className='my-[2mm]'>Steffi Jensen</span>
                <span className='my-[2mm]'>A marine biologist! </span>
                <span className='my-[2mm]'>Emily White</span>
                <span className='my-[2mm]'>I would be a vet. I love animals and did vet nursing prior to being a teacher and it was a very rewarding job.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
       <Footer direction="right" pageNumber={pageNumber}/>
    </div>

  )
}

const PageTemplate: NextPage = () => {
  const colours = 'yr1';
  const title = "From the Year 1 Deputy";
  
  return (
    <Layout title={title}>
      <div className={`page ${colours}`}>
        <LeftPage title={title} pageNumber={0}/>
        <RightPage title={'From the Year 1 Team'} pageNumber={1}/>
      </div>
    </Layout>
  )
}

export default PageTemplate
