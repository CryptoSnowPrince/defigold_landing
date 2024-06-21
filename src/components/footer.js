import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ContactFormBit from '../assets/img/contactFormAssets/compressed/contactFormBit.webp';
import FormArrow from '../assets/img/contactFormAssets/formArrow.png';
import FormLight from '../assets/img/contactFormAssets/compressed/formLight.mp4';
import ArrowUp from '../assets/img/arrow-up.svg';
import HorizontalDirection from './horizontaldirection';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
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
    gsap.to('#scrollUpArrow', {
      scrollTrigger: {
        trigger: '.swiper-slide',
        start: '+=300',
        end: '+=150',
        scrub: true,
      },
      opacity: 1,
      scale: 1.5,
    });
    gsap.to('#scrollUpArrow', {
      y: -10, // Move up by 10 pixels
      duration: 0.8, // Duration of each pulse
      repeat: -1, // Repeat infinitely
      yoyo: true, // Go back to the original position
      ease: 'power1.inOut', // Easing function for smooth effect
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

    const scrollUpButton = document.getElementById('scrollUp');
    scrollUpButton.addEventListener('click', () => {
      gsap.to(window, {
        duration: 2,
        scrollTo: 0,
        ease: 'power2.inOut',
      });
    });
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

  return (
    <div
      id='footer'
      className='static bottom-0 left-0 w-full right-0 hidden md:block'
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
                    href='https://t.me/+lCxBNCrBuNRiNmZh'
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
                    href='https://zealy.io/cw/defigoldtoken'
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
                Copyright © 2024 DeFi.Gold. All rights reserved
              </p>
            </div>
          </div>
          <div id='mainContactForm-subscribe'>
            <p className='subscribe-heading pb-[2vh] pt-[2vw] font-sfui'>
              Subscribe for News, Updates and Articles
            </p>
            <form id='subscribeForm' className='subscribeForm'>
              <input
                type='email'
                name='formEmail'
                required
                placeholder='E-mail'
                id='formEmail'
                className='subscribe-form-input font-sfui'
              />
              <input
                type='submit'
                value='SUBSCRIBE NOW'
                className='subscribe-form-button font-sfui'
              />
            </form>
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
                id='formName'
                className='border-[1px] border-white border-opacity-15 font-sfui duration-150 hover:cursor-pointer hover:border-opacity-30 active:border-opacity-30'
              />
              <input
                type='email'
                placeholder='E-mail'
                required
                id='formEmail'
                name='email'
                className='border-[1px] border-white border-opacity-15 font-sfui duration-150 hover:cursor-pointer hover:border-opacity-30 active:border-opacity-30'
              />
              <div id='form-message' className='md:mt-[1.5vw]'>
                <textarea
                  rows='4'
                  placeholder='Message (optional)'
                  className='border-[1px] border-white border-opacity-15 font-sfui duration-150 hover:cursor-pointer hover:border-opacity-30 active:border-opacity-30'
                  id='formMessage'
                ></textarea>
                <input
                  type='submit'
                  value='SUBMIT'
                  className='form-button inline font-sfui md:hidden'
                />
                <button
                  id='stagger_button_ani_container_3'
                  type='submit'
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
        <button
          id='scrollUp'
          className='absolute bottom-28 right-[5vw] z-10 flex-row md:bottom-24'
        >
          <img
            id='scrollUpArrow'
            src={ArrowUp}
            className='h-5 w-5 text-white md:h-6 md:w-6'
            alt='Scroll up'
          />
        </button>
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
                required
                className='w-full bg-transparent py-[0.65rem] pl-3 font-sfui font-extralight text-white placeholder:font-sfui placeholder:font-extralight placeholder:opacity-45 hover:cursor-pointer'
                placeholder='E-mail'
              />
              <button
                id='stagger_button_ani_container_4'
                type='submit'
                className='stagger_animation_btn absolute right-0.5 w-[35%] content-center rounded-sm bg-white py-[0.63vw] font-sfui text-[16px] font-bold text-[#151515] md:text-[0.83vw] xl:text-[0.83vw]'
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
