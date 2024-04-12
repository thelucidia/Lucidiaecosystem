import MainVideo from '../../../videos/home_app.mp4';
import ProductVideo from '../../../videos/hero.mp4';
import { useState } from 'react';
// import { motion } from 'framer-motion';
import clsx from 'clsx';

interface IHero {
  id: string;
}

interface IData {
  landing: {
    image: string;
    title: string;
    desc: string;
    buttons: boolean;
  };
  'our-products': {
    image: string;
    title: string;
    desc: string;
    buttons: boolean;
  };
  [key: string]: {
    image: string;
    title: string;
    desc: string;
    buttons: boolean;
  };
}
const data: IData = {
  landing: {
    image: '/hero/hero.svg',
    title: 'Elevating gaming through web3 solutions',
    desc: 'Introducing the first comprehensive web3 gaming ecosystem in the Middle East',
    buttons: true,
  },
  'our-products': {
    image: '/coins.webp',
    title: 'Welcome to lucidia`s ecosystem',
    desc: 'Explore our suite of innovative products designed for the vibrant Middle Eastern gaming community. From unique marketplaces to advanced NFT tools, Lucidia is your gateway to the future of gaming.',
    buttons: false,
  },
};

const Hero: React.FC<IHero> = ({ id }: IHero) => {
  const item = data[id];
  const [trueLoading, setTrueLoading] = useState(true);

  const handleTrue = () => {
    setTimeout(() => {
      setTrueLoading(false);
    }, 1500);
  };

  return (
    <section className="w-full min-h-screen p-5 relative text-white flex md:items-center justify-center">
      <div
        className={`w-full h-screen bg-black fixed z-30 top-0 left-0 flex flex-col items-center justify-center  transition-all ease-in-out duration-300 ${trueLoading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} `}
      >
        <div className={`animate-pulse flex justify-center items-center flex-col`}>
          <img src="/loading.svg" alt="Logo" className="w-24" />
          <h1 className="font-primary font-semibold text-2xl mt-10 tracking-widest">LOADING</h1>
        </div>
      </div>
      <video
        autoPlay
        muted
        loop
        src={id === 'landing' ? MainVideo : ProductVideo}
        preload={'auto'}
        onLoadedData={handleTrue}
        playsInline
        className="w-full h-screen object-cover absolute top-0 left-0"
      />

      <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-prpl/50 to-black z-10"></div>

      <div className="container w-full h-auto mx-auto relative z-10 flex mt-[7rem] md:mt-[10rem] flex-col-reverse md:flex-row relative">
        <div className="w-full flex flex-col gap-y-[10px]">
          <h1
            className={clsx(
              'text-3xl md:text-5xl 2xl:text-[60px]  font-primary max-w-[800px] 2xl:leading-[5.5rem] uppercase font-semibold md:block hidden text-transparent bg-clip-text bg-gradient-to-r from-[#0ED4FF] via-[#9586FF] to-[#FFFFFF]',
              // item.buttons ? 'text-3xl md:text-5xl 2xl:text-[72px]' : 'text-[62px]',
            )}
          >
            {item.title}
          </h1>
          {item.desc}
          {item.buttons && (
            <>
              <div className="flex gap-x-3 mt-[80px] md:flex-row flex-col gap-y-10">
                <a href="https://discord.gg/lucidia" target="_blank" rel="noopener noreferrer" className="">
                  <button className=" w-full md:w-[9rem] h-14 clipped2  relative font-bold flex items-center justify-center scale-x-[-1] group">
                    <div className="absolute bg-cyan w-full h-full left-0 top-0 right-0 bottom-0 m-auto clipped2 group-hover:bg-white transition-colors ease-in-out duration-300"></div>
                    <h1 className="font-secondary relative z-10 text-black font-[700] text-[12px] scale-x-[-1] ">
                      Join Discord
                    </h1>
                  </button>
                </a>
                <a href="https://t.me/Lucidia_io" target="_blank" rel="noopener noreferrer" className="">
                  <button className=" w-full md:w-[13rem] h-14 clipped2 bg-white relative  font-bold flex items-center justify-center scale-x-[-1] group">
                    <div className="absolute bg-[#2e194c] w-[98%] h-[96%] left-0 top-0 right-0 bottom-0 m-auto clipped2 group-hover:bg-white transition-bg ease-in-out duration-300">
                      <img
                        src="/hero/trans.webp"
                        alt="Herobg"
                        className="w-full h-full object-cover absolute top-0 left-0 group-hover:opacity-0 transition-opacity ease-in-out duration-300"
                      />
                    </div>
                    <h1 className="font-secondary relative z-10 text-white font-[700] text-[12px] scale-x-[-1] group-hover:text-black  transition-colors ease-in-out duration-300">
                      Join Telegram
                    </h1>
                  </button>
                </a>
              </div>
            </>
          )}
        </div>

        <div className="w-full relative flex">
          <h1 className="font-primary text-3xl md:text-5xl 2xl:text-[72px] max-w-[40rem] 2xl:leading-[5.5rem] font-semibold md:hidden block text-transparent bg-clip-text bg-gradient-to-r from-[#0ED4FF] via-[#9586FF] to-[#FFFFFF]">
            {item.title}
          </h1>
          <img
            src={`${item.image}`}
            alt="Hero"
            className={clsx('object-cover top-0 md:w-auto h-[30vh] sm:h-[35vh] -mt-4 md:h-[70vh] mx-auto')}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
