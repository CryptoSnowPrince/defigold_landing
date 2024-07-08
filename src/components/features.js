import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import galaxy from '../assets/img/galaxy.webp';
import sparkle1 from '../assets/img/sparkles-bottom.webp';
import sparkle2 from '../assets/img/sparkles.webp';
// import FlowDirection from './flowdirection';
import './css/features.css';

const Features = () => {
  const [currentFeature, setCurrentFeature] = useState(1);
  const featuresContainerRef = useRef(null);
  const featureProgressRef = useRef(null);
  const galaxyRef = useRef(null);
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

    gsap.to(featuresContainerRef.current, {
      x: `${(index - 1) * -100}vw`,
      duration: 0.8,
      ease: 'power2.inOut',
    });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const galaxyTimeline = gsap.timeline({ paused: true, timeScale: 0.2 });
    galaxyTimeline.to(galaxyRef.current, {
      top: '20%',
      scale: 1,
      duration: 1,
    });

    const playImageAnimation = () => {
      galaxyTimeline.play();
    };

    gsap.fromTo(
      galaxyRef.current,
      {
        top: '35%',
        scale: 1.4,
      },
      {
        top: '20%',
        scale: 1,
        onStart: () => playImageAnimation(),
        scrollTrigger: {
          trigger: '.galaxy',
          start: 'top 70%',
          end: 'center 70%',
          scrub: true,
          timeScale: 0.2,
        },
      }
    );
    gsap.to(featureProgressRef.current, {
      width: `${(1 / totalFeatures) * 100}%`,
    });
    return () => {
      galaxyTimeline.kill();
    };
  }, []);

  return (
    <div className='flex flex-col h-screen md:h-full relative overflow-hidden'>
      <div className='relative flex flex-col w-screen md:h-full h-screen'>
        <div className='galaxy_area relative -mt-5 md:mt-10 md:h-screen'>
          <div
            ref={galaxyRef}
            className='galaxy absolute left-1/2 h-[150vw] w-[150vw] translate-x-[-50%] rounded md:top-[20%] md:h-[48.95vw] md:w-[48.95vw] md:translate-y-[-20%]'
          >
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
              <div className='info absolute top-[60%] overflow-hidden flex w-full flex-col items-center md:top-[25%] xl:top-[40%]'>
                <div className='w-fit'>
                  <p className='flex gap-1 font-sf text-base font-bold uppercase leading-4 text-white'>
                    Feature <span id='currentSlide'>{currentFeature}</span> of{' '}
                    {totalFeatures}
                  </p>
                </div>
                <div className='bg-dark-box rounded-sm h-1 w-32 flex'>
                  <div
                    ref={featureProgressRef}
                    className='bg-gold rounded-sm h-1'
                  ></div>
                </div>
              </div>
              <div className='controls absolute left-1/2 z-[10] flex translate-x-[-50%] space-x-[2vw] bottom-0 md:bottom-[30%] xl:bottom-[20%]'>
                <button
                  className='prev-feature flex size-14 items-center justify-center rounded border border-[#F8f8f81a] p-5 transition-all delay-100 ease-in hover:border-gold 2xl:size-20'
                  onClick={() =>
                    changeFeature(
                      currentFeature === 1 ? totalFeatures : currentFeature - 1
                    )
                  }
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
                  onClick={() =>
                    changeFeature(
                      currentFeature === totalFeatures ? 1 : currentFeature + 1
                    )
                  }
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
                className='features__container overflow-x-hidden flex h-full w-[400vw] translate-x-0 md:w-[200vw] xl:translate-y-10 md:-translate-y-14 translate-y-36'
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
