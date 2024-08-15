import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import RightArrow from './rightarrow';
import LeftArrow from './leftarrow';
import BtcImage from '../assets/img/contactFormAssets/bitcoinImage.png';

const Pioneer = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.to(imgRef.current, {
      rotationY: '+=360', // continuously rotate
      duration: 6, // duration of the animation
      ease: 'linear', // linear easing for smooth continuous flip
      repeat: -1, // repeat infinitely
    });
  }, []);

  return (
    <>
      <div className='hidden md:flex flex-col h-screen md:h-full 2xl:h-screen w-screen bg-gold px-5 md:px-8 lg:px-16 2xl:px-[250px] sm:pt-[100px]'>
        <h1 className='font-medium text-[98px] pb-20 leading-[88px] text-center sm:w-[50vw] md:w-[70vw] mx-auto text-dark-text'>
          Pioneering on Bitcoin's Blockchain
        </h1>
        <div className='grid grid-cols-3 gap-5'>
          <div className='flex flex-col justify-between'>
            <div className='flex flex-col'>
              <RightArrow />
              <h1 className='text-[50px] leading-[45px] text-dark-text pt-[15px] pb-2.5'>
                Scalability
              </h1>
              <span className='text-2xl text-dark-text'>
                Handles more transactions at lower costs
              </span>
            </div>
            <div className='flex flex-col'>
              <RightArrow />
              <h1 className='text-[50px] leading-[45px] text-dark-text pt-[15px] pb-2.5'>
                Advanced Features
              </h1>
              <span className='text-2xl text-dark-text'>
                Expands DeFi services beyond Ethereum's capabilites
              </span>
            </div>
          </div>
          <img src={BtcImage} alt='bitcoin' />
          <div className='flex flex-col justify-between'>
            <div className='flex flex-col'>
              <LeftArrow />
              <h1 className='text-[50px] leading-[45px] text-dark-text text-end pt-[15px] pb-2.5'>
                Efficiency
              </h1>
              <span className='text-2xl text-dark-text text-end'>
                Faster transactions, lower fees using Bitcoin's robust network
              </span>
            </div>
            <div className='flex flex-col'>
              <LeftArrow />
              <h1 className='text-[50px] leading-[45px] text-dark-text text-end pt-[15px] pb-2.5'>
                Innnovation
              </h1>
              <span className='text-2xl text-dark-text text-end'>
                Leverages Bitcoin for a broader range of decentralized
                applications
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='md:hidden flex flex-col relative bg-gold h-screen w-screen'>
        <div className='absolute top-0 right-0' style={{ perspective: 1000 }}>
          <img
            className='w-[120px] h-[120px]'
            style={{ transformStyle: 'preserve-3d' }}
            ref={imgRef}
            src={BtcImage}
            alt='bitcoin'
          />
        </div>
        <div className='flex flex-col pt-[85px] px-5 gap-5'>
          <h1 className='pb-2.5 text-dark-text font-medium text-3xl md:leading-6 md:text-3xl xl:text-5xl xl:leading-[43px] '>
            Pioneering on
            <br />
            Bitcoin's Blockchain
          </h1>
          <div className='flex flex-col text-dark-text'>
            <RightArrow />
            <h1 className='pt-5 pb-1 text-[32px] leading-7'>Scalability</h1>
            <h2 className='text-lg leading-[24px] font-sfui'>
              Handles more transactions at lower costs
            </h2>
          </div>
          <div className='flex flex-col text-dark-text'>
            <RightArrow />
            <h1 className='pt-5 pb-1 text-[32px] leading-7'>
              Advanced Features
            </h1>
            <h2 className='text-lg leading-[24px] font-sfui'>
              Expands DeFi services beyond Ethereum's capabilites
            </h2>
          </div>
          <div className='flex flex-col text-dark-text'>
            <RightArrow />
            <h1 className='pt-5 pb-1 text-[32px] leading-7'>Efficiency</h1>
            <h2 className='text-lg leading-[24px] font-sfui'>
              Faster transactions, lower fees using Bitcoin's robust network
            </h2>
          </div>
          <div className='flex flex-col text-dark-text'>
            <RightArrow />
            <h1 className='pt-5 pb-1 text-[32px] leading-7'>Innnovation</h1>
            <h2 className='text-lg leading-[24px] font-sfui'>
              Leverages Bitcoin for a broader range of decentralized
              applications
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pioneer;
