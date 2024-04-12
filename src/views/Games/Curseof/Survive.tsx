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
            className="md:w-[60%] overflow-hidden"
          >
            <h2 className="font-medium text-left md:text-[62px] text-[32px] leading-normal font-primary text-cyan max-w-[320px]">
              You have to survive!
            </h2>
          </motion.div>
          <motion.div
            initial={{ x: 150 }}
            whileInView={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 60 }}
            className="sm:w-[58.9%] flex flex-col gap-y-5 lg:py-[134px] md:py-16 sm:py-7 py-5 overflow-hidden"
          >
            <div className="w-full h-auto clipped2 bg-gry relative  font-[500] flex items-center justify-center scale-x-[-1] rounded-md">
              <div className="scale-x-[-1] text-white w-full h-full md:md:border-l-[0.5rem] border-cyan rounded-md">
                <p className="py-16 pl-7 pr-1 text-[26px] font-primary leading-[36px]">
                  Dive into "Curse Of The Pharaoh" a groundbreaking hybrid FPS where ancient mythology and futuristic
                  warfare collide in the heart of a reimagined Dubai. As ancient plagues awaken, transforming the city
                  into a nexus of mythological resurgence, you're thrust into a world where your shooting skills are
                  just as crucial as the alliances you form and the strategies you devise.
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
