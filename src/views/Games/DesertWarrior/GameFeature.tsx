import { motion } from 'framer-motion';
import React from 'react';
import parse from 'html-react-parser';

const data = [
  {
    title: 'Game Overview',
    desc: [
      "'Desert Warrios' is more than an FPS; it's a test of tactics and teamwork. Navigate through challenging terrains, leverage cover, and synchronize with your squad to dominate the battlefield.",
      "<span class='text-[#70F] mt-[24px]'>Core Mechanics: </span> Immerse yourself in a variety of actions including sprinting for cover, precision aiming, and deploying strategic equipment, all designed to encourage thoughtful, tactical gameplay.",
      "<span class='text-[#70F]'>Game Modes:</span>  Whether you prefer the intensity of 1v1 duels, the strategic depth of 2v2 skirmishes, or the classic teamwork of 5v5 battles, 'Desert Warriors' has a mode for every warrior.",
    ],
    image: '/assets/images/games/desert/feature.jpg',
  },
];
const GameFeature: React.FC = () => {
  return (
    <section className="container mx-auto h-full relative">
      <div className="w-full h-full overflow-hidden px-5 py-20">
        <h2 className="flex items-center font-primary leading-normal w-auto text-[62px] 2xl:text-[62px] 2xl:leading-[5.5rem] font-[500] text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#9786FF] to-[#0ED4FFBD]">
          Game Features
        </h2>
        {data.map((item, i) => {
          return (
            <div
              key={i}
              className="container w-full mx-auto flex justify-between lg:flex-row flex-col sm:items-center items-start"
            >
              <motion.div
                initial={{ x: -150 }}
                whileInView={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 60 }}
                className="md:w-[80%] overflow-hidden"
              >
                <div className="mt-[30px] lg:w-[37vw] lg:h-[23.3vw] max-w-[340px] max-h-[420px] rounded-md clipped2 bg-white relative font-bold flex items-center justify-center scale-x-[-1] ">
                  <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black/40 to-black/0 z-10 "></div>
                  <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-prpl/80 to-black/5 z-10 "></div>
                  <div className="scale-x-[-1] relative w-full h-full group overflow-hidden">
                    <img src={item.image} alt={item.title} className="object-cover absolute w-full h-full" />
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: 150 }}
                whileInView={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 60 }}
                className="sm:w-[58.9%] flex flex-col gap-y-5 lg:py-[80px] md:py-8 sm:py-6 py-4 overflow-hidden"
              >
                <div className="w-full h-auto clipped2 bg-gry relative  font-[400] flex items-center justify-center scale-x-[-1] rounded-md">
                  <div className="scale-x-[-1] text-white w-full h-full md:md:border-l-[0.5rem] border-prpl rounded-md py-9 pl-9 pr-7">
                    <h4 className="pb-6 font-secondary text-[18px] font-bold leading-normal text-prpl">
                      {parse(item.title)}
                    </h4>
                    {item.desc.map((desc, d) => {
                      return (
                        <p key={d} className="text-[16px] font-primary leading-normal">
                          {parse(desc)}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default GameFeature;
