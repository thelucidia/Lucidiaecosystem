import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import React from 'react';

interface IOtherGames {
  id: number;
}

const OtherGames: React.FC<IOtherGames> = ({ id }: IOtherGames) => {
  const worldList = [
    {
      title: 'curse of the pharaoh',
      desc: 'Pulse-pounding action, earn $LUCID Tokens, crush undead hordes, ultimate survival.',
      image: 'zombie',
      path: '/gameplay/curse-of-the',
    },
    {
      title: 'cryptocraft',
      desc: 'Shape limitless worlds, earn $LUCID Tokens, unleash creativity, adventure awaits!',
      image: 'minecraft',
      path: '/gameplay/cryptocraft',
    },
    {
      title: 'sandstorm racers',
      desc: 'Take a ride through the night skyline, race with your friends and attend virtual events',
      image: 'cyber',
      path: '/gameplay/sandstorm',
    },
    {
      title: 'desert warriors',
      desc: 'Engage in the battle and complete missions to earn $LUCID Tokens.',
      image: 'fps',
      path: '/gameplay/desert',
    },
  ];
  return (
    <div className="container mx-auto">
      <h2 className="font-primary text-[62px] leading-normal text-white font-[700] pb-[65px]">Other Games</h2>
      <div className="flex flex-wrap gap-3 mt-12 items-center w-fit justify-between overflow-hidden pb-[134px]">
        {worldList.map((items, i) => {
          return (
            <motion.div
              key={i}
              initial={{ x: 150 }}
              whileInView={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 70 }}
              className={`${id == i ? 'hidden' : 'block'}`}
            >
              <Link to={items.path}>
                <div
                  key={i}
                  className="sm:w-[450px] w-[330px] sm:h-[570px] h-[418px] rounded-md clipped2 bg-white relative font-bold flex items-center justify-center scale-x-[-1] "
                >
                  <div className="scale-x-[-1] relative w-full h-full group overflow-hidden border border-2 border-[#0ED4FF] bg-transparent">
                    <div className="w-full h-screen absolute top-0 left-0 bg-black/40 z-10"></div>
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
  );
};

export default OtherGames;
