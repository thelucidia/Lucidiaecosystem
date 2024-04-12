import { motion } from 'framer-motion';
import React from 'react';

interface IDetail {
  item: string;
}
interface IDetails {
  explore: {
    title: string;
    desc: string;
  };
  updated: {
    title: string;
    desc: string;
  };
  action: {
    title: string;
    desc: string;
  };
  [key: string]: {
    title: string;
    desc: string;
  };
}
const details: IDetails = {
  explore: {
    title: 'Explore Our Ecosystem',
    desc: 'Dive into our diverse platforms designed for gamers, developers, and creators. From the Developer Marketplace to the NFT Integration Toolkit, each solution is crafted to enhance your gaming experience and development journey.',
  },
  updated: {
    title: 'Stay Updated ',
    desc: "Be the first to know about our latest breakthroughs, product launches, and updates. Lucidia is constantly evolving, and here's where you'll find all the exciting news",
  },
  action: {
    title: 'Success in Action ',
    desc: "Read about how game studios and independent developers are leveraging Lucidia's ecosystem to create groundbreaking games and forge new paths in the gaming industry.",
  },
  join: {
    title: 'Join the Community',
    desc: 'Engage with a vibrant community of gamers and developers. Participate in thrilling tournaments, get featured in our community highlights, and connect with like-minded individuals.',
  },
  started: {
    title: 'Get Started with Lucidia',
    desc: 'Ready to embark on a new gaming adventure? Sign up today to access our comprehensive suite of tools and join a community of innovators shaping the future of gaming in the Middle East.',
  },
};
const Detail: React.FC<IDetail> = ({ item }: IDetail) => {
  const detail = details[item];
  const isButton = item === 'started';

  return (
    <section className={`w-full h-full relative bg-transparent z-20 ${!(item === 'explore') ? 'my-[50px]' : ''}`}>
      <div className="container w-full mx-auto h-full overflow-hidden px-5">
        <div className="container mx-auto flex justify-between lg:flex-row flex-col sm:items-center items-start">
          <motion.div
            initial={{ x: -150 }}
            whileInView={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 60 }}
            className="md:w-[60%] overflow-hidden"
          >
            <h2 className="text-transparent min-w-[360px] text-[32px] md:text-[40px] font-primary font-bold bg-clip-text bg-gradient-to-r from-white via-[#91E6F8] to-white sm:max-w-[12rem] mx-auto lg:mx-0">
              {detail.title}
            </h2>
            {isButton && (
              <a href="/" target="_blank" rel="noopener noreferrer" className="">
                <button className=" w-full lg:w-[15rem] relative lg:block hidden h-11 clipped2 bg-white  font-bold flex items-center justify-center scale-x-[-1] group">
                  <div className="absolute bg-bg w-[98%] h-[96%] left-0 top-0 right-0 bottom-0 m-auto clipped2 group-hover:bg-white transition-bg ease-in-out duration-300 "></div>
                  <h1 className="font-secondary relative z-10 font-[700] text-[12px] scale-x-[-1] group-hover:text-black  transition-colors ease-in-out duration-300 text-[14px] uppercase leading-normal font-bold text-center text-white">
                    SIGN UP
                  </h1>
                </button>
              </a>
            )}
          </motion.div>
          <motion.div
            initial={{ x: 150 }}
            whileInView={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 60 }}
            className="sm:w-[58.9%] flex flex-col gap-y-5 overflow-hidden"
          >
            <div className="w-full h-auto clipped2 bg-gry relative  font-[500] flex items-center justify-center scale-x-[-1] rounded-md">
              <div className="scale-x-[-1] text-white w-full h-full md:md:border-l-[0.5rem] border-[#0ED4FF] rounded-md">
                <p className="py-12 pl-7 pr-1 text-[18px] font-primary leading-[28px]">{detail.desc}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
