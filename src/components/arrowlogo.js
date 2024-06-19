import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Logo from '../assets/img/icon.svg';
import Arrow from '../assets/img/arrow.svg';

const ArrowLogo = () => {
  const arrowRef = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 }); // repeat infinitely

    // Define the animation
    tl.fromTo(
      arrowRef.current,
      { strokeDashoffset: 0 }, // start offset (match this value with strokeDasharray for seamless animation)
      { strokeDashoffset: -12, duration: 0.5, ease: 'linear' } // end offset
    );
  }, []);

  return (
    <div className='flex items-center md:items-start md:justify-center xl:items-start xl:justify-center'>
      <div className='mr-[10px] md:hidden'>
        <img src={Logo} alt='' />
      </div>
      <img
        src={Arrow}
        className='-mt-[-4px] w-[2.93vw] rotate-90 md:mt-0 md:w-[0.78vw] xl:mt-0'
        alt=''
      />
      <svg
        ref={arrowRef}
        width='133'
        height='1'
        viewBox='0 0 133 1'
        fill='none'
        className='mt-1'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#clip0_756_2059)'>
          <path
            d='M562 0.5H9.53674e-07'
            stroke='#F8F8F8'
            stroke-dasharray='6 6'
            className='nft__line-horizontal'
          />
        </g>
        <defs>
          <clipPath id='clip0_756_2059'>
            <rect
              width='133'
              height='1'
              fill='white'
              transform='matrix(-1 0 0 1 133 0)'
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default ArrowLogo;
