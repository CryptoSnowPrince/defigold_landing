import investorsBg from '../assets/img/compressed/investors-bg.webp';
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
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Zoom, Navigation, Pagination } from 'swiper/modules';
import { useEffect } from 'react';
import gsap from 'gsap';

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
            <SwiperSlide className='swiper-slide invester-slide'>
              <div className='image-container'>
                <img src={investor.avatar} alt='investor-img' />
              </div>
              <div className='text absolute bottom-0 w-full items-center justify-center rounded-b bg-white px-5 text-[32px] leading-7 md:text-[50px] md:leading-[45px] text-dark-text py-2 '>
                <p>{investor.name}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div class='z-99 mt-6 flex justify-center 2xl:mt-12'>
        <div class='mr-[20vw] hidden items-center justify-center gap-2.5 md:flex lg:mr-[14vw]'>
          <button
            id='prevSlide'
            class='flex size-14 items-center justify-center rounded border border-[#F8f8f81a] p-5 transition-all delay-100 ease-in hover:border hover:border-gold 2xl:size-20'
          >
            <img src={prevImg} alt='prev-slide' />
          </button>
          <button
            id='nextSlide'
            class='ttransition-all flex size-14 items-center justify-center rounded border border-[#F8f8f81a] p-5 delay-100 ease-in hover:border hover:border-gold 2xl:size-20'
          >
            <img src={nextImg} alt='next-slide' />
          </button>
        </div>

        <div class='absolute left-1 pl-6 md:left-1/2 lg:pl-0'>
          <img src={upPointer} alt='' />

          <p class='invester-text w-[95%] text-left font-sfui text-[4.27vw] leading-6 text-white md:text-[0.93vw] md:leading-[1.3vw] md:w-[35vw]'></p>
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
    </section>
  );
};

export default Investors;
