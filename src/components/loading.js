import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Logo from '../assets/img/logo.svg';

const Loading = () => {
  const loadingRef = useRef(null);
  const loadingTextRef = useRef(null);
  const loadingProgressRef = useRef(null);

  useEffect(() => {
    const lodingText = loadingTextRef.current;
    const loding = loadingRef.current;

    const heroTimeline = gsap.timeline({
      onComplete: () => {
        gsap.to(loding, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            loding.style.display = 'none';
          },
        });
      },
    });

    heroTimeline.to(loadingProgressRef.current, {
      duration: 2.5,
      width: '100%',
      onUpdate: function () {
        const progress = Math.round(this.progress() * 100);
        lodingText.innerText = `${progress}%`;
      },
    });
  }, []);

  return (
    <div
      ref={loadingRef}
      className='loading fixed top-0 z-40 flex h-screen w-screen flex-col items-center justify-center gap-y-5 bg-black-600'
    >
      <img src={Logo} className='h-20 md:h-[5vw]' alt='' />
      <p className='font-teko text-[8vw] text-white md:text-[2.604vw]'>
        DeFi.Gold
      </p>

      <div className='progress_wrapper mx-auto flex w-[80%] flex-col items-center justify-center'>
        <div ref={loadingProgressRef} className='loading__progress'></div>
        <p
          ref={loadingTextRef}
          className='loading__text mt-4 font-teko text-3xl font-light text-gold min-h-[36px]'
        >
          0%
        </p>
      </div>
    </div>
  );
};

export default Loading;
