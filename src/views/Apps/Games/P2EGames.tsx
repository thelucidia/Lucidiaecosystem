import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

const P2EGames: React.FC = () => {
  const worldList = [
    {
      title: 'curse of the pharaoh',
      desc: 'Pulse-pounding action, earn $LUCID Tokens, crush undead hordes, ultimate survival.',
      image: 'zombie',
      path: '/apps/curse-of-the',
    },
    {
      title: 'cryptocraft',
      desc: 'Shape limitless worlds, earn $LUCID Tokens, unleash creativity, adventure awaits!',
      image: 'minecraft',
      path: '/apps/cryptocraft',
    },
    {
      title: 'sandstorm racers',
      desc: 'Take a ride through the night skyline, race with your friends and attend virtual events',
      image: 'cyber',
      path: '/apps/sandstorm',
    },
    {
      title: 'desert warriors',
      desc: 'Engage in the battle and complete missions to earn $LUCID Tokens.',
      image: 'fps',
      path: '/apps/desert',
    },
  ];

  return (
    <section className="w-full h-auto sm:bg-bg bg-transparent relative">
      <div className="px-5 py-5">
        <div className="container w-full mx-auto h-auto sm:mt-11">
          <div className="w-fit container mx-auto">
            <h1 className="font-medium text-transparent text-2xl sm:text-3xl md:text-4xl font-primary bg-clip-text bg-gradient-to-r from-[#e4d3fe] via-white to-lavender w-fit 2xl:text-left text-center mx-0 sm:mx-auto 2xl:mx-0">
              Top Earning Play To Earn Games
            </h1>

            <div className="flex flex-wrap gap-3 mt-12 items-center justify-between w-fit overflow-hidden">
              {worldList.map((items, i) => {
                return (
                  <motion.div
                    key={i}
                    initial={{ x: 150 }}
                    whileInView={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 70 }}
                    className=""
                  >
                    <Link to={items.path}>
                      <div
                        key={i}
                        className="w-[21rem] h-[26rem] rounded-md clipped2 bg-white relative font-bold flex items-center justify-center scale-x-[-1] "
                      >
                        <div className="scale-x-[-1] relative w-full h-full group overflow-hidden">
                          <img
                            src={`/worlds/${items.image}.webp`}
                            alt={items.title}
                            className="object-cover absolute w-full h-full"
                          />

                          <div className=" shadow-world w-full h-full relative z-10"></div>

                          <div
                            className={`transition-shadow ease-in-out duration-500 group-hover:shadow-worldHover  w-full h-full top-0 left-0 absolute z-10`}
                          ></div>

                          <div className="absolute bottom-4 left-4 z-10 p-3 group-hover:text-black text-white ease-in-out duration-[0.1s]">
                            <h1 className="uppercase font-primary text-2xl tracking-wide group-hover:mb-2 transition-all">
                              {items.title}
                            </h1>
                            <div className="overflow-hidden max-h-0 group-hover:max-h-[3rem] transition-all">
                              <p className="font-medium font-primary">{items.desc}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default P2EGames;
