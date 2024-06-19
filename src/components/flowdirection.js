import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const FlowDirection = () => {
  const path1Ref = useRef(null);
  const path2Ref = useRef(null);
  const path3Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    tl.fromTo(
      path1Ref.current,
      { strokeDashoffset: 100 },
      { strokeDashoffset: 0, duration: 0.5 }
    )
      .fromTo(
        path2Ref.current,
        { strokeDashoffset: 100 },
        { strokeDashoffset: 0, duration: 0.5 },
        '+=0.5'
      )
      .fromTo(
        path3Ref.current,
        { strokeDashoffset: 100 },
        { strokeDashoffset: 0, duration: 0.5 },
        '+=0.5'
      )
      .set(path1Ref.current, { strokeDashoffset: 100 }, '+=1')
      .set(path2Ref.current, { strokeDashoffset: 100 })
      .set(path3Ref.current, { strokeDashoffset: 100 });
  }, []);

  return (
    <svg
      width='18'
      height='68'
      viewBox='0 0 18 68'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        ref={path1Ref}
        opacity='0.15'
        d='M16.4998 4.47355L8.99976 11.9297L1.49976 4.47355'
        stroke='#EFB325'
        strokeWidth='1.25999'
        strokeDasharray='100'
        strokeDashoffset='100'
      />
      <path
        ref={path2Ref}
        opacity='0.4'
        d='M16.4998 29.5263L8.99976 36.9824L1.49976 29.5263'
        stroke='#EFB325'
        strokeWidth='1.25999'
        strokeDasharray='100'
        strokeDashoffset='100'
      />
      <path
        ref={path3Ref}
        d='M16.4998 54.579L8.99976 62.0352L1.49976 54.579'
        stroke='#EFB325'
        strokeWidth='1.25999'
        strokeDasharray='100'
        strokeDashoffset='100'
      />
    </svg>
  );
};

export default FlowDirection;
