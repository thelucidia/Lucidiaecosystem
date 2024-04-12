import React, { useState } from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { LiaTelegramPlane } from 'react-icons/lia';
import { RxDiscordLogo } from 'react-icons/rx';
import { TfiWorld } from 'react-icons/tfi';
import MainVideo from '../../../../videos/home_app.mp4';
import Detail from './Detail';

const Banner: React.FC = () => {
  const icons = [
    {
      link: 'https://t.me/Lucidia_io',
      icon: <LiaTelegramPlane />,
    },
    {
      link: 'https://discord.gg/lucidia',
      icon: <RxDiscordLogo />,
    },
    {
      link: 'https://twitter.com/lucidia_io',
      icon: <BsTwitterX />,
    },
    {
      link: 'https://youtube.com/@lucidia_official',
      icon: <TfiWorld />,
    },
  ];

  const [trueLoading, setTrueLoading] = useState(true);

  const handleTrue = () => {
    setTimeout(() => {
      setTrueLoading(false);
    }, 1500);
  };

  return (
    <section className="w-full min-h-screen relative text-white overflow-hidden bg-bg">
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
        src={MainVideo}
        preload={'auto'}
        onLoadedData={handleTrue}
        playsInline
        className="w-full h-screen object-cover absolute top-0 left-0"
      />
      {/* <img
        src="/assets/app/games/curse.jpg"
        alt="game_background"
        className="w-full h-screen object-cover absolute left-0"
      /> */}
      <div className="w-full h-screen absolute top-0 left-0 bg-gradient-to-t from-black to-[#0ED4FF33]/20 z-10"></div>
      <div className="container mx-auto mt-[216px] flex flex-col gap-y-[180px]">
        <div className="flex flex-row gap-x-[90px]">
          <ul className="flex flex-col w-fit lg:text-5xl md:text-4xl sm:text-3xl text-2xl z-10 md:block hidden">
            {icons.map((items, i) => {
              return (
                <li className="hover:scale-[1.1] py-5 transition-all ease-in-out duration-300 hover:text-cyan" key={i}>
                  <a href={items.link} target="_blank" rel="noopener noreferrer" className="text-[32px]">
                    {items.icon}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="z-20">
            <h1 className="uppercase xl:text-[62px] lg:text-[52px] md:text-[42px] sm:text-[32px] text-[26px] text-white font-primary max-w-[650px] pb-[30px] uppercase font-bold">
              Welcome to Lucidia
            </h1>
            <h4 className="md:text-[18px] text-[16px] text-white text-secondary font-primary font-semibold max-w-[652px]">
              The frontier of gaming innovation in the Middle East. We're redefining the gaming landscape by integrating
              the thrilling world of traditional gaming with the boundless possibilities of blockchain technology.
              Discover a new era of gaming with us.
            </h4>
          </div>
        </div>
        <Detail item={'explore'} />
      </div>
    </section>
  );
};
export default Banner;
