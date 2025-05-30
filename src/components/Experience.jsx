import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants';
import Footer from './Footer';

const Experience = () => {
  return (
    <div className='experience bg-black w-screen text-white pt-16 overflow-x-hidden' id='experience'>
      <div className='pt-12 sm:px-16 px-6'>
        <p className='font-light text-sm sm:text-base'>MY JOURNEY SO FAR.</p>
        <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Achievements.</h2>
      </div>

      <VerticalTimeline className='mt-9'>
        {experiences.map((experience, index) => (
          <VerticalTimelineElement
            key={`experience-${index}`}
            className='relative vertical-timeline-element--work'
            contentStyle={{ background: "#1d1836", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #232631" }}
            date={experience.duration}
            iconStyle={{
              background: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '12px',
              color: '#000',
              cursor: 'pointer'
            }}
            icon={
              <a
                href={experience.url}
                target='_blank'
                rel='noopener noreferrer'
                className='w-full h-full flex items-center justify-center no-underline text-black'
              >
                LINK
              </a>
            }
          >
            <div>
              <h3 className='text-white text-[20px] sm:text-[24px] font-bold'>{experience.role}</h3>
              <p className='text-gray-400 text-[14px] sm:text-[16px] font-semibold' style={{ margin: 0 }}>
                {experience.company}
              </p>
            </div>

            <ul className='mt-4 list-disc ml-5 space-y-2'>
              {experience.points.map((point, idx) => (
                <li
                  key={`experience-point-${idx}`}
                  className='text-white text-[14px] tracking-wider'
                >
                  {point}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

      <Footer />
    </div>
  );
};

export default Experience;
