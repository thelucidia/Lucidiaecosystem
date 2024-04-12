import { motion } from 'framer-motion';
import React from 'react';

const UpdatedInfo: React.FC = () => {
  const updates = [
    {
      title: 'new updates',
      desc: [
        'Weather System update now live, enhancing gameplay realism.',
        'Performance System update now live, enhancing gameplay realism.',
        'New Axe variant introduced for advanced crafting.',
      ],
      type: 'Cryptocraft',
      image: 'fps',
    },
    {
      title: 'new updates',
      desc: [
        'Deployable Armored Personnel Carrier (APC) added to the game.',
        'Resolved Issue with rockets from helicopters detonating prematurely.',
        'Increased Ammunition capacity for all players for extended engagements.',
      ],
      type: 'Curse Of The Pharaoh',
      image: 'zombie',
    },
    {
      title: 'new updates',
      desc: [
        'G36 recoil has been fine-tuned for improved accuracy.',
        'Introduced auto-regeneration feature for enhanced survivability.',
        'Spawn point glitches have been rectified for fair play',
      ],
      type: 'Desert Warriors',
      image: 'cyber',
    },
    {
      title: 'new updates',
      desc: [
        'New racing map now available for download.',
        'Exclusive car pack set released, featuring the 911 Turbo.',
        'SSpeedometer accuracy fixed, ensuring reliable performance metrics.',
      ],
      type: 'Desert Warriors',
      image: 'minecraft',
    },
  ];

  return (
    <section className="w-full h-auto bg-bg relative">
      <div className="px-5 py-5">
        <div className="container w-full mx-auto h-auto sm:pt-11">
          <div className="w-fit container mx-auto">
            <div className="flex flex-wrap gap-3 mt-12 items-center justify-between w-fit overflow-hidden">
              {updates.map((item, i) => {
                return (
                  <motion.div
                    key={i}
                    initial={{ x: 150 }}
                    whileInView={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 70 }}
                    className="w-[336px] h-[422px] "
                  >
                    <div className="relative w-full h-full scale-x-[-1] clipped2 group overflow-hidden">
                      <img
                        src={`/worlds/${item.image}.webp`}
                        alt={item.title}
                        className="object-cover absolute w-full h-full z-0"
                      />
                      <div className="bg-gradient-to-t from-cyan via-black/70 to-[#0ED4FF33]/10 w-full h-full relative z-10"></div>
                      <div className="scale-x-[-1] absolute z-10 top-0 right-0 pl-[10px] pt-[40px] pb-[25px] min-h-[422px]">
                        <h3 className="uppercase font-primary font-semibold text-[26px] text-white max-w-[230px] pb-4">
                          {item.title}
                        </h3>
                        <ul
                          className="max-w-[238px]"
                          style={{
                            listStyle: 'inside',
                          }}
                        >
                          {item.desc.map((d, i) => {
                            return (
                              <li key={i} className="font-medium text-white text-[18px] pb-[10px] font-primary">
                                {d}
                              </li>
                            );
                          })}
                        </ul>
                        <div className="flex flex-row gap-x-2 w-full h-[25px] absolute bottom-5">
                          <div
                            className="rounded-[50px] w-[22px] h-[22px] bg-contain"
                            style={{ backgroundImage: `url(/worlds/${item.image}.webp)` }}
                          ></div>
                          <p className="font-primary font-medium text-[14px] text-[#f0f0f0]">{item.type}</p>
                        </div>
                      </div>
                    </div>
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

export default UpdatedInfo;
