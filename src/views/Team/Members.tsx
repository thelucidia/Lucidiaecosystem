import { BsLinkedin } from 'react-icons/bs';
import React from 'react';
import data from './members.mock.json';

const Members: React.FC = () => {
  const members = data.members;
  return (
    <section className="w-full min-h-screen relative text-white overflow-hidden bg-bg">
      <img src="/team/bg.webp" alt="Teambg" className="w-full h-screen object-cover absolute left-0 " />

      <div className="container w-full h-auto mx-auto relative z-10 font-primary md:mt-[12rem] mt-[6rem] flex items-center justify-center px-6">
        <img src="/token.webp" alt="token" className="absolute top-16 -right-6 z-10 w-28 md:hidden block rotate-90" />

        <img src="/team/left.webp" alt="Left" className="-mb-20 xl:block hidden" />
        <div className="flex flex-col sm:gap-y-6 md:items-center justify-center w-fit md:mx-auto flex-shrink-0">
          <h2 className="text-grn md:text-center text-lg font-medium uppercase text-left">The Lucidians</h2>
          <h1 className="2xl:text-[72px] text-[54px] font-semibold leading-[3.5rem]">MEET OUR CRYPTO EXPERTS</h1>
          <p className="text-lg font-medium">
            At Lucidia we believe that the true, fully immersive metaverse is just around the corner.
          </p>
        </div>
        <img src="/team/right.webp" alt="Left" className="-mb-32 xl:block hidden" />
      </div>

      <img src="/hero/navline.webp" alt="NavLine" className="w-full relative z-10 mt-16 opacity-50 md:block hidden" />

      <div className="container w-full mx-auto h-auto relative z-10 flex flex-wrap gap-3 px-6 mt-24 items-center">
        <img src="/token.webp" alt="token" className="absolute -top-6 -right-4 z-10 w-16 md:hidden block" />

        {members.map((items, i) => {
          return (
            <div
              className="w-[19rem] h-[30.9rem] bg-gradient-to-b from-gry via-gry to-prpl clipped2 scale-x-[-1] relative group"
              key={i}
            >
              <div className=" w-[99.5%] bg-black h-[99.5%] absolute clipped2  m-auto top-0 bottom-0 left-0 right-0 shadow-teamShadow">
                <div className="w-full h-full scale-x-[-1] relative z-10">
                  <a href={items.link} target="_blank" rel="noreferrer noopener" className="">
                    <BsLinkedin className="top-5 left-5 absolute z-10 text-2xl text-prpl" />
                  </a>

                  <img
                    src={`/team/${i}.jpg`}
                    alt={items.name}
                    className="absolute w-full h-full top-0 left-0 object-cover"
                  />

                  <div className="w-full h-28 bg-[#4a069c] bottom-0 left-0 absolute blur-[4rem] z-0"></div>
                  <div className="absolute bottom-0 left-6 z-10">
                    <h1 className="font-primary text-[25px] font-semibold">{items.name}</h1>
                    <h2 className="font-secondary font-semibold mt-[5px] text-neon">{items.position}</h2>
                    <div className="max-h-0 group-hover:max-h-[10rem] transition-all">
                      <ul className="font-primary font-medium text-[15px] mt-5">
                        {items.desc.map((items, i) => {
                          return (
                            <li className="" key={i}>
                              {items}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full h-auto py-10 bg-grn mt-20 px-10">
        <h1 className="text-[54px] text-black text-center font-secondary font-bold leading-tight">
          Want to join our team?
        </h1>

        <a href="https://forms.gle/3zJDupBPggQSKA8L7" target="_blank" rel="noopener noreferrer" className="">
          <button className=" w-full md:w-[14.5rem] py-[0.7rem] clipped2 bg-black relative  font-bold flex items-center justify-center scale-x-[-1] mx-auto mt-3">
            <div className="absolute bg-grn w-[98.5%] h-[92%] left-0 top-0 right-0 bottom-0 m-auto clipped2"></div>
            <h1 className="font-secondary relative z-10 text-black font-[700] text-[14px] scale-x-[-1]">
              APPLY NOW &gt;
            </h1>
          </button>
        </a>
      </div>
    </section>
  );
};

export default Members;
