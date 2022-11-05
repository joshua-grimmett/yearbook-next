import type { NextPage } from 'next'

import Layout from '../../components/Layout'
import { PlainHeader } from '../../components/Header';
import Footer from '../../components/Footer';
import DeputyQuote from '../../components/DeputyQuote';
import TextCard from '../../components/TextCard';
import TeacherCard from '../../components/TeacherCard';
import ClassPhotoCard from '../../components/ClassPhotoCards';

const LeftPage = ({ title, pageNumber }: {title: string, pageNumber: number} ) => {
  const quote = "In a world where you can be anything, BE KIND.";
  const text = `In 2022, I was lucky enough again, to be given the privilege of working with the Year 2 team of teachers and students as the Deputy Principal for Year 2, made up of approximately 150 students across 7 classes, 1 of which was composite.
  <span class="break"></span>
  With a strong message of being kind to others, and trying your best with effort and behaviour, I can report that our students did just that, with our teachers leading the way.
  <span class="break"></span>
  My highlight was visiting classrooms and seeing our students smiling and happy as I entered the room, as well as the teachers, an important ingredient for successful learning and teaching. I enjoyed seeing the development of students across the year, academically, socially and emotionally, with our aim of growing students who love learning, love life and love others and wanting to be the best version of themselves they can be.
  <span class="break"></span>
  As you peruse the following pages, you will see what an amazing year 2022 has been for our Year 2 students led by their amazing teachers!`;
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
            <div className="grid grid-cols-2">
              <ClassPhotoCard classPhoto={images[2]} width="85mm" height="30mm" className="relative top-[26mm]"/>
              <ClassPhotoCard classPhoto={images[3]} width="85mm" height="30mm" className="relative top-[26mm]"/>
              <ClassPhotoCard classPhoto={images[4]} width="85mm" height="30mm" className="relative top-[26mm]"/>
              <ClassPhotoCard classPhoto={images[5]} width="85mm" height="30mm" className="relative top-[26mm]"/>
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
          <ClassPhotoCard classPhoto={{image: '/other/yr2_team/1.jpg'}} width="85mm" height="50mm" className="relative top-[54mm]"/>
          <ClassPhotoCard classPhoto={{image: '/other/yr2_team/2.jpg'}} width="85mm" height="50mm" className="relative top-[54mm]"/>
          <ClassPhotoCard classPhoto={{image: '/other/yr2_team/3.jpg'}} width="85mm" height="50mm" className="relative top-[54mm]"/>
          <ClassPhotoCard classPhoto={{image: '/other/yr2_team/4.jpg'}} width="85mm" height="50mm" className="relative top-[54mm]"/>
          <ClassPhotoCard classPhoto={{image: '/other/yr2_team/5.jpg'}} width="85mm" height="50mm" className="relative top-[54mm]"/>
          <ClassPhotoCard classPhoto={{image: '/other/yr2_team/6.jpg'}} width="85mm" height="50mm" className="relative top-[54mm]"/>
        </div>
        <div className="teamTextCard">
          <div className="grid grid-cols-2 w-[211mm] px-[16mm] py-[14mm] gap-[9mm] justify" style={{
            fontSize: '8pt',
            lineHeight: '9pt'
          }}>
            <span className="w-full">
            This year, the Year 2 teachers have created supportive environments for students to flourish. This is due to their dedication and hard work in ensuring that students value the importance of collaborating and treating each other with kindness.
            <span className="break"></span>
 We have had many wonderful learning experiences with our classes this year. Students developed their writing skills by producing a character description, an imaginative text and a persuasive text. When reading, they’ve developed skills such as self-monitoring, fluency and expression. After reading, students have also worked on their comprehension of a text. The Year 2 students loved being scientists in Term 1 when they explored a range of mixtures. They also enjoyed learning about the importance of water and why it should be conserved.
 <span className="break"></span>
 This year we were again challenged by Covid 19. This meant a delayed start to the year by two weeks. A shorter than normal Term 1 was difficult, but students adapted well and quickly learnt new routines and formed some new friendships. 
 <span className="break"></span>
 The Year 2 students have been fortunate to participate in many extra-curricular activities such as, School Disco, Free Dress Days, Swimming Lessons, Flash Mob, Sports Fun Day and Book Fair Dress Up. The highlight of the year was our excursions to the Beenleigh Historical Village and to Currumbin Wildlife Sanctuary. We had great fun being outdoors and learning about the past and learning about living things and their environments. 
          <span className="break"></span>
            </span>
            <div>
              <span>
              Together we have made many wonderful memories and friendships this year. The students are to be commended for the effort they put into their learning, and we wish them every happiness and success in the future.
              <span className="break"></span>
              </span>
              <span className="font-bold" style={{
                fontSize: '9pt',
              }}>Q: {question}</span>
              <div className="grid grid-cols-2" style={{
                fontSize: '8.5pt',
                lineHeight: '14pt',
                padding: '6mm'
              }}>
                <span className='my-[0.5mm]'>Courtney McIntosh</span>
                <span className='my-[0.5mm]'>Event planner</span>
                <span className='my-[0.5mm]'>Alanna Mackay</span>
                <span className='my-[0.5mm]'>Nurse</span>
                <span className='my-[0.5mm]'>Vanessa Taylor</span>
                <span className='my-[0.5mm]'>Hairdresser</span>
                <span className='my-[0.5mm]'>Lisa Barnes</span>
                <span className='my-[0.5mm]'>Astronaut</span>
                <span className='my-[0.5mm]'>Danielle Sturgeon</span>
                <span className='my-[0.5mm]'>Photographer</span>
                <span className='my-[0.5mm]'>Kelly Finger</span>
                <span className='my-[0.5mm]'>Dance teacher</span>
                <span className='my-[0.5mm]'>Sam Fischer</span>
                <span className='my-[0.5mm]'>Nail technician</span>
                <span className='my-[0.5mm]'>Trish O’Sullivan</span>
                <span className='my-[0.5mm]'>Nurse</span>
                <span className='my-[0.5mm]'>Therese Kane</span>
                <span className='my-[0.5mm]'>Professional ballerina</span>
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
  const colours = 'yr2';
  const title = "From the Year 2 Deputy";
  
  return (
    <Layout title={title}>
      <div className={`page ${colours}`}>
        <LeftPage title={title} pageNumber={0}/>
        <RightPage title={'From the Year 2 Team'} pageNumber={1}/>
      </div>
    </Layout>
  )
}

export default PageTemplate
