import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const HorizontalDirection = () => {
  const path1Ref = useRef(null);
  const path2Ref = useRef(null);
  const path3Ref = useRef(null);

  useEffect(() => {
    const paths = [path1Ref.current, path2Ref.current, path3Ref.current];

    // Set the strokeDasharray and strokeDashoffset for each path
    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
    });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    tl.fromTo(
      path1Ref.current,
      { strokeDashoffset: path1Ref.current.getTotalLength() },
      { strokeDashoffset: 0, duration: 0.5 }
    )
      .fromTo(
        path2Ref.current,
        { strokeDashoffset: path2Ref.current.getTotalLength() },
        { strokeDashoffset: 0, duration: 0.5 },
        '+=0.5'
      )
      .fromTo(
        path3Ref.current,
        { strokeDashoffset: path3Ref.current.getTotalLength() },
        { strokeDashoffset: 0, duration: 0.5 },
        '+=0.5'
      )
      .set(
        path1Ref.current,
        { strokeDashoffset: path1Ref.current.getTotalLength() },
        '+=1'
      )
      .set(path2Ref.current, {
        strokeDashoffset: path2Ref.current.getTotalLength(),
      })
      .set(path3Ref.current, {
        strokeDashoffset: path3Ref.current.getTotalLength(),
      });
  }, []);

  return (
    <svg
      width='76'
      height='20'
      viewBox='0 0 76 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        ref={path1Ref}
        opacity='0.15'
        d='M4.99998 1.66699L13.3333 10.0003L4.99998 18.3337'
        stroke='#EFB325'
        strokeWidth='1.4'
      />
      <path
        ref={path2Ref}
        opacity='0.4'
        d='M33 1.66699L41.3333 10.0003L33 18.3337'
        stroke='#EFB325'
        strokeWidth='1.4'
      />
      <path
        ref={path3Ref}
        d='M61 1.66699L69.3333 10.0003L61 18.3337'
        stroke='#EFB325'
        strokeWidth='1.4'
      />
    </svg>
  );
};

export default HorizontalDirection;
