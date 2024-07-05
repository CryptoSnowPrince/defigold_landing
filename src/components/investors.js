import prevImg from '../assets/img/prev.svg';
import nextImg from '../assets/img/next.svg';
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
import ContactFormBit from '../assets/img/contactFormAssets/compressed/contactFormBit.webp';
import FormArrow from '../assets/img/contactFormAssets/formArrow.png';
import FormLight from '../assets/img/contactFormAssets/compressed/formLight.mp4';
import HorizontalDirection from './horizontaldirection';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Zoom, Navigation, Pagination } from 'swiper/modules';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ReactPlayer from 'react-player';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import axios from 'axios';
import Swal from 'sweetalert2';
// import 'animate.css';
import { toast } from 'react-toastify';

gsap.registerPlugin(ScrollTrigger);

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const investor_list = [
  {
    avatar: Invester1,
    name: 'Srjdan Jevdjenovic',
    summary:
      'Accomplished blockchain and full-stack engineer and team leader with over 10 years of experience in DApp development and blockchain technology and over 20 years web application development, game development, embedded systems, and mobile app development. Srjdan was a core developer at The Phoenix, ZeltaLabs and BeraBorrow.',
  },
  {
    avatar: Invester2,
    name: 'Walid Benothman',
    summary:
      "Walid is an experienced leader in the digital finance industry, and is renowned for his 'out-of-the-box' thinking and innovative approach. Formerly Head of BD and Institutional Sales at 1inch, Walid played key roles in groundbreaking blockchain startups. Notably, he joined Curv in 2020, leading Growth and Strategy Operations for the EMEA market, instrumental in positioning Dubai as a pivotal hub. His strategic direction facilitated Curv's acquisition by PayPal, marking a milestone in digital payment processes and signaling the mainstream acceptance of cryptocurrencies.",
  },
  {
    avatar: Invester3,
    name: 'Kevin Soltani',
    summary:
      'Kevin is a seasoned professional with over a decade of experience in the alternative investments industry and a passionate and visionary leader. As the founder and CEO of GIMA Group, Inc., he steers the company into a global advisory, consulting, and investing powerhouse specializing in blockchain, proptech, gaming/esports, and the metaverse; four prior exits and one IPO in the company’s history. With a robust background in international business and finance, Kevin possesses a profound interest in innovation and emerging technologies.',
  },
  {
    avatar: Invester4,
    name: 'Philip Lord',
    summary:
      'Phillip Lord brings with him a wealth of knowledge and expertise in the web3.0 space. His extensive background as President at Oobit and an investment banker, serial blockchain investor, and former non-executive director at Luna PR equipped him adeptly for steering strategic partnerships, spearheading business development, and executing powerful marketing strategies',
  },
  {
    avatar: Invester5,
    name: 'Aleksey Mahanov',
    summary:
      'Technical Lead at Orthogonal Global Group. Aleksey has a decade of experience in web development, working with financial sector clients such as WU, CIBC, and Société Générale. He got exposed to the crypto and NFT space in 2021 and has since served as a web developer, security advisor, and investment advisor at Orthogonal Thinker (Orthogonal Global Group).',
  },
  {
    avatar: Invester6,
    name: 'Natasha Ingram',
    summary:
      'Natasha is the CEO of Metasphere Labs and the Founder of Transparency Digital, a Vancouver-based marketing agency founded in 2013. She is a seasoned consultant on launch, brand development, marketing strategies, acquisition, fundraising and growth. Industry experience includes tech, cannabis, mining and financial services. Natasha is also the Founder of BIA Skin, a D2C e-commerce brand doing 7 figures annually with distribution across North America.',
  },
  {
    avatar: Invester7,
    name: 'Coach K',
    summary:
      'CoachK is an avid entrepreneur, trading and financial coach and industry leading advisor. He is known for his go-to-market strategies, creative tokenomics, and a deep partnership network. Coach is an advisor and friend to many projects and builders in the Crypto Ecosystem and the Experience is proof he brings people together.',
  },
  {
    avatar: Invester8,
    name: 'Mona Coyle',
    summary:
      "Mona Coyle, with over two decades of experience in business development, operations, and management, brings a wealth of expertise to Defi.Gold. Known for her visionary guidance and strategic acumen, Mona drives growth and cultivates lasting partnerships. Her proficiency in negotiating contracts, fostering a culture of innovation, and securing pivotal collaborations underscores her commitment to excellence. With a passion for innovation and emerging technologies, Mona is poised to make significant contributions to Defi.Gold's success.",
  },
  {
    avatar: Invester9,
    name: 'Mike Koroshun',
    summary:
      'Mr. Koroshun is a seasoned software engineer with 15+ years of development experience in blockchain technologies and decentralized finance. He is a contributor to a number of open source blockchain projects and was a core developer of Skrumble, a pioneering dAPP in the decentralized communications space, Global Blockchain, one of the largest Bitcoin mining companies of its time and SX.BET, one of the largest decentralized betting exchanges in the world.',
  },
];

const Investors = () => {
  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: '.swiper-slide',
  //       start: 'top 30%',
  //     },
  //   });

  //   tl.fromTo('.swiper-slide', { opacity: 0 }, { opacity: 1, duration: 1 });
  // }, []);
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const subEmailRef = useRef(null);

  useEffect(() => {
    const contact = document.getElementById('footer');
    gsap.timeline({
      scrollTrigger: {
        trigger: '.swiper-slide',
        start: 'top 30%',
        onEnter: () => {
          contact.classList.remove('hidden');
        },
        onLeaveBack: () => {
          contact.classList.add('hidden');
        },
      },
    });

    const telegramFooter = document.querySelector('.telegram__footer');
    const xFooter = document.querySelector('.x__footer');
    const mediumFooter = document.querySelector('.medium__footer');
    const zealyFooter = document.querySelector('.zealy__footer');

    const telegramTween = gsap.to('.hover__link-telegram', {
      width: '100%',
      duration: 0.5,
      paused: true,
    });
    const xTween = gsap.to('.hover__link-x', {
      width: '100%',
      duration: 0.3,
      paused: true,
    });
    const mediumTween = gsap.to('.hover__link-medium', {
      width: '100%',
      duration: 0.4,
      paused: true,
    });
    const zealyTween = gsap.to('.hover__link-zealy', {
      width: '100%',
      duration: 0.4,
      paused: true,
    });

    telegramFooter.addEventListener('mouseover', () => telegramTween.play());
    telegramFooter.addEventListener('mouseleave', () =>
      telegramTween.reverse()
    );
    xFooter.addEventListener('mouseover', () => xTween.play());
    xFooter.addEventListener('mouseleave', () => xTween.reverse());
    mediumFooter.addEventListener('mouseover', () => mediumTween.play());
    mediumFooter.addEventListener('mouseleave', () => mediumTween.reverse());
    zealyFooter.addEventListener('mouseover', () => zealyTween.play());
    zealyFooter.addEventListener('mouseleave', () => zealyTween.reverse());

    const btn3Container = document.getElementById(
      'stagger_button_ani_container_3'
    );
    const tl3 = gsap.timeline({ paused: true });
    const button3Eles3 = gsap.utils.toArray(
      document.querySelectorAll('.stagger_button_3_ani')
    );

    if (window.innerWidth <= 768) {
      button3Eles3.reverse().forEach((ele, incex) => {
        tl3.fromTo(
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
      button3Eles3.reverse().forEach((ele, incex) => {
        tl3.fromTo(
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

    btn3Container.addEventListener('mouseenter', (e) => {
      tl3.play();
    });
    btn3Container.addEventListener('mouseleave', (e) => {
      tl3.reverse();
    });
    const btn4Container = document.getElementById(
      'stagger_button_ani_container_4'
    );
    const tl4 = gsap.timeline({ paused: true });
    const button4Eles4 = gsap.utils.toArray(
      document.querySelectorAll('.stagger_button_4_ani')
    );
    if (window.innerWidth <= 768) {
      button4Eles4.reverse().forEach((ele, incex) => {
        tl4.fromTo(
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
      button4Eles4.reverse().forEach((ele, incex) => {
        tl4.fromTo(
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

    btn4Container.addEventListener('mouseenter', (e) => {
      tl4.play();
    });
    btn4Container.addEventListener('mouseleave', (e) => {
      tl4.reverse();
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const name = fullNameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;
    if (name.trim().length === 0 || !isValidEmail(email)) {
      toast('Input correct type', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: 'alert-message-error',
      });
      return;
    }

    axios
      .post('https://defigold-email-be.vercel.app/form/contact', {
        firstName: name,
        email: email,
        message: message,
      })
      .then((res) => {
        Swal.fire({
          showClass: {
            popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
          },
          hideClass: {
            popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
          },
          customClass: {
            popup:
              'font-sfui md:text-[1.4vw] xl:text-[1vw] bg-black-500 text-dark-text',
            confirmButton: 'px-4 py-2 rounded-md font-bold',
          },
          confirmButtonColor: '#EFB325',
          title: 'Thank you for reaching out to Defi.Gold!',
          text: "Your message has been received, and we'll get back to you as soon as possible. Your interest in our decentralized exchange and NFT marketplace fuels our mission to innovate on the Bitcoin blockchain.",
          footer: 'Stay tuned for our response!',
          icon: 'success',
          iconColor: '#EFB325',
        });
      })
      .catch((err) => {
        Swal.fire({
          showClass: {
            popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
          },
          hideClass: {
            popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
          },
          customClass: {
            popup:
              'font-sfui md:text-[0.8vw] xl:text-[1vw] bg-black-500 text-dark-text',
            confirmButton: 'px-4 py-2 bg-gold rounded-md font-bold',
          },
          confirmButtonColor: '#EFB325',
          text: 'Your request has been already submitted!',
          title: 'Request already submitted!',
          icon: 'success',
          iconColor: '#EFB325',
        });
      })
      .finally(() => {
        fullNameRef.current.value = '';
        emailRef.current.value = '';
        messageRef.current.value = '';
      });
  };

  const onSubscribe = (e) => {
    e.preventDefault();
    const email = subEmailRef.current.value;
    if (!isValidEmail(email)) {
      toast('Invalid Email format', 'error');
      return;
    }
    axios
      .post('https://defigold-email-be.vercel.app/form/subscribe', {
        email: email,
      })
      .then((res) => {
        Swal.fire({
          showClass: {
            popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
          },
          hideClass: {
            popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
          },
          customClass: {
            popup:
              'font-sfui md:text-[0.8vw] xl:text-[1vw] bg-black-500 text-dark-text',
            confirmButton: 'px-4 py-2 bg-gold rounded-md font-bold',
          },
          confirmButtonColor: '#EFB325',
          title: 'Thank you for subscribing to Defi.Gold updates.',
          text: '🚀 Get ready to stay ahead of the curve in the Bitcoin blockchain revolution. Your subscription means a lot to us as we redefine the future of trading and smart contracts.',
          footer: 'Stay tuned for exciting news and updates!',
          icon: 'success',
          iconColor: '#EFB325',
        });
      })
      .catch((err) => {
        Swal.fire({
          showClass: {
            popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
          },
          hideClass: {
            popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
          },
          customClass: {
            popup:
              'font-sfui md:text-[0.8vw] xl:text-[1vw] bg-black-500 text-dark-text',
            confirmButton: 'px-4 py-2 bg-gold rounded-md font-bold',
          },
          confirmButtonColor: '#EFB325',
          text: 'Your request has been already submitted!',
          title: 'Request already submitted!',
          icon: 'success',
          iconColor: '#EFB325',
        });
      })
      .finally(() => {
        subEmailRef.current.value = '';
      });
  };

  const updateText = (swiper) => {
    const investorText = document.querySelector('.invester-text');
    const classesToRemove = ['slide-next', 'slide-prev'];
    classesToRemove.forEach((cls) => investorText.classList.remove(cls));

    if (swiper.activeIndex < swiper.previousIndex) {
      swiper.swipeDirection = 'prev';
    } else {
      swiper.swipeDirection = 'next';
    }

    setTimeout(() => {
      const currentIndex = swiper.realIndex;
      investorText.textContent = investor_list[currentIndex]
        ? investor_list[currentIndex].summary
        : '';
      investorText.classList.add(`slide-${swiper.swipeDirection}`);
    }, 100);
  };

  return (
    <div className='flex flex-col'>
      <section className='w-screen invester-slider relative z-[10] bg-cover bg-no-repeat pl-4 pt-[30vw] md:z-[999] md:pt-[0vw]'>
        <h2 className='absolute top-20 transform text-center font-teko text-[29.3vw] font-medium leading-[90%] text-white md:left-1/2 md:top-[-8vw] md:-translate-x-1/2 md:text-[14.5vw]'>
          The Team
        </h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1.2}
          centeredSlides={true}
          pagination={{ clickable: true }}
          loop={true}
          navigation={{
            nextEl: '#nextSlide',
            prevEl: '#prevSlide',
          }}
          breakpoints={{
            600: {
              slidesPerView: 3,
              spaceBetween: 110,
            },
            920: {
              slidesPerView: 5,
              spaceBetween: 110,
            },
            1600: {
              slidesPerView: 5,
              spaceBetween: 110,
            },
          }}
          onSlideChange={updateText}
          modules={[Navigation]}
          className='mySwiper mt-10'
        >
          {investor_list.map((investor, index) => {
            return (
              <SwiperSlide key={index} className='swiper-slide invester-slide'>
                <div className='image-container'>
                  <img src={investor.avatar} alt='investor-img' />
                </div>
                <div className='text absolute bottom-0 w-full items-center justify-center rounded-b bg-white px-5 text-[32px] leading-7 md:text-[34px] md:leading-7 xl:text-[50px] xl:leading-[45px] text-dark-text py-2 '>
                  <p>{investor.name}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className='z-99 mt-6 flex justify-center 2xl:mt-12 swiper-slide'>
          <div className='mr-[20vw] hidden items-center justify-center gap-2.5 md:flex lg:mr-[14vw]'>
            <button
              id='prevSlide'
              className='flex size-14 items-center justify-center rounded border border-[#F8f8f81a] p-5 transition-all delay-100 ease-in hover:border hover:border-gold 2xl:size-20'
            >
              <img src={prevImg} alt='prev-slide' />
            </button>
            <button
              id='nextSlide'
              className='ttransition-all flex size-14 items-center justify-center rounded border border-[#F8f8f81a] p-5 delay-100 ease-in hover:border hover:border-gold 2xl:size-20'
            >
              <img src={nextImg} alt='next-slide' />
            </button>
          </div>

          <div className='absolute left-1 pl-6 md:left-1/2 lg:pl-0'>
            <img src={upPointer} alt='' />

            <p className='invester-text w-[95%] text-left font-sfui text-[4.27vw] leading-6 text-white md:text-[0.93vw] md:leading-[1.3vw] md:w-[35vw]'></p>
          </div>
        </div>
        <div className='pb-20 pt-[95vw] md:pt-[10vw]'>
          <div className='pr-4 px-auto'>
            <ReactPlayer
              url='https://hugh.cdn.rumble.cloud/video/s8/2/4/u/v/r/4uvrs.caa.rec.mp4?u=4&amp;b=0'
              loop
              muted
              controls
              width='80%'
              height='80%'
              style={{ display: 'block', margin: '0 auto 3vw auto' }}
              config={{
                file: {
                  attributes: {
                    poster:
                      'https://hugh.cdn.rumble.cloud/s/s8/1/4/u/v/r/4uvrs.qR4e-small-Shidan-Gouran-Defi-Gold-Rev.jpg',
                    preload: 'metadata',
                  },
                },
              }}
            />
          </div>
          <div className='md:pl-[15vw]'>
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
                    src={leadInvester1}
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
        </div>
      </section>
      <div
        id='footer'
        className='static bottom-0 left-0 w-full right-0 hidden md:sticky'
      >
        <div id='mainContactFormContainer'>
          <video id='formVideoContainer' autoPlay playsInline loop muted>
            <source src={FormLight} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          <div id='mainContactForm'>
            <div id='mainContactForm-logo-container'>
              <div id='mainContactForm-logo'>
                <img src={ContactFormBit} id='contactFormBit' alt='bitLogo' />
                <div>
                  <div className='mainContactForm-con-head'>
                    <a
                      target='_blank'
                      href='https://t.me/+lCxBNCrBuNRiNmZh'
                      className='telegram__footer relative'
                    >
                      <span className='mainContactForm-head font-teko duration-300 hover:text-gold'>
                        Telegram
                      </span>
                      <div className='hover__link-telegram absolute bottom-[6px] h-[1px] bg-gold'></div>
                    </a>
                    <img
                      src={FormArrow}
                      alt='arrowLogo'
                      className='mainContactForm-head-arrow'
                    />
                  </div>
                  <div className='mainContactForm-con-head'>
                    <a
                      target='_blank'
                      href='https://twitter.com/TeamDefiGold'
                      className='x__footer relative'
                    >
                      <span className='mainContactForm-head font-teko duration-300 hover:text-gold'>
                        X
                      </span>
                      <div className='hover__link-x absolute bottom-[6px] h-[1px] bg-gold'></div>
                    </a>
                    <img
                      src={FormArrow}
                      alt='arrowLogo'
                      className='mainContactForm-head-arrow'
                    />
                  </div>
                  <div className='mainContactForm-con-head'>
                    <a
                      target='_blank'
                      href='https://medium.com/@teamdefi.gold'
                      className='medium__footer relative'
                    >
                      <span className='mainContactForm-head font-teko duration-300 hover:text-gold'>
                        Medium
                      </span>
                      <div className='hover__link-medium absolute bottom-[6px] h-[1px] bg-gold'></div>
                    </a>
                    <img
                      src={FormArrow}
                      alt='arrowLogo'
                      className='mainContactForm-head-arrow'
                    />
                  </div>
                  <div className='mainContactForm-con-head'>
                    <a
                      target='_blank'
                      href='https://zealy.io/cw/defigoldtoken/questboard'
                      className='zealy__footer relative'
                    >
                      <span className='mainContactForm-head font-teko duration-300 hover:text-gold'>
                        Zealy
                      </span>
                      <div className='hover__link-zealy absolute bottom-[6px] h-[1px] bg-gold'></div>
                    </a>
                    <img
                      src={FormArrow}
                      alt='arrowLogo'
                      className='mainContactForm-head-arrow'
                    />
                  </div>
                </div>
              </div>
              <div id='mainContactForm-copyRight'>
                <p className='mainContactForm-copyRight-text font-sfui'>
                  © 2024 DG Labs Ltd. All rights reserved
                </p>
              </div>
            </div>
            <div id='mainContactForm-subscribe'>
              <p className='subscribe-heading pb-[2vh] pt-[2vw] font-sfui'>
                Subscribe for News, Updates and Articles
              </p>
              <div id='subscribeForm' className='subscribeForm'>
                <input
                  type='email'
                  name='formEmail'
                  required
                  ref={subEmailRef}
                  placeholder='E-mail'
                  id='formEmail'
                  className='subscribe-form-input font-sfui'
                />
                <button
                  type='submit'
                  value='SUBSCRIBE NOW'
                  className='subscribe-form-button font-sfui w-full bg-slate-50 text-dark-text py-3 rounded-md mt-2'
                  onClick={onSubscribe}
                >
                  SUBSCRIBE NOW{' '}
                </button>
              </div>
            </div>
            <div id='mainContactForm-form'>
              <p className='mainContactForm-form-head font-teko'>
                You have questions? Contact Us!
              </p>
              <p className='mainContactForm-form-text font-sfui'>
                Our team will be in contact within 1 business day.
              </p>
              <form id='myContactForm'>
                <input
                  type='text'
                  placeholder='Full Name'
                  required
                  ref={fullNameRef}
                  id='formName'
                  className='border-[1px] border-white border-opacity-15 font-sfui duration-150 hover:cursor-pointer hover:border-opacity-30 active:border-opacity-30'
                />
                <input
                  type='email'
                  placeholder='E-mail'
                  required
                  ref={emailRef}
                  id='formEmail'
                  name='email'
                  className='border-[1px] border-white border-opacity-15 font-sfui duration-150 hover:cursor-pointer hover:border-opacity-30 active:border-opacity-30'
                />
                <div id='form-message' className='md:mt-[1.5vw]'>
                  <textarea
                    rows='4'
                    placeholder='Message (optional)'
                    ref={messageRef}
                    className='border-[1px] border-white border-opacity-15 font-sfui duration-150 hover:cursor-pointer hover:border-opacity-30 active:border-opacity-30'
                    id='formMessage'
                  ></textarea>
                  <button
                    id='stagger_button_ani_container_3'
                    type='submit'
                    value='SUBMIT'
                    onClick={onSubmit}
                    className='form-button inline font-sfui md:hidden py-2'
                  >
                    SUBMIT
                  </button>
                  <button
                    id='stagger_button_ani_container_3'
                    type='submit'
                    onClick={onSubmit}
                    className='stagger_animation_btn form-button hidden font-bold font-sfui md:inline'
                  >
                    <span className='flex items-center justify-center overflow-hidden md:p-0'>
                      <p className='stagger_button_3_ani'>S</p>
                      <p className='stagger_button_3_ani'>U</p>
                      <p className='stagger_button_3_ani'>B</p>
                      <p className='stagger_button_3_ani'>M</p>
                      <p className='stagger_button_3_ani'>I</p>
                      <p className='stagger_button_3_ani'>T</p>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className='subsribeFormLapContainer'>
            <div className='subsribe-child f-18 flex items-center justify-between'>
              <p className='md:text-2xl md:leading-7 text-lg leading-[22px] font-sfui text-gold'>
                Subscribe for News, Updates and Articles
              </p>
              <div className='arrow__container flex gap-x-2'>
                <HorizontalDirection />
              </div>
              <form className='border-1 subscribeForm relative flex w-[45%] items-center rounded-md border-[1px] border-white border-opacity-15 duration-150 hover:cursor-pointer hover:border-opacity-30 active:border-opacity-30'>
                <input
                  type='email'
                  name='formEmail'
                  id='formEmail'
                  ref={subEmailRef}
                  required
                  className='w-full bg-transparent py-[0.65rem] pl-3 font-sfui font-extralight text-white placeholder:font-sfui placeholder:font-extralight placeholder:opacity-45 hover:cursor-pointer'
                  placeholder='E-mail'
                />
                <button
                  id='stagger_button_ani_container_4'
                  type='submit'
                  onClick={onSubscribe}
                  className='stagger_animation_btn absolute right-0.5 w-[35%] content-center rounded-sm bg-white py-[1.1vw] xl:py-[0.63vw] font-sfui text-[16px] font-bold text-[#151515] md:text-[0.83vw] xl:text-[0.83vw]'
                >
                  <span className='stagger_button_ani_wrapper_4'>
                    <p className='stagger_button_4_ani'>S</p>
                    <p className='stagger_button_4_ani'>U</p>
                    <p className='stagger_button_4_ani'>B</p>
                    <p className='stagger_button_4_ani'>S</p>
                    <p className='stagger_button_4_ani'>C</p>
                    <p className='stagger_button_4_ani'>R</p>
                    <p className='stagger_button_4_ani'>I</p>
                    <p className='stagger_button_4_ani'>B</p>
                    <p className='stagger_button_4_ani'>E</p>
                    <p className='stagger_button_4_ani ml-2'></p>
                    <p className='stagger_button_4_ani'>N</p>
                    <p className='stagger_button_4_ani'>O</p>
                    <p className='stagger_button_4_ani'>W</p>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investors;
