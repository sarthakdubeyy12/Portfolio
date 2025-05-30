import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col' style={{ background: '#151030' }}>
        <img src={service.icon} alt='some_icon' className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>
      <section className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <article className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>
              👨‍💻 Hi, I'm Sarthak Dubey, currently pursuing my BTech from Vellore Institute of Technology, Bhopal. I have a passion for crafting robust backend systems. As a seasoned full stack developer, I bring a blend of technical expertise and creativity to every project I work on. 
              <a
                className='text-green-300 hover:text-green-500 duration-300'
                href='https://www.linkedin.com/in/sarthak-dubey-1b63ab250/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Full Stack developer
              </a> I specialize in both MEAN and MERN stacks🚀.
              <br />
              ✍️ Beyond coding, I love sharing my insights and experiences on my Instagram 
              <a
                className='text-purple-300 hover:text-purple-400 duration-300'
                href="https://www.instagram.com/_sarthak_dubeyyy_/?igsh=bTZyNjZ4MWlpanR2"
                target='_blank'
                rel='noopener noreferrer'
              >
                Instagram
              </a>,
              On a different note, I'm also into photography📸. It's not just a hobby; I see it as a way to capture moments🌟📷, tell stories.
            </p>

            <ButtonLink
              url='https://drive.google.com/file/d/1kgWuY3ih0CRYxuE7v8ZDCTFOcW89o3mt/view?usp=drive_link'
              text='View Resume →'
              padding={`p-3`}
            />
          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </article>
      </section>
      <Footer />
    </div>
  );
};

export default About;
