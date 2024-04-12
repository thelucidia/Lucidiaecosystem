import { motion } from 'framer-motion';
import React from 'react';

const Banner: React.FC = () => {
  return (
    <section className="w-full h-auto p-5 relative text-white flex md:items-center justify-center">
      <img
        src="/assets/images/games/sandstorm/stormracer_banner.jpg"
        alt="career-banner"
        className="w-full h-full object-cover absolute top-0 left-0"
      />

      <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black/80 to-black/10% z-9 "></div>
      <div className="w-full h-full absolute top-0 left-0 bg-[#7700FF33]/20 z-10"></div>

      <div className="container h-auto mx-auto z-10 flex mt-[7rem] md:mt-[10rem] flex flex-col ">
        <motion.div
          initial={{ y: -150 }}
          whileInView={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 60 }}
          className="w-full overflow-hidden flex justify-center"
        >
          <img
            src="/assets/images/games/sandstorm/sandstormracer.svg"
            className="w-[55.8vw] pt-[200px] pb-[160px]"
            alt="sandstorm"
          />
        </motion.div>
        <a
          href="https://drive.google.com/file/d/1pT08KRpvPwnQcxwyGktETCeH8HtZi08v/view"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto pb-[140px]"
        >
          <div className="w-full lg:w-[15rem] relative">
            <div className="py-[20px] w-[237px] absolute font-secondary text-[14px] uppercase leading-normal font-bold text-center hover:text-[#A5FF16] font-secondary z-10 text-white font-[700] text-[12px] group-hover:text-black  transition-colors ease-in-out duration-300">
              see details
            </div>
            <img src="/assets/images/game_button.png" alt="see_details" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Banner;
