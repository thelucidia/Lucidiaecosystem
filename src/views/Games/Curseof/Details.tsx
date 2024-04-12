import { motion } from 'framer-motion';
import React from 'react';
import parse from 'html-react-parser';

const data = [
  {
    title: 'Unleash The Myths',
    desc: [
      "<span class='text-yelw pb-1'>Game Overview</span>",
      "<span class='text-cyan'>Title:</span> Curse Of The Pharaoh",
      "<span class='text-cyan'>Genre:</span> Hybrid FPS with Co-op, PvP, and PvE Elements",
      "<span class='text-cyan'>Setting:</span> A post-apocalyptic Dubai, where ancient Middle Eastern myths have taken root in the modern world.",
      'Embark on a quest through a cityscape that marries the iconic skyline of Dubai with the haunting beauty of mythological chaos, where every corner turned is a step deeper into a narrative that spans ages.',
    ],
    image: '/assets/images/games/curseof/post_1.jpg',
  },
  {
    title: 'Unique Selling Points',
    desc: [
      "<span class='text-cyan'>Dubai Reimagined:</span> Traverse the sands of time in a Dubai overtaken by mythological forces, where every landmark tells a story of ancient power and modern resilience.",
      "<span class='text-cyan'>Mythological Warfare:</span> Engage in combat against legendary beasts and deities from Middle Eastern lore, utilizing a mix of futuristic firepower and ancient magic.",
      "<span class='text-cyan'>Narrative Depth:</span> Delve into a story that weaves the rich cultural tapestry of the Middle East with thrilling mythological tales, setting the stage for an epic saga of heroism and betrayal.",
      "<span class='text-cyan'>Web3 Integration:</span> Step into the future of gaming with Web3 technologies, where your achievements and treasures become NFTs, adding a layer of strategy and value to every action.",
    ],
    image: '/assets/images/games/curseof/post_2.jpg',
  },
  {
    title: 'Gameplay Mechanics',
    desc: [
      "Curse Of The Pharaoh' offers a rich blend of FPS action, strategy,and cooperative gameplay, set against the backdrop of an open-world Dubai afflicted by ancient curses.",
      "<span class='text-prpl'>Advanced Movement:</span> Master the art of urban navigation with parkour mechanics, allowing for fluid movement across Dubai's transformed skyline.",
      "<span class='text-prpl'>Strategic Combat:</span> Balance your arsenal of high-tech weapons with enchanted artifacts, each offering unique advantages against the mythological menaces you'll face.",
      "<span class='text-prpl'>Cooperative Missions:</span> Band together with allies to undertake quests that dive deep into the heart of the plagues, with dynamic scenarios that adapt based on your team's decisions and achievements.",
    ],
    image: '/assets/images/games/curseof/post_3.jpg',
  },
];
const Details: React.FC = () => {
  return (
    <section className="w-full h-full relative">
      <div className="w-full h-full overflow-hidden px-5 py-10">
        {data.map((item, i) => {
          return (
            <div
              key={i}
              className="container mx-auto flex justify-between pb-10 lg:flex-row flex-col sm:items-center items-start"
            >
              <motion.div
                initial={{ x: -150 }}
                whileInView={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 60 }}
                className="md:w-[55%] overflow-hidden"
              >
                <div className="lg:w-[37vw] lg:h-[23.3vw] min-w-[340px] min-h-[300px] max-h-[500px] rounded-md clipped2 bg-white relative font-bold flex items-center justify-center scale-x-[-1] ">
                  <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black/70 to-black/10 z-10 "></div>
                  <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-[#0ED4FF]/60 to-black/10 z-10 "></div>
                  <div className="scale-x-[-1] relative w-full h-full min-w-[340px] min-h-[300px] group overflow-hidden">
                    <img src={item.image} alt={item.title} className="object-cover absolute w-full h-full" />
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: 150 }}
                whileInView={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 60 }}
                className="md:w-[40%] flex flex-col gap-y-5 lg:py-[44px] md:py-8 sm:py-6 py-4 overflow-hidden"
              >
                <div className="w-full h-auto clipped2 bg-gry relative  font-[400] flex items-center justify-center scale-x-[-1] rounded-md">
                  <div className="scale-x-[-1] text-white w-full h-full md:md:border-l-[0.5rem] border-cyan rounded-md py-9 pl-9 pr-7">
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

export default Details;
