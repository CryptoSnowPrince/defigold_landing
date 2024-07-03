import { useEffect, useRef, useState } from 'react';
import Logo from '../assets/img/logo.svg';
import union from '../assets/img/Union.png';

const Header = ({ visibility, setNavbar }) => {
  return (
    <div className='flex flex-col'>
      <div className='w-screen hidden sm:flex flex-row justify-between h-full'>
        <div className='flex flex-col w-full'>
          <div className='flex flex-row justify-between items-center h-[92px] px-5 py-5'>
            <img src={Logo} alt='logo' className='w-[42px] h-[52px]' />
            <button className='anim-button' onClick={setNavbar}>
              <div className={`${visibility ? 'invisible' : ''}`}></div>
              <div></div>
              <div className={`${visibility ? 'invisible' : ''}`}></div>
            </button>
          </div>
          <div
            className={`flex flex-grow flex-col pl-[250px] overflow-y-auto header${
              visibility ? '-expanded' : ''
            }`}
          >
            <div className='flex flex-col pt-5'>
              <a href='#' className='nav-text-item'>
                About
              </a>
              <div className='h-[1px] bg-white opacity-10'></div>
            </div>
            <div className='flex flex-col pt-5'>
              <a href='https://nft.defi.gold' className='nav-text-item'>
                Marketplace
              </a>
              <div className='h-[1px] bg-white opacity-10'></div>
            </div>
            <div className='flex flex-col pt-5'>
              <a href='#' className='nav-text-item'>
                Features
              </a>
              <div className='h-[1px] bg-white opacity-10'></div>
            </div>
            <div className='flex flex-col pt-5'>
              <a href='#' className='nav-text-item'>
                Contact Us
              </a>
              <div className='h-[1px] bg-white opacity-10'></div>
            </div>
            <div className='flex flex-row pt-11 justify-between items-center font-sfui'>
              <span className='font-semiold text-2xl text-gold leading-[28.8px]'>
                Subscribe for News, Updates and Articles
              </span>
              <div className='flex flex-row'></div>
              <div className='flex flex-row p-1 border-solid border-[1px] border-hint-text rounded-md justify-between'>
                <input
                  type='email'
                  placeholder='E-mail'
                  className='text-xl leading-6 p-4 text-white placeholder:text-hint-text'
                />
                <button className='bg-white font-bold text-base leading-4 px-6 py-4 text-black rounded'>
                  SUBSCRIBE NOW
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col shrink-0 items-center px-5 py-5'>
          <button className='bg-gold h-full font-sfui font-bold text-sm leading-[14px] px-6 rounded text-dark-text'>
            VIEW PRESENTATION
          </button>
        </div>
      </div>
      <div className='w-screen sm:hidden flex flex-col'>
        <div className='flex flex-row justify-between h-[62px] px-5 py-2.5'>
          <img src={Logo} alt='logo' className='w-[34px] h-[42px]' />
          <div className='flex flex-row gap-5 items-center'>
            <button className='bg-gold h-full font-sfui font-bold text-sm leading-[14px] px-6 rounded text-dark-text'>
              PRESENTATION
            </button>
            <button className='anim-button' onClick={setNavbar}>
              <div className={`${visibility ? 'invisible' : ''}`}></div>
              <div></div>
              <div className={`${visibility ? 'invisible' : ''}`}></div>
            </button>
          </div>
        </div>
        <div
          className={`flex flex-col px-5 overflow-y-auto justify-between header${
            visibility ? '-expanded' : ''
          }`}
        >
          <div className='flex flex-col'>
            <div className='flex flex-col pt-5'>
              <a href='#' className='nav-text-item'>
                About
              </a>
              <div className='h-[1px] bg-white opacity-10'></div>
            </div>
            <div className='flex flex-col pt-5'>
              <a href='https://nft.defi.gold' className='nav-text-item'>
                Marketplace
              </a>
              <div className='h-[1px] bg-white opacity-10'></div>
            </div>
            <div className='flex flex-col pt-5'>
              <a href='#' className='nav-text-item'>
                Features
              </a>
              <div className='h-[1px] bg-white opacity-10'></div>
            </div>
            <div className='flex flex-col pt-5'>
              <a href='#' className='nav-text-item'>
                Contact Us
              </a>
              <div className='h-[1px] bg-white opacity-10'></div>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-col mb-[30px]'>
              <span className='py-5 text-gold font-sfui font-semibold text-lg leading-[22px]'>
                Subscribe for News, Updates and Articles
              </span>
              <input
                type='email'
                placeholder='E-mail'
                className='py-4 px-[18px] border-solid border-[1px] border-[#F8F8F81A] rounded-md bg-transparent mx-[1px] font-sfui text-base leading-5 placeholder:text-hint-text mb-3'
              />
              <button className='bg-base-text rounded-md text-dark-text px-6 py-4 text-base leading-4 font-bold font-sfui'>
                SUBSCRIBE NOW
              </button>
            </div>
            <div className='bg-[#111111] pb-2 px-[120px] mx-[-20px] border-t-[1px] border-t-[#f8f8f81a] border-solid'>
              <div className='flex flex-col items-center justify-center'>
                <div className='flex flex-row gap-[6px] items-center'>
                  <img src={union} alt='lock' className='w-3 h-3' />
                  <span className='py-3 mx-auto text-[#676b6c] text-sm leading-[14px] font-sfui'>
                    defi.gold
                  </span>
                </div>
                <div className='w-full h-[3px] rounded bg-white'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
