import { motion } from 'framer-motion';
import React from 'react';
import parse from 'html-react-parser';

const data = [
  {
    title: 'Experience Sandstorm Racers',
    desc: [
      'Feel the thrill of Sandstorm Racer, where high-octane racing meets the challenge of navigating through treacherous sandstorms. Drawing inspiration from titles like Forza Horizon, this game offers a perfect blend of realistic racing dynamics and accessible, fun gameplay.',
    ],
    image: '/assets/images/games/sandstorm/experience.jpg',
  },
  {
    title: 'Game Features:',
    desc: [
      'Realistic physics engine for authentic vehicle handling',
      'Dynamic weather effects, including signature sandstorms',
      'Competitive races and challenges',
      "Blockchain Integration: Compete in races, earn unique <span class='text-prpl'>NFT</span> rewards, and customize your vehicles with tradable assets that showcase your achievements. Feel the thrill of Sandstorm Racer, where high-octane racing meets the challenge of navigating through treacherous sandstorms. Drawing inspiration from titles like Forza Horizon, this game offers a perfect blend of realistic racing dynamics and accessible, fun gameplay.",
    ],
    image: '/assets/images/games/sandstorm/feature.jpg',
  },
];
const Details: React.FC = () => {
  return (
    <section className="w-full h-full relative">
      <div className="w-full h-full overflow-hidden px-5 pt-10">
        {data.map((item, i) => {
          return (
            <div
              key={i}
              className="container py-8 w-full mx-auto flex justify-between lg:flex-row flex-col sm:items-center items-start"
            >
              <motion.div
                initial={{ x: -150 }}
                whileInView={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 60 }}
                className="md:w-[55%] overflow-hidden"
              >
                <div className="lg:w-[37vw] lg:h-[23.3vw] min-w-[340px] min-h-[300px] max-h-[500px] rounded-md clipped2 bg-white relative font-bold flex items-center justify-center scale-x-[-1] ">
                  <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black/80 to-black/10 z-10 "></div>
                  <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-[#7700FF]/50 to-black/10 z-10 "></div>
                  <div className="scale-x-[-1] relative w-full h-full min-w-[340px] min-h-[300px] group overflow-hidden">
                    <img src={item.image} alt={item.title} className="object-cover absolute w-full h-full" />
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: 150 }}
                whileInView={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 60 }}
                className="sm:w-[40%] flex flex-col gap-y-5 lg:py-[44px] md:py-8 sm:py-6 py-4 overflow-hidden"
              >
                <div className="w-full h-auto clipped2 bg-gry relative  font-[500] flex items-center justify-center scale-x-[-1] rounded-md">
                  <div className="scale-x-[-1] text-white w-full h-full md:md:border-l-[0.5rem] border-prpl rounded-md py-9 pl-9 pr-7">
                    <h4 className="pb-6 font-secondary text-[18px] font-bold leading-normal text-prpl">{item.title}</h4>
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

export default Details;
