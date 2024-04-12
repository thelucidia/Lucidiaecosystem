import { motion } from 'framer-motion';
import React from 'react';

const Survive: React.FC = () => {
  return (
    <section className="w-full h-full relative">
      <div className="w-full h-full overflow-hidden px-5">
        <div className="container w-full mx-auto flex justify-between lg:flex-row flex-col sm:items-center items-start">
          <motion.div
            initial={{ x: -150 }}
            whileInView={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 60 }}
            className="md:w-[80%] overflow-hidden"
          >
            <img src="/assets/images/games/crypto/unleash.svg" alt="unleash" />
          </motion.div>
          <motion.div
            initial={{ x: 150 }}
            whileInView={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 60 }}
            className="sm:w-[58.9%] flex flex-col gap-y-5 lg:py-[10px] md:py-16 sm:py-7 py-5 overflow-hidden"
          >
            <div className="w-full h-auto clipped2 bg-gry relative  font-[500] flex items-center justify-center scale-x-[-1] rounded-md">
              <div className="scale-x-[-1] text-white w-full h-full md:md:border-l-[0.5rem] border-[#9AFC27] rounded-md">
                <p className="py-16 pl-7 pr-1 text-[18px] font-primary leading-[28px]">
                  Welcome to "Cryptocraft", a boundless universe where your imagination is the only limit. Dive into an
                  open-world sandbox experience that combines the joy of building and survival with the innovative
                  features of Web3 and NFTs. In Cryptocraft, every creation, every exploration, and every interaction
                  enriches your journey and the world around you.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Survive;
