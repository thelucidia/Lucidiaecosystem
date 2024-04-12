import { motion } from 'framer-motion';
import React from 'react';

const Banner: React.FC = () => {
  return (
    <section className="w-full h-auto p-5 relative text-white flex md:items-center justify-center">
      <img
        src="/assets/images/careers/career-bg.jpg"
        alt="career-banner"
        className="w-full h-full object-cover absolute top-0 left-0"
      />

      <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black/20 to-[#0ED4FF4D]/30 z-10"></div>
      <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black to-black/51% z-9 "></div>

      {/* <img src="/hero/herobg.webp" alt="Herobg" className="w-full h-full object-cover absolute top-0 left-0" /> */}

      <div className="container w-full h-auto mx-auto relative z-10 flex mt-[7rem] md:mt-[10rem] flex flex-row relative ">
        <motion.div
          initial={{ y: -150 }}
          whileInView={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 60 }}
          className="w-full flex"
        >
          <h1 className="flex items-center font-secondary 2xl:min-w-[750px] leading-normal w-auto uppercase text-3xl md:text-5xl 2xl:text-[72px] 2xl:leading-[5.5rem] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#9586FF] to-[#0ED4FF] 2xl:mb-[18rem] lg:mb-[10rem] md:mb-[6rem] sm:mb-[4rem] mb-[2rem] ">
            join us as lucidian
          </h1>
        </motion.div>
        <img src="/assets/images/careers/hero.png" alt="Hero" className="object-cover bottom-0 w-[38vw] mx-auto" />

        {/*
        <div className="w-full relative flex">
          <h1 className="font-primary text-3xl md:text-5xl 2xl:text-[72px] max-w-[40rem] 2xl:leading-[5.5rem] font-semibold md:hidden block text-transparent bg-clip-text bg-gradient-to-r from-[#0ED4FF] via-[#9586FF] to-[#FFFFFF]">
            join us as lucidian
          </h1>
          <img
            src="/assets/images/careers/hero.png"
            alt="Hero"
            className="object-cover top-0 md:w-auto h-[30vh] sm:h-[35vh] -mt-4 md:h-[70vh] mx-auto "
          />
        </div> */}
      </div>
      <img src="/hero/navline.webp" alt="Navline" className="absolute z-11 left-0 bottom-5 w-full xl:block hidden" />
    </section>
  );
};

export default Banner;
