import { useRef, useState } from 'react';
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
import { useEffect } from 'react';
import gsap from 'gsap';
import { Fade } from 'react-awesome-reveal';
import './components/css/summary.css';
import mobilePath from './assets/img/path_mobile.png';
import landPath from './assets/img/road.svg';

function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [headerOpened, setHeaderOpened] = useState(false);
  const featuresRef = useRef(null);

  useEffect(() => {
    const launchpadMonkey = gsap.timeline({
      scrollTrigger: {
        trigger: '.about_section',
        start: 'top bottom',
        end: `top top`,
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
    const section = document.getElementById('about'); // Get the section by ID
    console.log(section);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Scroll to the section
    }
  };

  const handleFeatures = (e) => {
    // e.preventDefault();
    modifyNavbarStatus();
    // console.log(featuresRef.current);
    // window.scrollTo({ featuresRef, behavior: 'smooth' });
    // featuresRef.current.scrollIntoView({ behavior: 'smooth' });
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
                      onClick={handleFeatures}
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
                      onClick={handleFeatures}
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
          {/* <Header visibility={showNavbar} setNavbar={modifyNavbarStatus} /> */}
          {!showNavbar && (
            <>
              <div className='flex md:hidden w-full'>
                {!headerOpened && <Loading />}
                <Welcome />
              </div>
              <div className='hidden md:flex w-full'>
                <WelcomeWithLoading prevStatus={headerOpened} />
              </div>
              <div id='about' className='w-full'>
                <div className='about_section hidden sm:flex flex-col h-screen w-full relative'>
                  <div className='flex-1 w-[1px] split-line mx-auto'></div>
                  <div className='w-[9px] h-[9px] my-10 rounded-full bg-gold point mx-auto'></div>
                  <div className='w-[38px] h-16 bg-gold candle mx-auto'></div>
                  <div className='description absolute h-full w-full xl:px-[120px] 2xl:px-[250px] lg:px-16 md:px-8 sm:px-14 flex flex-row bottom-0 z-10'>
                    {/* <Fade duration={500} triggerOnce={false} direction='up'> */}
                    <div className='flex-1 lg:pr-[120px] pt-24 lg:pt-32 md:pr-14 sm:pr-6 font-light text-4xl xl:text-[68px] xl:leading-[62px]'>
                      <span className='text-gold'>DeFi.Gold</span> is shaking
                      things up as the first DEX and NFT marketplace on the
                      Bitcoin blockchain.
                    </div>
                    <div className='flex-1 flex flex-col pt-32 lg:pt-52 xl:pt-[342px] lg:pl-[120px] md:pl-14 sm:pl-6'>
                      <p className='font-sfui text-lg lg:text-xl xl:text-2xl text-base-text pb-[60px]'>
                        It's all about trading cool stuff like NFTs, tokens,
                        DAOs, and derivatives, but faster and smarter than ever.
                        <br />
                        Plus, it's the first to bring this kind of smart
                        contract magic to Bitcoin!
                      </p>
                      <p className='font-sfui text-lg lg:text-xl xl:text-2xl text-gold'>
                        DeFi.Gold is a DEX controlled by a network of
                        stakeholders and run as a public commons, it is not a
                        company.
                      </p>
                    </div>
                    {/* </Fade> */}
                  </div>
                  <div className='pl-10 flex flex-row justify-start ml-0'>
                    <img src={landPath} alt='path' />
                  </div>
                </div>
                <div className='about_section sm:hidden flex flex-col h-screen w-full relative'>
                  <div className='flex flex-row my-auto justify-end'>
                    <img src={mobilePath} alt='path' />
                  </div>
                  <div className='description absolute top-0 flex flex-col justify-between h-full w-full z-10 px-5 py-[60px]'>
                    {/* <Fade duration={500} triggerOnce={false} direction='up'> */}
                    <p className='text-base-text font-light text-[42px] leading-[38px]'>
                      <span className='text-gold'>DeFi.Gold</span> is shaking
                      things up as the first DEX and NFT marketplace on the
                      Bitcoin blockchain.
                    </p>
                    {/* </Fade> */}
                    <div className='flex flex-col font-sfui text-lg leading-6 gap-5'>
                      {/* <Fade duration={500} triggerOnce={false} direction='up'> */}
                      <p className='text-base-text'>
                        It's all about trading cool stuff like NFTs, tokens,
                        DAOs, and derivatives, but faster and smarter than ever.
                        <br />
                        Plus, it's the first to bring this kind of smart
                        contract magic to Bitcoin!
                      </p>
                      {/* </Fade> */}
                      {/* <Fade duration={500} triggerOnce={false} direction='up'> */}
                      <p className='text-gold'>
                        DeFi.Gold is a DEX controlled by a network of
                        stakeholders and run as a public commons, it is not a
                        company.
                      </p>
                      {/* </Fade> */}
                    </div>
                  </div>
                </div>
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
