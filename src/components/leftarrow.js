import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './css/components.css';

const LeftArrow = () => {
  const arrowRef = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 }); // repeat infinitely

    // Define the animation
    tl.fromTo(
      arrowRef.current,
      { strokeDashoffset: 0 }, // start offset (match this value with strokeDasharray for seamless animation)
      { strokeDashoffset: 12, duration: 0.5, ease: 'linear' } // end offset
    );
  }, []);

  return (
    <div className='flex w-[100%] items-center'>
      <div className='ml-auto hidden w-fit md:flex xl:flex'>
        <svg
          width='12'
          height='12'
          viewBox='0 0 15 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M5 0V15L15 7.5L5 0Z'
            fill='#151515'
            transform='rotate(180 7.5 7.5)'
          />
        </svg>

        <svg
          width='12'
          height='12'
          viewBox='0 0 15 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M5 0V15L15 7.5L5 0Z'
            fill='#151515'
            transform='rotate(180 7.5 7.5)'
          />
        </svg>
      </div>

      <svg
        ref={arrowRef}
        className='left-arrow'
        width='95%'
        height='1'
        viewBox='0 0 507 1'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#clip0_756_2112)'>
          <path
            d='M-429 0.5H507'
            stroke='#000'
            strokeDasharray='6 6'
            className='nft__line-horizontal_right'
          />
        </g>
        <defs>
          <clipPath id='clip0_756_2112'>
            <rect width='507' height='1' fill='black' />
          </clipPath>
        </defs>
      </svg>

      <div className='ml-auto flex w-fit md:hidden xl:hidden'>
        <svg
          width='12'
          height='12'
          viewBox='0 0 15 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M5 0V15L15 7.5L5 0Z' fill='#151515' />
        </svg>

        <svg
          width='12'
          height='12'
          viewBox='0 0 15 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M5 0V15L15 7.5L5 0Z' fill='#151515' />
        </svg>
      </div>
    </div>
  );
};

export default LeftArrow;
