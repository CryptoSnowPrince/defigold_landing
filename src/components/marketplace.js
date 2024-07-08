import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DoughnutChart from './doughnut';
import parachutesImg from '../assets/img/compressed/Parachutes.webp';
import cityImg from '../assets/img/city.webp';
import lightsImg from '../assets/img/lights.svg';
import './css/components.css';

gsap.registerPlugin(ScrollTrigger);

const MarketPlace = () => {
  const horizontalLineRef = useRef(null);
  const verticalLineRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    const t2 = gsap.timeline({ repeat: -1 });

    // Define the animation
    tl.fromTo(
      horizontalLineRef.current,
      { strokeDashoffset: 0 }, // start offset (match this value with strokeDasharray for seamless animation)
      { strokeDashoffset: -12, duration: 0.5, ease: 'linear' } // end offset
    );
    t2.fromTo(
      verticalLineRef.current,
      { strokeDashoffset: 0 }, // start offset (match this value with strokeDasharray for seamless animation)
      { strokeDashoffset: -12, duration: 0.5, ease: 'linear' } // end offset
    );

    gsap.to('.newHomeCity', {
      opacity: 1,
      y: '-=70',
      duration: 1.5,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: '.newHomeCity',
        start: 'top bottom',
        end: 'bottom top',
      },
    });

    const lights = gsap.utils.toArray(document.querySelectorAll('.lights'));
    lights.forEach((light) => {
      gsap.fromTo(
        light,
        { opacity: '100%' },
        { opacity: '40%', duration: 2, repeat: -1, ease: 'none', yoyo: true }
      );
    });
    var section = document.querySelector('.nft');

    ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      pin: false,
      pinSpacing: false,
      scrub: 0.5,
    });

    const cityTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.nft',
        start: window.width > 768 ? '-30% top' : '0% center',
        end: window.width > 768 ? '110% bottom' : '15% bottom',
        scrub: 1, // Smooth animation
        timeScale: 0.2,
        toggleActions: 'reverse none none none',
      },
    });
    cityTl
      .fromTo(
        '.parachutes',
        {
          yPercent: window.innerWidth < 768 ? -30 : -80,
          opacity: 0,
        },
        {
          opacity: 1,
          yPercent: -20,
          duration: 2,
        }
      )
      .from(
        '.city',
        {
          y: window.innerWidth < 768 ? 10 : 30,
          duration: 1,
        },
        '<'
      );

    lights.forEach((light) => {
      gsap.fromTo(
        light,
        { opacity: '100%' },
        { opacity: '40%', duration: 2, repeat: -1, ease: 'none', yoyo: true }
      );
    });
  }, []);
  const bannerText = 'New Home for Bitcoin NFTs - ';
  return (
    <div className='w-screen h-full flex flex-col'>
      <div className='marquee text-5xl leading-[45px] text-dark-text'>
        <div className='marquee-content'>
          <span className='mr-1'>{bannerText.repeat(20)}</span>
          <span className='mr-1'>{bannerText.repeat(20)}</span>
        </div>
      </div>
      <div className='nft md:mt-[60px] flex w-full flex-col-reverse justify-center pb-[10vw] md:flex-row md:gap-[3.64vw] md:pb-0'>
        <DoughnutChart />
        <div className='flex flex-col h-full w-full md:w-[45%]'>
          <div className='mt-11 flex flex-col w-full'>
            <div className='hidden w-[514px] xl:inline'>
              <svg
                ref={horizontalLineRef}
                width='507'
                height='1'
                viewBox='0 0 507 1'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clipPath='url(#clip0_198_640)'>
                  <path
                    d='M-429 0.5H507'
                    stroke='#F8F8F8'
                    strokeDasharray='6 6'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_198_640'>
                    <rect width='507' height='1' fill='white' />
                  </clipPath>
                </defs>
              </svg>
              <div className='ml-auto mr-1 w-fit'>
                <svg
                  ref={verticalLineRef}
                  width='1'
                  height='70'
                  viewBox='0 0 1 70'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clipPath='url(#clip0_198_642)'>
                    <path
                      d='M0.5 -429L0.499978 70'
                      stroke='#F8F8F8'
                      strokeDasharray='6 6'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_198_642'>
                      <rect
                        width='70'
                        height='0.999997'
                        fill='white'
                        transform='translate(1) rotate(90)'
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className='-mr-[3px] ml-auto mt-1 w-fit'>
                <svg
                  width='15'
                  height='10'
                  viewBox='0 0 15 10'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M0 0L15 6.55671e-07L7.5 10L0 0Z' fill='#F8F8F8' />
                </svg>
              </div>
            </div>
            <a
              href='https://nft.defi.gold'
              target='_blank'
              rel='noreferrer'
              className='hidden md:inline mr-[160px] mt-9'
            >
              <p className='text-gold text-[50px] leading-[45px] text-end'>
                DeFi.Gold NFT Marketplace
              </p>
            </a>
            <div className='city relative mt-2 md:mt-12 px-2.5'>
              <img
                src={parachutesImg}
                alt=''
                className='parachutes absolute left-[5%] md:left-0 md:top-[10%] md:h-[350px] md:w-[684px]'
              />
              <div className='newHomeCity'>
                <img src={cityImg} alt='Defi Gold City' className='w-full' />
                <div className='lights absolute bottom-8 md:bottom-20 left-[10%] -z-10'>
                  <img
                    src={lightsImg}
                    className='md:h-[180px] h-[87px]'
                    alt='light'
                  />
                </div>
                <div className='lights absolute bottom-8 md:bottom-20 right-[10%] -z-10'>
                  <img
                    src={lightsImg}
                    className='md:h-[180px] h-[87px]'
                    alt='light'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
