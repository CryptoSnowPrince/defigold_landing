import { useRef, useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Header from './components/header';
import Summary from './components/summary';
import Pioneer from './components/pioneer';
import Features from './components/features';
import MarketPlace from './components/marketplace';
import Launchpad from './components/launchpad';
import Presentation from './components/presentation';
import Footer from './components/footer';
import Investors from './components/investors';
import { Loader } from '@react-three/drei';
import ScrollToTopButton from './components/scroll';
import Stairs from './components/stairs';
import WelcomeWithLoading from './components/welcomewithloading';
import Welcome from './components/welcome';
import Loading from './components/loading';
import Logo from './assets/img/logo.svg';
import union from './assets/img/Union.png';
import { Fade } from 'react-awesome-reveal';
import './components/css/summary.css';
import mobilePath from './assets/img/path_mobile.png';
import landPath from './assets/img/road.svg';
import gsap from 'gsap';

function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [headerOpened, setHeaderOpened] = useState(false);
  const featuresRef = useRef(null);
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    const launchpadMonkey = gsap.timeline({
      scrollTrigger: {
        trigger: '.about_section',
        start: 'top bottom',
        end: 'top top',
        scrub: 1,
      },
    });

    launchpadMonkey.fromTo(
      '.description',
      { y: '10%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 1, ease: 'power2.inOut' }
    );
  }, []);

  const modifyNavbarStatus = () => {
    setHeaderOpened(showNavbar);
    setShowNavbar(!showNavbar);
  };

  const handleAbout = (e) => {
    e.preventDefault(); // Prevent default anchor click behavior
    modifyNavbarStatus(); // Toggle the navbar
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      }); // Scroll to the section
    }
  };

  const handleFeatures = (e) => {
    e.preventDefault();
    modifyNavbarStatus();
    if (featuresRef.current) {
      featuresRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
      <div className='relative'>
        <div className='flex flex-col items-start w-screen overflow-x-hidden'>
          <div className='flex flex-col'>
            <div className='w-screen hidden sm:flex flex-row justify-between h-full'>
              <div className='flex flex-col w-full'>
                <div className='flex flex-row justify-between items-center h-[92px] px-5 py-5'>
                  <img src={Logo} alt='logo' className='w-[42px] h-[52px]' />
                  <button className='anim-button' onClick={modifyNavbarStatus}>
                    <div className={`${showNavbar ? 'invisible' : ''}`}></div>
                    <div></div>
                    <div className={`${showNavbar ? 'invisible' : ''}`}></div>
                  </button>
                </div>
                <div
                  className={`flex flex-grow flex-col pl-[250px] overflow-y-auto header${
                    showNavbar ? '-expanded' : ''
                  }`}
                >
                  <div className='flex flex-col pt-5'>
                    <a
                      href='#about'
                      className='nav-text-item'
                      onClick={handleAbout}
                    >
                      About
                    </a>
                    <div className='h-[1px] bg-white opacity-10'></div>
                  </div>
                  <div className='flex flex-col pt-5'>
                    <a
                      href='https://nft.defi.gold'
                      target='_blank'
                      rel='noreferrer'
                      className='nav-text-item'
                    >
                      Marketplace
                    </a>
                    <div className='h-[1px] bg-white opacity-10'></div>
                  </div>
                  <div className='flex flex-col pt-5'>
                    <a
                      href='#features'
                      className='nav-text-item'
                      onClick={handleFeatures}
                    >
                      Features
                    </a>
                    <div className='h-[1px] bg-white opacity-10'></div>
                  </div>
                  <div className='flex flex-col pt-5'>
                    <a
                      href='#contact'
                      className='nav-text-item'
                      onClick={handleFeatures}
                    >
                      Contact Us
                    </a>
                    <div className='h-[1px] bg-white opacity-10'></div>
                  </div>
                  <div className='flex flex-row pt-11 justify-between items-center font-sfui'>
                    <span className='font-semiold text-2xl text-gold leading-[28.8px]'>
                      Subscribe for News, Updates and Articles
                    </span>
                    <div className='flex flex-row'></div>
                    <div className='flex flex-row p-1 gap-1 border-solid border-[1px] border-hint-text rounded-md justify-between'>
                      <input
                        type='email'
                        placeholder='E-mail'
                        className='text-xl leading-6 p-4 text-white placeholder:text-hint-text bg-dark-text'
                      />
                      <button className='bg-white font-bold text-base leading-4 px-6 py-4 text-black rounded'>
                        SUBSCRIBE NOW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col shrink-0 items-center px-5 py-5'>
                <a
                  href='https://docsend.com/view/ucfgjceckmzkt2yc'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-gold h-full font-sfui font-bold text-sm leading-[14px] px-6 rounded text-dark-text flex items-center'
                >
                  VIEW PRESENTATION
                </a>
              </div>
            </div>
            <div className='w-screen sm:hidden flex flex-col'>
              <div className='flex flex-row justify-between h-[62px] px-5 py-2.5'>
                <img src={Logo} alt='logo' className='w-[34px] h-[42px]' />
                <div className='flex flex-row gap-5 items-center'>
                  <a
                    className='bg-gold h-full font-sfui font-bold text-sm leading-[14px] px-6 rounded text-dark-text flex items-center'
                    target='_blank'
                    href='https://docsend.com/view/ucfgjceckmzkt2yc'
                    rel='noopener noreferrer'
                  >
                    PRESENTATION
                  </a>
                  <button className='anim-button' onClick={modifyNavbarStatus}>
                    <div className={`${showNavbar ? 'invisible' : ''}`}></div>
                    <div></div>
                    <div className={`${showNavbar ? 'invisible' : ''}`}></div>
                  </button>
                </div>
              </div>
              <div
                className={`flex flex-col px-5 overflow-y-auto justify-between header${
                  showNavbar ? '-expanded' : ''
                }`}
              >
                <div className='flex flex-col'>
                  <div className='flex flex-col pt-5'>
                    <a
                      href='#about'
                      className='nav-text-item'
                      onClick={handleAbout}
                    >
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
                    <a
                      href='#features'
                      className='nav-text-item'
                      onClick={handleFeatures}
                    >
                      Features
                    </a>
                    <div className='h-[1px] bg-white opacity-10'></div>
                  </div>
                  <div className='flex flex-col pt-5'>
                    <a
                      href='#contact'
                      className='nav-text-item'
                      onClick={handleFeatures}
                    >
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
                  <div className='bg-[#111111] pb-2.5 border-[1px] border-[#F8F8F81A] rounded-md flex justify-between items-center'>
                    <img
                      src={mobilePath}
                      alt='mobile'
                      className='w-[21px] h-[28px]'
                    />
                    <span className='text-white font-sfui font-semibold text-base leading-[18.4px]'>
                      DOWNLOAD MOBILE APP
                    </span>
                    <img
                      src={union}
                      alt='union'
                      className='w-[14px] h-[16px]'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col w-full bg-[#191919] h-full bg-no-repeat bg-center bg-cover'>
              <div className='bg-[#111111] px-5 pt-5'>
                <h1 className='text-gold font-sfui font-bold text-[28px] leading-[30.3px] mb-2.5'>
                  {showNavbar ? (
                    <span className='anim-text-header'>
                      {`SUMMARY - SPACE DIGITAL MARKETING
                      API SOFTWARE PROJECT TO INTEGRATE GLOBAL MARKETS WITH DIGITAL PRODUTCS.`}
                    </span>
                  ) : (
                    `Welcome to Moonfarmer`
                  )}
                </h1>
                <p className='text-[#F8F8F8] font-sfui text-[16px] leading-[28px] mb-2.5'>
                  We're working on a project to create an intuitive web app to
                  generate and deploy smart contracts for creating tokens or
                  deploying simple DAO votes, proof of concept includes a header
                  with a dark gray background, tab bar with 'Create' and
                  'History', and a 'Connect' button on the right side, 'Create'
                  page includes options for 'Create Token' or 'Deploy DAO Vote',
                  showing relevant input fields based on the selection, and
                  interacts with smart contracts when clicking the create or
                  deploy buttons, history page records all token creation
                  history, including token symbol, name, and supply, backend and
                  MongoDB database are needed to store the history of created
                  tokens
                </p>
                <button className='bg-gold py-3 px-4 rounded-lg text-dark-text font-sfui font-semibold text-base leading-[22px]'>
                  CREATE NEW TOKEN
                </button>
              </div>
            </div>
          </div>
          {!showNavbar && (
            <>
              <div id='about' className='w-full' ref={aboutSectionRef}>
                {/* About section content */}
                <Summary />
              </div>
              <Pioneer />
              <Stairs />
              <div id='features' className='w-full' ref={featuresRef}>
                <Features />
              </div>
              <MarketPlace />
              <Launchpad />
              <Presentation />
              <Investors />
              <div id='contact' className='w-full'>
                <Footer />
              </div>
            </>
          )}
        </div>
      </div>
      <Loader />
      <ScrollToTopButton />
      <ToastContainer />
    </>
  );
}

export default App;
