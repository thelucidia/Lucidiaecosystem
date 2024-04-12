import { motion } from 'framer-motion';
import React from 'react';
import parse from 'html-react-parser';

const data = [
  {
    title: 'Game Overview',
    desc: [
      "<span class='text-[#70F]'>Title:</span>&nbsp;Desert Warriors",
      "<span class='text-[#70F]'>Genre:</span>&nbsp;First-Person Shooter (FPS)",
      "<span class='text-[#70F]'>Target Audience:</span>&nbsp;Competitive and casual gamers, Web3 enthusiasts Dive into 'Desert Warriors' where your strategic prowess, teamwork, and adaptability are your greatest assets. Engage in high-stakes combat across ancient ruins, futuristic installations, and unpredictable sand dunes.",
      "<span class='pb-2'>Unique Selling Points</span>",
      "<span class='text-[#70F] mt-[24px]'>Gameplay Mechanics:</span>&nbsp;Cryptocraft is an amalgamation of creativity, survival, and exploration, set in a richly diverse and responsive world.",
      "<span class='text-[#70F]'>Building and Crafting:</span>&nbsp;From humble shelters to grandiose constructions. Cryptocraft's intuitive crafting system invites endless innovation",
      "<span class='text-[#70F]'>Exploration:</span>&nbsp;Traverse sprawling biomes, each brimming with unique resources and mysteries. Discover, adapt, and survive in a world that's as vast as your imagination",
    ],
    image: '/assets/images/games/crypto/overview.png',
  },
];
const GameOverview: React.FC = () => {
  return (
    <section className="w-full h-full">
      <div className="container w-full mx-auto h-full overflow-hidden px-5 py-10 relative">
        {data.map((item, i) => {
          return (
            <div key={i} className="w-full flex justify-between lg:flex-row flex-col sm:items-center items-start">
              <motion.div
                initial={{ x: -150 }}
                whileInView={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 60 }}
                className="md:w-[80%] overflow-hidden"
              >
                <h1 className="max-w-[370px] flex items-center font-primary leading-normal w-auto uppercase text-[62px] 2xl:text-[72px] 2xl:leading-[5.5rem] font-[500] text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#9786FF] to-[#0ED4FFBD]">
                  {parse(item.title)}
                </h1>
              </motion.div>
              <motion.div
                initial={{ x: 150 }}
                whileInView={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 60 }}
                className="sm:w-[58.9%] flex flex-col gap-y-5 lg:py-[80px] md:py-8 sm:py-6 py-4 overflow-hidden"
              >
                <div className="w-full h-auto clipped2 bg-gry relative  font-[400] flex items-center justify-center scale-x-[-1] rounded-md">
                  <div className="scale-x-[-1] text-white w-full h-full md:md:border-l-[0.5rem] border-[#70F] rounded-md py-9 pl-9 pr-7">
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
        <img
          src="/assets/images/games/crypto/coin_right.svg"
          className="absolute left-[20%] top-[95px] lg:block hidden"
        />
      </div>
    </section>
  );
};

export default GameOverview;
