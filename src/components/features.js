import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import galaxy from '../assets/img/galaxy.webp';
import sparkle1 from '../assets/img/sparkles-bottom.webp';
import sparkle2 from '../assets/img/sparkles.webp';
import FlowDirection from './flowdirection';
import './css/features.css';

const Features = () => {
  const [currentFeature, setCurrentFeature] = useState(1);
  const featuresContainerRef = useRef(null);
  const featureProgressRef = useRef(null);
  const totalFeatures = 4;

  const featureTitles = [
    'Fully Support',
    'Trading',
    'Integrations',
    'Transactions',
  ];

  const featureDescriptions = [
    'First Bitcoin DEX to fully support Taproot, RGB and Rune based fungible tokens.',
    'Non custodial trading of DAO tokens, security tokens, stablecoins, derivative tokens, utility tokens, meme tokens and others.',
    'Seamless integration with major Bitcoin web wallet extensions for a unified trading experience.',
    'Full support for Lightning network transactions for Taproot and RGB based assets.',
  ];

  const changeFeature = (index) => {
    if (index < 1 || index > totalFeatures) return;

    setCurrentFeature(index);

    gsap.to(featureProgressRef.current, {
      width: `${(index / totalFeatures) * 100}%`,
    });

    gsap.to(`.feature-${index}__main`, {
      opacity: 1,
      duration: 0.4,
    });
    gsap.fromTo(
      `.feature-${index}__side`,
      {
        opacity: 0,
        scale: 1.5,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
      }
    );

    for (let i = 1; i <= totalFeatures; i++) {
      if (i !== index) {
        gsap.to(`.feature-${i}__main`, {
          opacity: 0.3,
          duration: 0.1,
        });
        gsap.to(`.feature-${i}__side`, {
          opacity: 0,
          duration: 0,
        });
      }
    }

    // Move the container to show the current feature
    const offset = (index - 1) * -100; // Calculate the offset for the current feature
    gsap.to(featuresContainerRef.current, {
      x: `${offset}vw`,
      duration: 0.8,
    });
  };

  const handleNextFeature = () => {
    changeFeature(currentFeature === totalFeatures ? 1 : currentFeature + 1);
  };

  const handlePrevFeature = () => {
    changeFeature(currentFeature === 1 ? totalFeatures : currentFeature - 1);
  };

  useEffect(() => {
    changeFeature(1);
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
    <div className='flex flex-col h-screen md:h-full relative overflow-x-hidden'>
      <div className='yellow-stairs absolute left-0 top-[0%] z-[99] hidden w-full flex-col overflow-hidden bg-transparent md:flex'>
        <div className='steps h-[78px] w-[150vw] bg-[#EFB325]'></div>
        <div className='steps h-[78px] w-[125vw] bg-[#EFB325]'></div>
        <div className='steps h-[78px] w-[100vw] bg-[#EFB325]'></div>
        <div className='steps h-[78px] w-[75vw] bg-[#EFB325]'></div>
      </div>
      <div className='relative flex flex-col w-screen xl:h-screen md:h-full h-screen'>
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
          <div className='feature-container'>
            <div className='feature-slider overflow-hidden'>
              <div className='info absolute top-[40%] overflow-hidden flex w-full flex-col items-center gap-3 md:top-[35%]'>
                <div className='w-fit'>
                  <p className='flex gap-1 font-sf text-base font-bold uppercase leading-4 text-white'>
                    Feature <span id='currentSlide'>{currentFeature}</span> of{' '}
                    {totalFeatures}
                  </p>
                  <div className='mt-3 h-1.5 w-full rounded-full bg-dark-box'>
                    <div
                      ref={featureProgressRef}
                      className='feature-progress h-1.5 rounded-full bg-gold p-0.5 text-center text-xs font-medium leading-none text-white'
                    ></div>
                  </div>
                </div>
              </div>
              <div className='controls absolute left-1/2 z-[10] flex translate-x-[-50%] space-x-[2vw]'>
                <button
                  className='prev-feature flex size-14 items-center justify-center rounded border border-[#F8f8f81a] p-5 transition-all delay-100 ease-in hover:border-gold 2xl:size-20'
                  onClick={handlePrevFeature}
                >
                  <svg
                    width='11'
                    height='18'
                    viewBox='0 0 11 18'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M10.1334 17.2666L1.86676 8.99994L10.1334 0.73327'
                      stroke='#fff'
                      strokeWidth='2.5'
                    />
                  </svg>
                </button>
                <button
                  className='next-feature flex size-14 items-center justify-center rounded border border-[#F8f8f81a] p-5 transition-all delay-100 ease-in hover:border hover:border-gold 2xl:size-20'
                  onClick={handleNextFeature}
                >
                  <svg
                    width='11'
                    height='18'
                    viewBox='0 0 11 18'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M0.866573 0.733398L9.13324 9.00006L0.866573 17.2667'
                      stroke='#fff'
                      strokeWidth='2.5'
                    />
                  </svg>
                </button>
              </div>
              <div
                className='features__container overflow-x-hidden flex h-full w-[400vw] translate-x-0 md:w-[200vw] md:translate-y-4 translate-y-12'
                ref={featuresContainerRef}
              >
                {featureTitles.map((title, index) => (
                  <div
                    key={index}
                    className={`feature flex w-[100vw] flex-col items-center justify-center md:w-1/3 feature-${
                      index + 1
                    }`}
                  >
                    <h4
                      className={`md:text[65px] md:leading-[56px] xl:text-[98px] xl:leading-[88px] text-[48px] leading-[43px] feature-${
                        index + 1
                      }__main mt-7 font-teko font-medium text-white ${
                        currentFeature === index + 1
                          ? 'opacity-100'
                          : 'opacity-30'
                      }`}
                    >
                      {title}
                    </h4>
                    <p
                      className={`side__text feature-${
                        index + 1
                      }__side text-center font-sf w-3/5 md:w-1/4 text-white text-lg leading-6 md:text-2xl ${
                        currentFeature === index + 1
                          ? 'opacity-100'
                          : 'opacity-0'
                      }`}
                    >
                      {featureDescriptions[index]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
