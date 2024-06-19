import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import galaxy from '../assets/img/galaxy.webp';
import sparkle1 from '../assets/img/sparkles-bottom.webp';
import sparkle2 from '../assets/img/sparkles.webp';
import FlowDirection from './flowdirection';
import './css/features.css';

const Features = () => {
  useEffect(() => {
    const yellowStairs = gsap.timeline({
      scrollTrigger: {
        trigger: '.yellow-stairs',
        start: 'top 100%',
        end: 'bottom 0%',
        scrub: 0.5,
        timeScale: 0.2,
      },
    });

    yellowStairs
      .addLabel('stairsStart')
      .to('.steps', { x: '-50vw', ease: 'power2.inOut' })
      .addLabel('stairsMid')
      .to('.steps', { x: '-100vw', ease: 'power2.inOut' })
      .addLabel('stairsEnd');

    return () => {
      yellowStairs.scrollTrigger.kill();
      yellowStairs.kill();
    };
  }, []);
  return (
    <div className='flex flex-col h-screen md:h-full relative'>
      <div className='yellow-stairs absolute left-0 top-[0%] z-[99] hidden w-full flex-col overflow-hidden bg-transparent md:flex'>
        <div className='steps h-[78px] w-[150vw] bg-[#EFB325]'></div>
        <div className='steps h-[78px] w-[125vw] bg-[#EFB325]'></div>
        <div className='steps h-[78px] w-[100vw] bg-[#EFB325]'></div>
        <div className='steps h-[78px] w-[75vw] bg-[#EFB325]'></div>
      </div>
      <div className='relative flex flex-col w-screen'>
        <div className='hidden md:flex flex-col w-1/2 mx-auto pt-36 lg:pt-52 gap-5'>
          <h1 className='text-center text-base-text text-[64px] leading-[56px] lg:text-[98px] lg:leading-[88px]'>
            A Unified DEX for All Bitcoin Assets
          </h1>
          <h3 className='text-gold text-center text-[38px] leading-8 lg:text-[50px] lg:leading-[45px]'>
            Comprehensive Trading Solutions on DeFi.Gold
          </h3>
        </div>
        <div className='md:hidden flex flex-col px-5 pt-[60px] gap-2.5'>
          <h1 className='text-base-text text-5xl leading-[43px]'>
            A Unified DEX for All Bitcoin Assets
          </h1>
          <h3 className='text-gold text-[32px] leading-7'>
            Comprehensive Trading Solutions on DeFi.Gold
          </h3>
        </div>
        {/* <div className='hidden md:block mx-auto pt-8'>
          <FlowDirection />
        </div> */}
        <div className='relative -mt-5 md:mt-10 md:h-screen'>
          <div className='absolute top-8 md:top-2 left-1/2 -translate-x-1/2'>
            <FlowDirection />
          </div>
          <div className='galaxy absolute left-1/2 h-[150vw] w-[150vw] translate-x-[-50%] rounded md:top-[20%] md:h-[48.95vw] md:w-[48.95vw] md:translate-y-[-20%]'>
            <div className='relative h-full w-full'>
              <img
                src={galaxy}
                className='galaxy__image absolute h-full w-full'
                alt=''
              />
              <img
                src={sparkle1}
                className='sparkles__image-top absolute h-full w-full'
                alt=''
              />
              <img
                src={sparkle2}
                className='sparkles__image-bottom absolute h-full w-full'
                alt=''
              />
            </div>
          </div>
          <div className='feature-container flex flex-col justify-center'>
            sdjdkjkd
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
