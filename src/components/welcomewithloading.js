import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import Logo from '../assets/img/logo.svg';
import flameVideo from '../assets/img/flames.mp4';
import lavaVideo from '../assets/img/lava.mp4';
import heroImage from '../assets/img/hero.webp';
import AnimLine from '../assets/img/animated_lines.png';
import ExAnimLine from '../assets/img/ex_animated_lines.png';

const useGSAP = (
  loadingRef,
  loadingTextRef,
  loadingProgressRef,
  welcomeRef,
  globeParentRef,
  welcomeTextRef,
  prevStatus,
  setPercent,
  setIsLoaded
) => {
  useEffect(() => {
    if (prevStatus) setIsLoaded(true);
    const loading = loadingRef.current;
    const welcome = welcomeRef.current;
    const globeParent = globeParentRef.current;
    const welcomeText = welcomeTextRef.current;

    const image = new Image();
    const flameVid = document.createElement('video');
    const lavaVid = document.createElement('video');

    const assets = [
      { type: 'image', src: heroImage, element: image },
      { type: 'video', src: flameVideo, element: flameVid },
      { type: 'video', src: lavaVideo, element: lavaVid },
    ];

    let loadedAssets = 0;

    const handleAssetLoad = () => {
      loadedAssets += 1;
      const percentValue = Math.floor((loadedAssets / assets.length) * 100);
      setPercent(percentValue);

      gsap.to(loadingProgressRef.current, { width: `${percentValue}%` });

      if (loadedAssets === assets.length && !prevStatus) {
        setTimeout(() => {
          gsap.to(loading, {
            opacity: 0,
            duration: 1,
            onComplete: () => {
              setIsLoaded(true);
              gsap.fromTo(welcome, { opacity: 0 }, { opacity: 1, duration: 1 });
              gsap.fromTo(
                globeParent,
                { scale: 0.3, x: '-60%', y: '-30vw' },
                { scale: 1, x: 0, y: 0, duration: 2.5 }
              );
              gsap.fromTo(
                welcomeText,
                { opacity: 0 },
                { opacity: 1, duration: 1, delay: 1 }
              );
            },
          });
        }, 500);
      }
    };

    assets.forEach(({ type, src, element }) => {
      element.src = src;
      if (type === 'image') {
        element.onload = handleAssetLoad;
        element.onerror = handleAssetLoad;
      } else if (type === 'video') {
        element.oncanplaythrough = handleAssetLoad;
        element.onerror = handleAssetLoad;
      }
    });

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

    return () => {
      assets.forEach(({ type, element }) => {
        if (type === 'image') {
          element.onload = null;
          element.onerror = null;
        } else if (type === 'video') {
          element.oncanplaythrough = null;
          element.onerror = null;
        }
      });
    };
  }, [
    loadingRef,
    loadingTextRef,
    loadingProgressRef,
    welcomeRef,
    globeParentRef,
    welcomeTextRef,
    prevStatus,
    setPercent,
    setIsLoaded,
  ]);
};

const WelcomeWithLoading = ({ prevStatus }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [percent, setPercent] = useState(0);
  const loadingRef = useRef(null);
  const loadingTextRef = useRef(null);
  const loadingProgressRef = useRef(null);
  const welcomeRef = useRef(null);
  const globeParentRef = useRef(null);
  const welcomeTextRef = useRef(null);

  useGSAP(
    loadingRef,
    loadingTextRef,
    loadingProgressRef,
    welcomeRef,
    globeParentRef,
    welcomeTextRef,
    prevStatus,
    setPercent,
    setIsLoaded
  );

  console.log(isLoaded, prevStatus);

  return (
    <>
      {!isLoaded && !prevStatus && (
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
              {percent}%
            </p>
          </div>
        </div>
      )}

      <div
        ref={welcomeRef}
        className={`welcome-content ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-1000 relative ease-in-out flex flex-col items-center mx-auto z-[1]`}
      >
        <div
          ref={globeParentRef}
          className='globe_parent flex flex-col items-center bg-dark-text z-10 overflow-x-hidden mx-auto h-[calc(100vh - 62px)] sm:h-[calc(100vh - 92px)]'
        >
          <div className='relative max-sm:mt-[58px]'>
            <video
              className='globe_container_flame'
              autoPlay
              playsInline
              loop
              muted
            >
              <source src={flameVideo} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
            <div className='globe__container relative z-[1] h-[90vw] w-[90vw] overflow-hidden rounded-full md:h-[36.5vw] md:w-[36.5vw]'>
              <img className='absolute w-full' src={heroImage} alt='' />
              <video
                className='absolute -z-10 w-full rounded-full p-[2.5vw] md:p-[0.5vw]'
                autoPlay
                playsInline
                loop
                muted
              >
                <source src={lavaVideo} type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        <div
          ref={welcomeTextRef}
          className='welcome-text z-[10] sm:mx-auto mt-[-70px] xl:mt-[-147px] px-5 gap-2.5 sm:gap-0'
        >
          <p className='font-medium text-[74px] leading-[66px] md:text-6xl xl:text-[202px] xl:leading-[182px] sm:text-center text-base-text'>
            Welcome to <span className='text-gold'>DeFi.Gold</span>
          </p>
          <p className='font-sfui text-[22px] leading-[28px] sm:text-[34px] sm:leading-[44px] sm:text-center'>
            Revolutionizing the Bitcoin Blockchain
          </p>
        </div>
        <div className='hidden lg:block right-anim z-0 top-0 overflow-hidden'>
          <img src={ExAnimLine} alt='lines' className='h-[70vh]' />
        </div>
        <div className='hidden lg:block z-0 left-anim top-0 overflow-hidden'>
          <img src={ExAnimLine} alt='lines' className='h-[70vh]' />
        </div>
        <div className='lg:hidden z-0 main-anim top-0 overflow-hidden'>
          <img src={AnimLine} alt='lines' className='h-[70vh]' />
        </div>
      </div>
    </>
  );
};

export default WelcomeWithLoading;
