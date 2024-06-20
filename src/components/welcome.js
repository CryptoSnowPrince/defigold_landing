import flameVideo from '../assets/img/flames.mp4';
import lavaVideo from '../assets/img/lava.mp4';
import heroImage from '../assets/img/hero.webp';

const Welcome = () => {
  return (
    <div className='flex flex-col items-center bg-dark-text z-10 overflow-x-hidden mx-auto h-[calc(100vh - 62px)] sm:h-[calc(100vh - 92px)]'>
      <div className='relative max-sm:mt-[58px]'>
        <video
          className='globe_container_flame'
          autoPlay
          playsInline
          loop
          muted
        >
          <source src={flameVideo} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <div className='globe__container relative z-[1] h-[90vw] w-[90vw] overflow-hidden rounded-full md:h-[36.5vw] md:w-[36.5vw]'>
          <img className='absolute w-full' src={heroImage} alt='' />
          <video
            className='absolute -z-10 w-full rounded-full p-[2.5vw] md:p-[0.5vw]'
            autoPlay
            playsInline
            loop
            muted
          >
            <source src={lavaVideo} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className='z-[2] sm:mx-auto mt-[-70px] sm:mt-[-147px] px-5 gap-2.5 sm:gap-0'>
        <p className='font-medium text-[74px] leading-[66px] sm:text-[202px] sm:leading-[182px] sm:text-center text-base-text'>
          Welcome to <span className='text-gold'>DeFi.Gold</span>
        </p>
        <p className='font-sfui text-[22px] leading-[28px] sm:text-[34px] sm:leading-[44px] sm:text-center'>
          Revolutionizing the Bitcoin Blockchain
        </p>
      </div>
    </div>
  );
};

export default Welcome;
