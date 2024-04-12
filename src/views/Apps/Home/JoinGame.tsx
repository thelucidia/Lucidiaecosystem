import { motion } from 'framer-motion';
import React from 'react';

const JoinGame: React.FC = () => {
  const join_games = [
    {
      title: 'Curse Of The Pharaoh',
      img: 'zombie',
      count: 20,
    },
    {
      title: 'Sandstorm Racers',
      img: 'cyber',
      count: 16,
    },
    {
      title: 'Desert Warriors',
      img: 'cyber',
      count: 19,
    },
  ];

  return (
    <section className={`w-full h-full relative bg-transparent z-20 my-[50px]`}>
      <div className="container w-full mx-auto h-full overflow-hidden px-5">
        <div className="w-full mx-auto">
          <motion.div
            initial={{ x: 150 }}
            whileInView={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 60 }}
            className="w-full flex flex-wrap gap-5 justify-between overflow-hidden"
          >
            {join_games.map((item, i) => {
              return (
                <div key={i} className="w-[365px] h-[144px] bg-gry relative flex flew-row gap-x-5 rounded-md py-4 px-4">
                  <div
                    className="w-[112px] h-[112px] bg-cover overflow-hidden"
                    style={{ backgroundImage: `url(/worlds/${item.img}.webp)` }}
                  ></div>
                  {/* <img src={`worlds/${item.img}.webp`} width={112} height={112} className="object-cover" /> */}
                  <div className="flex flex-col justify-between text-white  h-auto">
                    <p className="text-[24px] font-primary font-bold">{item.title}</p>
                    <p className="text-right text-[16px] font-primary">Join us</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JoinGame;
