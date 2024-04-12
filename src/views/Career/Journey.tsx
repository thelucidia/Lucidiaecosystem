import { motion } from 'framer-motion';
import React from 'react';

const Journey: React.FC = () => {
  const data = [
    {
      title: 'Community Manager',
      position: 'Open Position: 1',
      desc: 'The Community Manager at Lucidia will engage and nurture the community on platforms like Discord and Telegram, developing strategies to foster a supportive and active user base. They will be responsible for content creation, maintaining positive interactions, and…',
    },
    {
      title: 'Blockchain Developer',
      position: 'Open Position: 1',
      desc: "Lucidia is in search of a Blockchain Developer with expertise in smart contracts and distributed ledger technology to fortify and advance the company's blockchain initiatives.  The role is central to maintaining the integrity and efficiency of Lucidia's blockchain…",
    },
    {
      title: 'UI/UX Developer',
      position: 'Open Position: 1',
      desc: 'A UI/UX Developer at Lucidia will innovate by crafting user-friendly designs, focused on enhancing user interaction and satisfaction with Lucidia’s digital products. They must keep up with design trends and translate user feedback into engaging user experiences.',
    },
    {
      title: 'Game Developer',
      position: 'Open Position: 1',
      desc: "Lucidia's Game Developer will utilize their deep knowledge of game design and programming to create captivating gaming experiences within Lucidia’s innovative ecosystem. Collaboration with various teams is essential to align game content with the…",
    },
    {
      title: 'Marketing Manager',
      position: 'Open Position: 1',
      desc: "The Marketing Manager at Lucidia will spearhead the development and execution of marketing campaigns to broaden the brand's reach and attract a diverse audience. This role requires a savvy blend of creativity and analysis to manage campaigns, conduct…",
    },
  ];

  return (
    <section className="w-full h-full relative">
      <div className="container mx-auto w-full h-full overflow-hidden px-5">
        <motion.div
          initial={{ y: -50 }}
          whileInView={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 120 }}
          className="overflow-hidden"
        >
          <h2 className="text-[62px] font-primary text-prpl leading-normal font-medium">Be part of our journey</h2>
          <h4 className="text-white font-primary text-[24px] font-semibold max-w-[1300px]">
            We're on the lookout for dynamic individuals with a passion for gaming and a flair for the crypto world to
            join our innovative team, no matter where you from.
          </h4>
        </motion.div>
        <div className="w-full mx-auto flex justify-between lg:flex-row flex-col sm:items-center items-start">
          <motion.div
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 60 }}
            className="overflow-hidden md:w-[60%] lg:block hidden"
          >
            <ul className="flex flex-col gap-y-11">
              {data.map((item, i) => {
                return (
                  <li key={`item-${i}`} className="text-white">
                    <h4 className="text-[30px] font-primary font-bold leading-[30px] text-transparent bg-clip-text bg-gradient-to-r from-white to-prpl max-w-[350px] pb-6">
                      {item.title}
                    </h4>
                    <h5 className="text-[20px] font-primary font-[600] leading-[20px] tracking-[1px]">
                      {item.position}
                    </h5>
                  </li>
                );
              })}
            </ul>
          </motion.div>
          <div className="sm:w-[58.9%] flex flex-col gap-y-5 md:py-16 sm:py-7 py-5 lg:block hidden">
            <motion.div
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 60 }}
              className="overflow-hidden"
            >
              <div className="w-full h-auto clipped2 bg-gry relative  font-[600] flex items-center justify-center scale-x-[-1] rounded-md">
                <div className="scale-x-[-1] text-white w-full h-full md:md:border-l-[0.5rem] border-prpl rounded-md py-14 pl-7 pr-8 flex flex-col gap-y-10">
                  {data.map((item, i) => {
                    return (
                      <p key={`desc-${i}`} className="text-[20px] font-primary leading-[20px] tracking-[1px]">
                        {item.desc}
                      </p>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ y: -100 }}
            whileInView={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 60 }}
            className="sm:w-[58.9%] flex flex-col gap-y-5 md:py-16 sm:py-7 py-5 lg:hidden md:block overflow-hidden"
          >
            <div className="w-full h-auto clipped2 bg-gry relative  font-[600] flex items-center justify-center scale-x-[-1] rounded-md">
              <div className="scale-x-[-1] text-white w-full h-full md:md:border-l-[0.5rem] border-prpl rounded-md py-14 pl-7 pr-8 flex flex-col gap-y-10">
                {data.map((item, i) => {
                  return (
                    <div key={`item-${i}`}>
                      <h4 className="text-[22px] font-primary font-bold leading-[30px] text-transparent bg-clip-text bg-gradient-to-r from-white to-prpl max-w-[350px]">
                        {item.title}
                      </h4>
                      <h5 className="text-[18px] font-primary font-[600] leading-[20px] tracking-[1px] pb-5">
                        {item.position}
                      </h5>
                      <p key={`desc-${i}`} className="text-[20px] font-primary leading-[20px] tracking-[1px]">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
