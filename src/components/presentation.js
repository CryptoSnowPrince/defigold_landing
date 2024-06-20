import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './css/components.css';

// Import your images and assets
import rectLeft from '../assets/img/contactFormAssets/compressed/rectLeft.webp';
import rectRight from '../assets/img/contactFormAssets/compressed/rectRight.webp';
import reactPhone from '../assets/img/contactFormAssets/compressed/reactPhone.webp';
import hand from '../assets/img/contactFormAssets/compressed/hand.webp';
import handHold from '../assets/img/contactFormAssets/compressed/handHold.6d174d3d-min.webp';
import investorsBg from '../assets/img/compressed/investors-bg.webp';
import prev from '../assets/img/prev.svg';
import next from '../assets/img/next.svg';
import upPointer from '../assets/img/up-pointer.svg';
import leadInvester1 from '../assets/img/lead-invester-1.svg';
import leadInvester2 from '../assets/img/lead-invester-2.svg';
import Invester1 from '../assets/img/invester-1.png';
import Invester2 from '../assets/img/invester-2.png';
import Invester3 from '../assets/img/invester-3.png';
import Invester4 from '../assets/img/invester-4.png';
import Invester5 from '../assets/img/invester-5.png';
import Invester6 from '../assets/img/invester-6.png';
import Invester7 from '../assets/img/invester-7.png';
import Invester8 from '../assets/img/invester-8.png';
import Invester9 from '../assets/img/invester-9.png';

gsap.registerPlugin(ScrollTrigger);

const investorTexts = [
  'Accomplished blockchain and full-stack engineer and team leader with over 10 years of experience in DApp development and blockchain technology and over 20 years web application development, game development, embedded systems, and mobile app development. Srjdan was a core developer at The Phoenix, ZeltaLabs and BeraBorrow.',
  "Walid is an experienced leader in the digital finance industry, and is renowned for his 'out-of-the-box' thinking and innovative approach. Formerly Head of BD and Institutional Sales at 1inch, Walid played key roles in groundbreaking blockchain startups. Notably, he joined Curv in 2020, leading Growth and Strategy Operations for the EMEA market, instrumental in positioning Dubai as a pivotal hub. His strategic direction facilitated Curv's acquisition by PayPal, marking a milestone in digital payment processes and signaling the mainstream acceptance of cryptocurrencies.",
  'Kevin is a seasoned professional with over a decade of experience in the alternative investments industry and a passionate and visionary leader. As the founder and CEO of GIMA Group, Inc., he steers the company into a global advisory, consulting, and investing powerhouse specializing in blockchain, proptech, gaming/esports, and the metaverse; four prior exits and one IPO in the company’s history. With a robust background in international business and finance, Kevin possesses a profound interest in innovation and emerging technologies.',
  'Phillip Lord brings with him a wealth of knowledge and expertise in the web3.0 space. His extensive background as President at Oobit and an investment banker, serial blockchain investor, and former non-executive director at Luna PR equipped him adeptly for steering strategic partnerships, spearheading business development, and executing powerful marketing strategies',
  'Technical Lead at Orthogonal Global Group. Aleksey has a decade of experience in web development, working with financial sector clients such as WU, CIBC, and Société Générale. He got exposed to the crypto and NFT space in 2021 and has since served as a web developer, security advisor, and investment advisor at Orthogonal Thinker (Orthogonal Global Group).',
  'Natasha is the CEO of Metasphere Labs and the Founder of Transparency Digital, a Vancouver-based marketing agency founded in 2013. She is a seasoned consultant on launch, brand development, marketing strategies, acquisition, fundraising and growth. Industry experience includes tech, cannabis, mining and financial services. Natasha is also the Founder of BIA Skin, a D2C e-commerce brand doing 7 figures annually with distribution across North America.',
  'CoachK is an avid entrepreneur, trading and financial coach and industry leading advisor. He is known for his go-to-market strategies, creative tokenomics, and a deep partnership network. Coach is an advisor and friend to many projects and builders in the Crypto Ecosystem and the Experience is proof he brings people together.',
  "Mona Coyle, with over two decades of experience in business development, operations, and management, brings a wealth of expertise to Defi.Gold. Known for her visionary guidance and strategic acumen, Mona drives growth and cultivates lasting partnerships. Her proficiency in negotiating contracts, fostering a culture of innovation, and securing pivotal collaborations underscores her commitment to excellence. With a passion for innovation and emerging technologies, Mona is poised to make significant contributions to Defi.Gold's success.",
  'Mr. Koroshun is a seasoned software engineer with 15+ years of development experience in blockchain technologies and decentralized finance. He is a contributor to a number of open source blockchain projects and was a core developer of Skrumble, a pioneering dAPP in the decentralized communications space, Global Blockchain, one of the largest Bitcoin mining companies of its time and SX.BET, one of the largest decentralized betting exchanges in the world.',
];

const Presentation = () => {
  const stepsRef = useRef([]);
  useEffect(() => {
    const btn1Container = document.getElementById(
      'stagger_button_ani_container_1'
    );
    const mobileBreakpoint = 768; //in px
    const tl1 = gsap.timeline({ paused: true });
    const button1Eles1 = gsap.utils.toArray(
      document.querySelectorAll('.stagger_button_1_ani')
    );

    if (window.innerWidth <= mobileBreakpoint) {
      button1Eles1.reverse().forEach((ele, incex) => {
        tl1.fromTo(
          ele,
          {
            y: 0,
          },
          {
            y: '-3.667vw',
            duration: 0.225,
            ease: 'power1.inOut',
          },
          '-=0.22125'
        );
      });
    } else {
      button1Eles1.reverse().forEach((ele, incex) => {
        tl1.fromTo(
          ele,
          {
            y: 0,
          },
          {
            y: '-1.33vw',
            duration: 0.225,
            ease: 'power1.inOut',
          },
          '-=0.22125'
        );
      });
    }

    btn1Container.addEventListener('mouseenter', (e) => {
      tl1.play();
    });

    btn1Container.addEventListener('mouseleave', (e) => {
      tl1.reverse();
    });

    // GSAP Timeline for animations
    // const investerTimeline = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: '#presetation_section',
    //     start: '-25% top',
    //     endTrigger: '.stairs',
    //     end: '90% bottom',
    //     timeScale: 0.2,
    //     scrub: 1, // Smooth animation
    //   },
    // });

    // Add animations with labels
    // investerTimeline
    //   .addLabel('bgStart')
    //   .fromTo(
    //     '.slide-up',
    //     { y: '50%', opacity: 0 },
    //     { y: '10%', opacity: 1, duration: 2, ease: 'slow(0.7, 0.7)' },
    //     'start'
    //   )
    //   .fromTo(
    //     '.leftRectangle',
    //     { x: '-50%', opacity: 0 },
    //     { x: 0, duration: 1, opacity: 1 },
    //     'start'
    //   )
    //   .fromTo(
    //     '.rightRectangle',
    //     { x: '50%', opacity: 0 },
    //     { x: 0, duration: 1, opacity: 1 },
    //     'start'
    //   )
    //   .addPause()
    //   .addLabel('stairsStartgrey')
    //   .to('.step-i', { x: '50vw', ease: 'power2.inOut', duration: 3 })
    //   .addLabel('stairsMidgrey')
    //   .to('.step-i', {
    //     x: '0vw',
    //     ease: 'power2.inOut',
    //     duration: 3,
    //     onComplete: () => {
    //       console.log('completed');
    //       // Snap to the section class on timeline completion
    //       gsap.to(window, {
    //         scrollTo: {
    //           y: '.stairs',
    //           offsetY: 0, // Adjust the offset as needed
    //           autoKill: true,
    //         },
    //         duration: 1,
    //         ease: 'power1.inOut',
    //       });
    //     },
    //   })
    //   .addLabel('stairsEndgrey');
    const presentation = gsap.timeline({
      scrollTrigger: {
        trigger: '#presetation_section',
        start: '-25% top',
        endTrigger: '.stairs',
        end: '90% bottom',
        timeScale: 0.2,
        scrub: 1,
      },
    });
    presentation.fromTo(
      '.slide-up',
      { y: '50%', opacity: 0 },
      { y: '10%', opacity: 1, duration: 2, ease: 'slow(0.7, 0.7)' }
    );
    presentation.fromTo(
      '.leftRectangle',
      { x: '-50%', opacity: 0 },
      { x: 0, duration: 1, opacity: 1 }
    );
    presentation.fromTo(
      '.rightRectangle',
      { x: '50%', opacity: 0 },
      { x: 0, duration: 1, opacity: 1 }
    );
    const steps = stepsRef.current;
    steps.forEach((step, index) => {
      gsap.fromTo(
        step,
        { x: '50%', ease: 'power2.inOut', duration: 3 },
        {
          x: '0%',
          scrollTrigger: {
            trigger: step,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <section
      id='presetation_section'
      className='presentation relative overflow-hidden'
    >
      <div className='handSection relative bg-[#151515] px-[20px] pt-[60px] md:pb-[8vw] md:pl-[13.02vw] md:pr-[13.02vw] md:pt-[7.65vw]'>
        <p className='w-[100%] font-teko text-[48px] font-medium leading-[43.2px] text-[#F8F8F8] md:w-[48.95vw] md:text-[5.1vw] md:leading-[4.58vw] xl:w-[48.95vw] xl:text-[5.1vw] xl:leading-[4.58vw]'>
          Become part of the{' '}
          <span className='text-[#d7a223]'>revolution with DeFi.Gold</span>
        </p>
        <div className='mt-4 flex flex-col-reverse md:-ml-[4.5vw] md:-mt-[3.5vw] md:flex-row'>
          <div className='leftRectangle absolute bottom-[5%] left-0 z-[1]'>
            <img
              className='md:w-[54.39vw] xl:w-[54.39vw]'
              src={rectLeft}
              alt=''
            />
          </div>
          <div className='rightRectangle absolute bottom-0 right-0'>
            <img
              className='md:w-[38.39vw] xl:w-[38.39vw]'
              src={rectRight}
              alt=''
            />
          </div>
          <div className='phoneRectangle absolute bottom-0 right-0 z-[9] md:hidden xl:hidden'>
            <img className='w-[100%]' src={reactPhone} alt='' />
          </div>
          <div className='phoneRectangle z-[9] mt-[-100px] md:hidden xl:hidden'>
            <img className='w-[100%]' src={hand} alt='' />
          </div>
          <div className='slide-up hidden md:inline'>
            <img
              className='md:height-[100%] md:w-[100%]'
              src={handHold}
              alt='hand'
            />
          </div>
          <div className='flex flex-col'>
            <div className='z-[1] md:mt-[6vw]'>
              <p className='text__hand w-[100%] font-sfui text-[18px] font-normal leading-[23.4px] text-[#F8F8F8] md:w-[45.14vw] md:text-[1.75vw] md:leading-[2.125vw] xl:w-[45.14vw] xl:text-[1.25vw] xl:leading-[1.625vw]'>
                As the trailblazer in the DEX and NFT marketplace on the Bitcoin
                blockchain, we're not just setting trends; we're creating a
                whole new playground for decentralized finance.
                <br />
                Whether you're into NFTs, tokens, DAOs, or derivatives, there's
                something here for everyone. With our cutting-edge technology
                and a vision for the future, now is the perfect time for
                investors who want to ride the wave of innovation.
                <br />
                <br />
                <span className='text-[#EFB325]'>
                  Don't miss out on this unique opportunity to be at the
                  forefront of blockchain evolution with DeFi.Gold. Join us and
                  let's redefine the digital marketplace together!
                </span>
              </p>
            </div>

            <div className='button-container z-[10]'>
              <a
                target='_blank'
                href='https://docsend.com/view/ucfgjceckmzkt2yc'
              >
                <button
                  id='stagger_button_ani_container_1'
                  className='stagger_animation_btn mt-8 w-[100%] rounded bg-[#efb325] py-[14px] md:mt-[3vw] md:w-[19.38vw] md:py-[1.75vw] text-dark-text'
                >
                  <span className='stagger_button_ani_wrapper_1 items-center justify-center overflow-hidden font-sfui text-[16px] font-bold text-[#151515] hidden md:flex md:text-[10px] xl:text-[1.04vw]'>
                    <p className='stagger_button_1_ani'>V</p>
                    <p className='stagger_button_1_ani'>I</p>
                    <p className='stagger_button_1_ani'>E</p>
                    <p className='stagger_button_1_ani'>W</p>
                    <p className='stagger_button_1_ani ml-1'>P</p>
                    <p className='stagger_button_1_ani'>R</p>
                    <p className='stagger_button_1_ani'>E</p>
                    <p className='stagger_button_1_ani'>S</p>
                    <p className='stagger_button_1_ani'>E</p>
                    <p className='stagger_button_1_ani'>N</p>
                    <p className='stagger_button_1_ani'>T</p>
                    <p className='stagger_button_1_ani'>A</p>
                    <p className='stagger_button_1_ani'>T</p>
                    <p className='stagger_button_1_ani'>I</p>
                    <p className='stagger_button_1_ani'>O</p>
                    <p className='stagger_button_1_ani'>N</p>
                  </span>
                  <span className='stagger_button_ani_wrapper_1 flex md:hidden items-center justify-center overflow-hidden font-sf text-[16px] font-bold text-[#151515] md:text-[10px] xl:text-[1.04vw]'>
                    <p className='stagger_button_1_ani ml-1'>P</p>
                    <p className='stagger_button_1_ani'>R</p>
                    <p className='stagger_button_1_ani'>E</p>
                    <p className='stagger_button_1_ani'>S</p>
                    <p className='stagger_button_1_ani'>E</p>
                    <p className='stagger_button_1_ani'>N</p>
                    <p className='stagger_button_1_ani'>T</p>
                    <p className='stagger_button_1_ani'>A</p>
                    <p className='stagger_button_1_ani'>T</p>
                    <p className='stagger_button_1_ani'>I</p>
                    <p className='stagger_button_1_ani'>O</p>
                    <p className='stagger_button_1_ani'>N</p>
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Stairs */}
      <div className='stairs absolute bottom-[0%] left-0 z-[99] hidden w-full flex-col items-end overflow-hidden bg-transparent md:flex'>
        <div
          className='step-i inv-1 h-[5vw] w-[100vw] translate-x-[50%] pl-[30vw]'
          ref={(el) => (stepsRef.current[0] = el)}
        ></div>
        <div
          className='step-i inv-1 h-[5vw] w-[115vw] translate-x-[50%] pl-[15vw]'
          ref={(el) => (stepsRef.current[1] = el)}
        ></div>
        <div
          className='step-i inv-1 h-[5vw] w-[130vw] translate-x-[50%] pl-[0vw]'
          ref={(el) => (stepsRef.current[2] = el)}
        ></div>
      </div>
    </section>
  );
};

export default Presentation;
