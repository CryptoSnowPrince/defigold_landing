import { useEffect } from 'react';
import gsap from 'gsap';
import FlowDirection from './flowdirection';

const Stairs = ({ skipped }) => {
  useEffect(() => {
    let yellowStairs = gsap.timeline({
      scrollTrigger: {
        trigger: '.yellow-stairs',
        start: 'top 200%',
        end: 'bottom 20%',
        scrub: 0.5,
        timeScale: 0.2,
      },
    });
    if (skipped) {
      console.log('here');
      yellowStairs = gsap.timeline({
        scrollTrigger: {
          trigger: '.yellow-stairs',
          start: 'top 200%',
          end: 'bottom 120%',
          scrub: 0.5,
          timeScale: 0.2,
        },
      });
    }

    yellowStairs
      .addLabel('stairsStart')
      .to('.steps', { x: '-50vw', ease: 'power2.inOut' })
      .addLabel('stairsMid')
      .to('.steps', { x: '-110vw', ease: 'power2.inOut' })
      .addLabel('stairsEnd');

    return () => {
      yellowStairs.scrollTrigger.kill();
      yellowStairs.kill();
    };
  }, [window.location.hash]);

  return (
    <div className='relative w-screen'>
      <div className='yellow-stairs absolute left-0 top-[0%] z-[99] hidden w-full flex-col overflow-hidden bg-transparent md:flex'>
        <div className='steps h-16 xl:h-[88px] w-[150vw] bg-[#EFB325]'></div>
        <div className='steps h-16 xl:h-[88px] w-[125vw] bg-[#EFB325]'></div>
        <div className='steps h-16 xl:h-[88px] w-[100vw] bg-[#EFB325]'></div>
        <div className='steps h-16 xl:h-[88px] w-[75vw] bg-[#EFB325]'></div>
      </div>
      <div className='hidden md:flex flex-col w-1/2 mx-auto pt-20 lg:pt-32 xl:pt-48 gap-5 justify-center'>
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
      <div className='flex justify-center'>
        <FlowDirection />
      </div>
    </div>
  );
};

export default Stairs;
