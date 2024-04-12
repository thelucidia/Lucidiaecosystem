import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const Post: React.FC = ({ initialSlide }: { initialSlide?: number }) => {
  const settings = {
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1415,
        settings: {
          variableWidth: false,
          centerMode: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          variableWidth: false,
          centerMode: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          variableWidth: false,
          centerMode: false,
        },
      },
    ],
  };
  const [page, setPage] = useState(initialSlide ?? 1);
  const sliderRef = useRef<Slider>(null);
  const worldList = [
    {
      title: 'sandstorm racers',
      desc: 'Pick your car and heat up the engine! Race through the canyons',
      image: 'racer',
      image_width: '260px',
      path: '/assets/images/',
      // color: '#70F',
    },
    {
      title: 'curse of the pharaoh',
      desc: 'is infecting the world! Defend yourself!',
      image: 'soldier',
      image_width: '130px',
      path: '/assets/images/',
      // color: '#C0FF0E',
    },
  ];
  return (
    <section className="post-slider w-full h-full relative bg-transparent z-20 my-[50px]">
      <div className="container w-full mx-auto h-full overflow-hidden px-5 xs:block hidden">
        <motion.div
          initial={{ x: 150 }}
          whileInView={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 60 }}
          className="container mx-auto gap-[80px] flex flex-col customXl:flex-row h-auto justify-between items-center overflow-hidden"
        >
          <div className="h-[350px] bg-gry relative font-[500] w-[708px]">
            <div
              className="w-full h-[350px] bg-cover absolute top-0 left-0"
              style={{ backgroundImage: `url(/worlds/cyber.webp)` }}
            ></div>

            <div className="w-full h-full bg-black/[97%] absolute top-0 left-0s"></div>
            <div className="absolute left-[40px] top-[50px] max-w-[200px] text-left">
              <span className="text-[32px] font-[400] uppercase italic text-third text-[#f0f0f0]">
                Sandstorm Racers
              </span>
              <br />
              <br />
              <span className="text-[10px] font-[400] font-third text-[#AAA]">
                Pick your car and heat up the engine! Race through the canyons
              </span>
            </div>

            <div className="absolute top-[97px] left-[257px]">
              <img src="/assets/images/racer.png" className="max-w-[490px] " />
            </div>
          </div>
          <div className="h-[350px] bg-gry relative font-[500] w-[708px]">
            <div
              className="w-full h-full bg-cover absolute top-0 left-0"
              style={{ backgroundImage: `url(/worlds/zombie.webp)` }}
            ></div>
            <div className="w-full h-[350px] bg-black/95 absolute top-0 left-0"></div>
            <div className="absolute left-[40px] top-[50px] max-w-[300px] text-left">
              <span className="text-[36px] font-[400] uppercase font-forth text-[#f0f0f0]">Curse of the pharaoh</span>
              <br />
              <br />
              <span className="text-[10px] font-[400] text-third text-[#AAA]">
                is infecting the world! Defend yourself!
              </span>
            </div>

            <div className="absolute left-[437px]">
              <img src="/assets/images/soldier.png" className="max-w-[210px] " />
            </div>
          </div>
        </motion.div>
      </div>
      <Slider
        {...settings}
        initialSlide={initialSlide ?? 1}
        afterChange={setPage}
        className="m-full pt-20 xs:hidden block"
        ref={sliderRef}
      >
        {worldList.map((items, i) => (
          <div
            className="relative group/main cursor-pointer "
            style={{ width: 467 }}
            key={i}
            onClick={() => {
              if (i > page) {
                if (page === 0 && i === 3) {
                  sliderRef?.current?.slickPrev();
                } else {
                  sliderRef?.current?.slickNext();
                }
              } else if (i < page) {
                if (page === 3 && i === 0) {
                  sliderRef?.current?.slickNext();
                } else {
                  sliderRef?.current?.slickPrev();
                }
              }
            }}
          >
            <Link to={items.path}>
              <div className="">
                <div className="h-[350px] bg-gry relative font-[500] w-[100%]">
                  <div
                    className="w-full h-[350px] bg-cover absolute top-0 left-0"
                    style={{ backgroundImage: `url(/worlds/cyber.webp)` }}
                  ></div>

                  <div className="w-full h-full bg-black/[97%] absolute top-0 left-0"></div>
                  <div className="absolute left-[40px] top-[50px] max-w-[300px] text-left ">
                    <span className="text-[32px] font-[400] uppercase italic font-third text-[#f0f0f0]">
                      {items.title}
                    </span>
                    <br />
                    <div className="max-w-[150px]">
                      <span className="text-[10px] font-[400] font-third text-[#AAA]">{items.desc}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0">
                    <img src={`/assets/images/${items.image}.png`} style={{ width: items.image_width }} />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Post;
