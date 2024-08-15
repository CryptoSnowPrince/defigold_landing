import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import monkeyLight from '../assets/img/monkeyLight.gif';
import DNA from '../assets/img/DNA-2.gif';
import monkeyGroup from '../assets/img/monkeyGroup.webp';
import Logo from '../assets/img/icon.svg';
import ArrowLogo from './arrowlogo';

gsap.registerPlugin(ScrollTrigger);

const Launchpad = ({ skipped }) => {
  useEffect(() => {
    const launchpadMonkey = gsap.timeline({
      scrollTrigger: {
        trigger: '.runes',
        start: skipped ? 'top bottom+=150px' : 'top bottom+=100px',
        end: skipped ? 'bottom center+=150px' : 'bottom center+=100px',
        scrub: 1,
        markers: false,
        onEnter: ({ progress, direction, isActive }) => {
          gsap.fromTo(
            '.launchpadMonkey',
            { y: '30%', opacity: 0 },
            { y: '0%', opacity: 1, duration: 1, ease: 'power2.inOut' }
          );
        },
        onLeave: ({ progress, direction, isActive }) => {
          gsap.fromTo(
            '.launchpadMonkey',
            { y: '0%', opacity: 1 },
            { y: '30%', opacity: 0, duration: 1, ease: 'power2.inOut' }
          );
        },
        onEnterBack: ({ progress, direction, isActive }) => {
          gsap.fromTo(
            '.launchpadMonkey',
            { y: '30%', opacity: 0 },
            { y: '0%', opacity: 1, duration: 1, ease: 'power2.inOut' }
          );
        },
        onLeaveBack: ({ progress, direction, isActive }) => {
          gsap.fromTo(
            '.launchpadMonkey',
            { y: '0%', opacity: 1 },
            { y: '30%', opacity: 0, duration: 1, ease: 'power2.inOut' }
          );
        },
      },
    });

    // Refresh ScrollTrigger after the initial load
    ScrollTrigger.refresh();

    return () => {
      launchpadMonkey.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className='runes relative flex w-screen flex-col items-center overflow-hidden lg:pt-5 h-fit px-5 md:flex-row md:px-5 xl:h-screen xl:flex-row xl:px-0'>
      <div className='flex w-[100%] flex-col justify-end md:h-[70%] md:w-[40%] md:flex-row xl:h-[70%] xl:w-[40%] xl:flex-row'>
        <h3 className='font-teko text-[12.8vw] pt-4 font-medium leading-[43.2px] text-white md:hidden md:text-[5.10vw] md:leading-[100%] xl:hidden'>
          The <span className='text-gold'>DeFi.Gold</span> Runes <br />
          Launchpad
        </h3>

        <div className='launchpadMonkey m:w-[70%] my:mt-0 my-5 h-[50vw] w-[100%] xl:my-0 xl:w-[70%]'>
          <div className='background-overlay'></div>
          <img
            className='fallingStars m-auto h-[75vw] w-[56vw] md:m-0 md:h-[40vw] md:w-[27vw] xl:h-[28vw] xl:w-[19vw]'
            src={monkeyLight}
            alt=''
          />
          <img
            className='fallingDna m-auto w-[68vw] md:m-0 md:w-full'
            src={DNA}
            alt=''
          />
          <img
            className='fallingMonkey m-auto h-[100.8vw] w-[76vw] md:m-0 md:h-[auto] md:w-full xl:w-full'
            src={monkeyGroup}
            alt=''
          />
        </div>
      </div>
      <div className='flex w-[10%] justify-end opacity-0 md:h-[70%] xl:h-[70%]'></div>
      <div className='runes__content flex h-[100%] w-[100%] flex-col md:h-[70%] md:w-[45%] xl:h-[70%] xl:w-[45%]'>
        <h3 className='hidden font-teko text-[12.8vw] font-medium leading-[43.2px] text-white md:inline md:text-[5.10vw] md:leading-[4.59vw] xl:inline'>
          The <span className='text-gold'>DeFi.Gold</span> Runes <br />
          Launchpad
        </h3>
        <p className='mt-5 hidden font-teko text-[8.53vw] text-gold md:inline md:text-[2.60vw] xl:inline'>
          Empowering Creators and Projects
        </p>
        <div className='md:[100%] mb-auto flex h-fit flex-col xl:mt-auto xl:w-[70%]'>
          <div className='flex flex-col gap-x-3 border-y-[1px] border-white border-opacity-10 py-5 md:mt-5 md:flex-row md:items-center md:py-5 xl:flex-row xl:items-center xl:py-5'>
            <img className='hidden md:inline xl:inline' src={Logo} alt='' />
            <ArrowLogo />
            <p className='text-lg leading-6 md:text-2xl mt-2.5 font-sfui text-white md:mt-0'>
              Enables projects to sell their tokens directly to the community
            </p>
          </div>
          <div className='flex flex-col gap-x-3 py-5 md:mt-5 md:flex-row md:items-center md:py-5 xl:mt-0 xl:flex-row xl:items-center xl:pb-5'>
            <img className='hidden md:inline xl:inline' src={Logo} alt='' />
            <ArrowLogo />
            <p className='text-lg leading-6 md:text-2xl mt-2.5 font-sfui text-white md:mt-0'>
              Uses a quadratic bonding curve for fair pricing and liquidity
            </p>
          </div>
          <div className='flex flex-col gap-x-3 border-y-[1px] border-white border-opacity-10 py-5 md:mt-5 md:flex-row md:items-center md:py-5 xl:mt-0 xl:flex-row xl:items-center xl:py-5 mb-[60px] md:mb-0'>
            <img className='hidden md:inline xl:inline' src={Logo} alt='' />
            <ArrowLogo />
            <p className='text-lg leading-6 md:text-2xl mt-2.5 font-sfui text-white md:mt-0'>
              Opens new avenues for project funding and community engagement
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Launchpad;
