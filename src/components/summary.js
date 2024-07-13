import { Fade } from 'react-awesome-reveal';
import './css/summary.css';
import mobilePath from '../assets/img/path_mobile.png';
import landPath from '../assets/img/road.svg';

const Summary = () => {
  return (
    <>
      <div className='hidden sm:flex flex-col h-screen w-full relative'>
        <div className='flex-1 w-[1px] split-line mx-auto'></div>
        <div className='w-[9px] h-[9px] my-10 rounded-full bg-gold point mx-auto'></div>
        <div className='w-[38px] h-16 bg-gold candle mx-auto'></div>
        <div className='absolute h-full w-full xl:px-[250px] md:px-8 sm:px-14 flex flex-row bottom-0 z-10'>
          <Fade duration={500} triggerOnce={false} direction='up'>
            <div className='flex-1 pt-24 lg:pt-32 md:pr-14 sm:pr-6 font-light text-4xl xl:text-[68px] xl:leading-[62px]'>
              <span className='text-gold'>DeFi.Gold</span> is shaking things up
              as the first DEX and NFT marketplace on the Bitcoin blockchain.
            </div>
            <div className='flex-1 flex flex-col pt-32 xl:pt-[342px] md:pl-14 sm:pl-6'>
              <p className='font-sfui text-lg lg:text-xl xl:text-2xl text-base-text pb-[60px]'>
                It's all about trading cool stuff like NFTs, tokens, DAOs, and
                derivatives, but faster and smarter than ever.
                <br />
                Plus, it's the first to bring this kind of smart contract magic
                to Bitcoin!
              </p>
              <p className='font-sfui text-lg lg:text-xl xl:text-2xl text-gold'>
                DeFi.Gold is a DEX controlled by a network of stakeholders and
                run as a public commons, it is not a company.
              </p>
            </div>
          </Fade>
        </div>
        <div className='pl-10 flex flex-row justify-start ml-0'>
          <img src={landPath} alt='path' />
        </div>
      </div>
      <div className='sm:hidden flex flex-col h-screen w-full relative'>
        <div className='flex flex-row my-auto justify-end'>
          <img src={mobilePath} alt='path' />
        </div>
        <div className='absolute top-0 flex flex-col justify-between h-full w-full z-10 px-5 py-[60px]'>
          <Fade duration={500} triggerOnce={false} direction='up'>
            <p className='text-base-text font-light text-[42px] leading-[38px]'>
              <span className='text-gold'>DeFi.Gold</span> is shaking things up
              as the first DEX and NFT marketplace on the Bitcoin blockchain.
            </p>
          </Fade>
          <div className='flex flex-col font-sfui text-lg leading-6 gap-5'>
            <Fade duration={500} triggerOnce={false} direction='up'>
              <p className='text-base-text'>
                It's all about trading cool stuff like NFTs, tokens, DAOs, and
                derivatives, but faster and smarter than ever.
                <br />
                Plus, it's the first to bring this kind of smart contract magic
                to Bitcoin!
              </p>
            </Fade>
            <Fade duration={500} triggerOnce={false} direction='up'>
              <p className='text-gold'>
                DeFi.Gold is a DEX controlled by a network of stakeholders and
                run as a public commons, it is not a company.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
