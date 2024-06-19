import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
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
  useEffect(() => {
    // Register ScrollTrigger with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // GSAP Timeline for animations
    const investerTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#presentation_section',
        start: '-25% top',
        endTrigger: '.stairs',
        end: '90% bottom',
        scrub: 1, // Smooth animation
      },
    });

    // Add animations with labels
    investerTimeline
      .addLabel('bgStart')
      .fromTo(
        '.slide-up',
        { y: '50%', opacity: 0 },
        { y: '10%', opacity: 1, duration: 2, ease: 'slow(0.7, 0.7)' },
        'start'
      )
      .fromTo(
        '.leftRectangle',
        { x: '-50%', opacity: 0 },
        { x: 0, duration: 1, opacity: 1 },
        'start'
      )
      .fromTo(
        '.rightRectangle',
        { x: '50%', opacity: 0 },
        { x: 0, duration: 1, opacity: 1 },
        'start'
      )
      .addPause()
      .addLabel('stairsStartgrey')
      .to('.step-i', { x: '50vw', ease: 'power2.inOut', duration: 3 })
      .addLabel('stairsMidgrey')
      .to('.step-i', {
        x: '0vw',
        ease: 'power2.inOut',
        duration: 3,
        onComplete: () => {
          console.log('completed');
          // Snap to the section class on timeline completion
          gsap.to(window, {
            scrollTo: {
              y: '.stairs',
              behavior: 'smooth',
              offsetY: 0, // Adjust the offset as needed
              autoKill: true,
            },
            duration: 1,
            ease: 'power1.inOut',
          });
        },
      })
      .addLabel('stairsEndgrey');

    // Initialize Swiper instance
    new Swiper('.mySwiper', {
      modules: [Navigation, Pagination],
      spaceBetween: 20,
      slidesPerView: 1.2,
      centeredSlides: true,
      loop: true,
      freeMode: false,
      mousewheel: false,
      navigation: {
        nextEl: '#nextSlide',
        prevEl: '#prevSlide',
      },
      breakpoints: {
        600: {
          slidesPerView: 3,
          spaceBetween: 110,
          centeredSlides: true,
        },
        920: {
          slidesPerView: 5,
          spaceBetween: 110,
          centeredSlides: true,
        },
        1600: {
          slidesPerView: 5,
          spaceBetween: 110,
          centeredSlides: true,
        },
      },
      on: {
        slideChange: function () {
          let timeout;
          if (timeout) {
            clearTimeout(timeout);
          }
          var classesToRemove = ['slide-next', 'slide-prev'];
          var investorText = document.querySelector('.invester-text');
          classesToRemove.forEach((cls) => investorText.classList.remove(cls));

          // Determine swipe direction
          if (this.activeIndex < this.previousIndex) {
            this.swipeDirection = 'prev';
          } else {
            this.swipeDirection = 'next';
          }

          // Timeout for animation throttling
          timeout = setTimeout(() => {
            var currentIndex = this.realIndex;
            investorText.textContent = investorTexts[currentIndex];
            investorText.classList.add(`slide-${this.swipeDirection}`);
          }, 100);
        },
      },
    });
  }, []);

  return (
    <>
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
                <p className='text__hand w-[100%] font-sf text-[18px] font-normal leading-[23.4px] text-[#F8F8F8] md:w-[45.14vw] md:text-[1.75vw] md:leading-[2.125vw] xl:w-[45.14vw] xl:text-[1.25vw] xl:leading-[1.625vw]'>
                  As the trailblazer in the DEX and NFT marketplace on the
                  Bitcoin blockchain, we're not just setting trends; we're
                  creating a whole new playground for decentralized finance.
                  <br />
                  Whether you're into NFTs, tokens, DAOs, or derivatives,
                  there's something here for everyone. With our cutting-edge
                  technology and a vision for the future, now is the perfect
                  time for investors who want to ride the wave of innovation.
                  <br />
                  <br />
                  <span className='text-[#EFB325]'>
                    Don't miss out on this unique opportunity to be at the
                    forefront of blockchain evolution with DeFi.Gold. Join us
                    and let's redefine the digital marketplace together!
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
                    className='stagger_animation_btn mt-8 w-[100%] rounded bg-[#efb325] py-[14px] md:mt-[3vw] md:w-[19.38vw] md:py-[1.75vw]'
                  >
                    <span className='stagger_button_ani_wrapper_1 hidden items-center justify-center overflow-hidden font-sf text-[16px] font-bold text-[#151515] md:text-[10px] xl:flex xl:text-[1.04vw]'>
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
                    <span className='stagger_button_ani_wrapper_1 flex items-center justify-center overflow-hidden font-sf text-[16px] font-bold text-[#151515] md:text-[10px] xl:hidden xl:text-[1.04vw]'>
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
          <div className='step-i inv-1 h-[5vw] w-[100vw] translate-x-[100%] pl-[30vw]'></div>
          <div className='step-i inv-1 h-[5vw] w-[115vw] translate-x-[100%] pl-[15vw]'></div>
          <div className='step-i inv-1 h-[5vw] w-[130vw] translate-x-[100%] pl-[0vw]'></div>
        </div>
      </section>
      <section className='invester-slider inv-1 relative z-[10] bg-cover bg-no-repeat pl-4 pt-[30vw] md:z-[999] md:pt-[0vw]'>
        <h2 className='absolute top-20 transform text-center font-teko text-[29.3vw] font-medium leading-[90%] text-white md:left-1/2 md:top-[-8vw] md:-translate-x-1/2 md:text-[14.5vw]'>
          The Team
        </h2>

        <div className='swiper mySwiper'>
          <div className='swiper-wrapper'>
            <div className='swiper-slide invester-slide'>
              <div className='image-container'>
                <img src={Invester1} alt='investor-img' />
              </div>
              <div className='text absolute bottom-0 w-full items-center justify-center rounded-b bg-white px-[5vw] py-[3vw] font-teko text-[8.53vw] text-[8.53vw] leading-7 text-black-400 md:p-[1vw] md:text-[1.5vw] md:leading-[100%]'>
                <p>Srjdan Jevdjenovic</p>
              </div>
            </div>
            <div className='swiper-slide invester-slide'>
              <div className='image-container'>
                <img src={Invester2} alt='investor-img' />
              </div>
              <div className='text absolute bottom-0 w-full items-center justify-center rounded-b bg-white px-5 py-2 font-teko text-[8.53vw] leading-7 text-black-400 md:text-[1.5vw] md:leading-[100%] lg:pb-2 2xl:py-8'>
                <p>Walid Benothman</p>
              </div>
            </div>
            <div className='swiper-slide invester-slide'>
              <div className='image-container'>
                <img src={Invester3} alt='investor-img' />
              </div>
              <div className='text absolute bottom-0 w-full items-center justify-center rounded-b bg-white px-5 py-2 font-teko text-[8.53vw] leading-7 text-black-400 md:text-[1.5vw] md:leading-[100%] lg:pb-2 2xl:py-8'>
                <p>Kevin Soltani</p>
              </div>
            </div>
            <div className='swiper-slide invester-slide relative'>
              <div className='image-container relative'>
                <img src={Invester4} alt='investor-img' />
              </div>
              <div className='text absolute bottom-0 w-full items-center justify-center rounded-b bg-white px-5 py-2 font-teko text-[8.53vw] leading-7 text-black-400 md:text-[1.5vw] md:leading-[100%] lg:pb-2 2xl:py-8'>
                <p>Philip Lord</p>
              </div>
            </div>
            <div className='swiper-slide invester-slide'>
              <div className='image-container'>
                <img src={Invester5} alt='investor-img' />
              </div>
              <div className='text absolute bottom-0 w-full items-center justify-center rounded-b bg-white px-5 py-2 font-teko text-[8.53vw] leading-7 text-black-400 md:text-[1.5vw] md:leading-[100%] lg:pb-2 2xl:py-8'>
                <p>Aleksey Mahanov</p>
              </div>
            </div>

            <div className='swiper-slide invester-slide'>
              <div className='image-container'>
                <img src={Invester6} alt='investor-img' />
              </div>
              <div className='text absolute bottom-0 w-full items-center justify-center rounded-b bg-white px-5 py-2 font-teko text-[8.53vw] leading-7 text-black-400 md:text-[1.5vw] md:leading-[100%] lg:pb-2 2xl:py-8'>
                <p>Natasha Ingram</p>
              </div>
            </div>
            <div className='swiper-slide invester-slide'>
              <div className='image-container'>
                <img src={Invester7} alt='investor-img' />
              </div>
              <div className='text absolute bottom-0 w-full items-center justify-center rounded-b bg-white px-5 py-2 font-teko text-[8.53vw] leading-7 text-black-400 md:text-[1.5vw] md:leading-[100%] lg:pb-2 2xl:py-8'>
                <p>Coach K</p>
              </div>
            </div>
            <div className='swiper-slide invester-slide'>
              <div className='image-container'>
                <img src={Invester8} alt='investor-img' />
              </div>
              <div className='text absolute bottom-0 w-full items-center justify-center rounded-b bg-white px-5 py-2 font-teko text-[8.53vw] leading-7 text-black-400 md:text-[1.5vw] md:leading-[100%] lg:pb-2 2xl:py-8'>
                <p>Mona Coyle</p>
              </div>
            </div>

            <div className='swiper-slide invester-slide'>
              <div className='image-container'>
                <img src={Invester9} alt='investor-img' />
              </div>
              <div className='text absolute bottom-0 w-full items-center justify-center rounded-b bg-white px-5 py-2 font-teko text-[8.53vw] leading-7 text-black-400 md:text-[1.5vw] md:leading-[100%] lg:pb-2 2xl:py-8'>
                <p>Mike Koroshun</p>
              </div>
            </div>
          </div>
        </div>

        <div className='z-99 mt-6 flex justify-center 2xl:mt-12'>
          <div className='mr-[20vw] hidden items-center justify-center gap-2.5 md:flex lg:mr-[14vw]'>
            <button
              id='prevSlide'
              className='flex size-14 items-center justify-center rounded border border-[#F8f8f81a] p-5 transition-all delay-100 ease-in hover:border hover:border-gold 2xl:size-20'
            >
              <img src={prev} className='' alt='prev-slide' />
            </button>
            <button
              id='nextSlide'
              className='ttransition-all flex size-14 items-center justify-center rounded border border-[#F8f8f81a] p-5 delay-100 ease-in hover:border hover:border-gold 2xl:size-20'
            >
              <img src={next} className='' alt='next-slide' />
            </button>
          </div>

          <div className='absolute left-1 pl-6 md:left-1/2 lg:pl-0'>
            <img src={upPointer} className='' alt='' />

            <p className='invester-text max-w-sm text-left font-sf text-[4.27vw] leading-6 text-white md:max-w-2xl md:text-[0.93vw] md:leading-[1.3vw] 2xl:max-w-7xl'></p>
          </div>
        </div>

        <div className='pb-20 pt-[95vw] md:pl-[15vw] md:pt-[5vw]'>
          <h6 className='font-teko text-[12.8vw] font-medium leading-[90%] text-white md:text-[5.1vw]'>
            Lead Investors
          </h6>

          <div className='mt-8 flex flex-col items-start gap-4 md:flex-row md:items-center lg:gap-0'>
            <div className='invester-logo bg-white'>
              <a target='_blank' href='https://www.bluesphere.earth/'>
                <img
                  src={leadInvester1}
                  className='menu-item'
                  alt='invester-logo'
                />
                <img
                  src={leadInvester2}
                  className='menu-item-active'
                  alt='invester-logo'
                />
              </a>
            </div>
            <div className='invester-logo bg-white lg:ml-5'>
              <a target='_blank' href='https://www.orthogonalthinker.com/'>
                <img
                  src={leadInvester2}
                  className='menu-item'
                  alt='invester-logo'
                />

                <img
                  src={leadInvester2}
                  className='menu-item-active'
                  alt='invester-logo'
                />
              </a>
            </div>

            <div className='line__carousel hidden h-px w-full md:block'></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Presentation;
