import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import axios from 'axios';
import Swal from 'sweetalert2';
// import 'animate.css';
import ContactFormBit from '../assets/img/contactFormAssets/compressed/contactFormBit.webp';
import FormArrow from '../assets/img/contactFormAssets/formArrow.png';
import FormLight from '../assets/img/contactFormAssets/compressed/formLight.mp4';
import HorizontalDirection from './horizontaldirection';
import { toast } from 'react-toastify';

gsap.registerPlugin(ScrollTrigger);

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const Footer = () => {
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

  return (
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
                    rel='noreferrer'
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
                    rel='noreferrer'
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
                    rel='noreferrer'
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
                    rel='noreferrer'
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
  );
};

export default Footer;
