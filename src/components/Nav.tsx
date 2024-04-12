import React from 'react';
import { MdClose } from 'react-icons/md';
import { useState, useEffect } from 'react';
import { LiaTelegramPlane } from 'react-icons/lia';
import { RxDiscordLogo } from 'react-icons/rx';
import { TfiTwitter } from 'react-icons/tfi';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';

const Nav: React.FC = () => {
  const navList = [
    // {
    //     name: 'pitchdeck',
    //     slug: 'pitchdeck',
    //     type: 'external',
    //     link: 'https://drive.google.com/file/d/1n1ddGOA5tTXVhK6zu7962QLSJBUev0aA/view'
    // },
    {
      name: 'home',
      slug: '/',
      paths: ['/'],
      type: 'internal',
    },
    {
      name: 'games',
      slug: '/games',
      paths: ['/games', '/games/sandstorm', '/games/curse-of-the', '/games/cryptocraft', '/games/desert'],
      type: 'internal',
    },
    {
      name: 'roadmap',
      slug: '/roadmap',
      paths: ['/roadmap'],
      type: 'internal',
    },
    {
      name: 'our product',
      slug: '/our-products',
      paths: ['/our-products'],
      type: 'internal',
    },
    {
      name: 'careers',
      slug: '/careers',
      paths: ['/careers'],
      type: 'internal',
    },
    {
      name: 'our team',
      slug: '/team',
      paths: ['/team'],
      type: 'internal',
    },
  ];
  const appNavList = [
    {
      name: 'home',
      slug: '/apps',
      paths: ['/apps'],
      type: 'internal',
    },
    {
      name: 'games',
      slug: '/apps/game',
      paths: [
        '/apps/game',
        '/apps/game/sandstorm',
        '/apps/game/curse-of-the',
        '/apps/game/cryptocraft',
        '/apps/game/desert',
      ],
      type: 'internal',
    },
    {
      name: 'tournaments',
      slug: '/apps/tournaments',
      paths: ['/apps/tournaments'],
      type: 'internal',
    },
    {
      name: 'marketplace',
      slug: '/apps/marketplace',
      paths: ['/apps/marketplace'],
      type: 'internal',
    },
    {
      name: 'dao',
      slug: '/apps/dao',
      paths: ['/apps/dao'],
      type: 'internal',
    },
    {
      name: 'support hub',
      slug: '/apps/support-hub',
      paths: ['/apps/support-hub'],
      type: 'internal',
    },
  ];

  const appNavMobile = [
    {
      name: 'home',
      slug: '/apps',
      paths: ['/apps'],
      type: 'internal',
    },
    {
      name: 'games',
      slug: '/apps/game',
      paths: [
        '/apps/game',
        '/apps/game/sandstorm',
        '/apps/game/curse-of-the',
        '/apps/game/cryptocraft',
        '/apps/game/desert',
      ],
      type: 'internal',
    },
    {
      name: 'tournaments',
      slug: '/apps/tournaments',
      paths: ['/apps/tournaments'],
      type: 'internal',
    },
    {
      name: 'marketplace',
      slug: '/apps/marketplace',
      paths: ['/apps/support hub'],
      type: 'internal',
    },
    {
      name: 'support hub',
      slug: '/apps/careers',
      paths: ['/apps/careers'],
      type: 'internal',
    },
  ];

  const navMobile = [
    // {
    //   name: 'pitchdeck',
    //   slug: 'pitchdeck',
    //   type: 'external',
    //   link: 'https://drive.google.com/file/d/1n1ddGOA5tTXVhK6zu7962QLSJBUev0aA/view',
    // },
    {
      name: 'home',
      slug: '/',
      paths: ['/'],
      type: 'internal',
    },
    {
      name: 'games',
      slug: '/games',
      paths: ['/games'],
      type: 'internal',
    },
    {
      name: 'roadmap',
      slug: '/roadmap',
      paths: ['/roadmap'],
      type: 'internal',
    },
    {
      name: 'our product',
      slug: '/our-products',
      paths: ['/our-products'],
      type: 'internal',
    },
    {
      name: 'careers',
      slug: '/careers',
      paths: ['/careers'],
      type: 'internal',
    },
    {
      name: 'our team',
      slug: '/team',
      paths: ['/team'],
      type: 'internal',
    },
    {
      name: 'launch app',
      slug: '/apps',
      paths: ['/apps'],
      type: 'internal',
    },
    // {
    //   name: 'whitepaper',
    //   slug: 'whitepaper',
    //   type: 'external',
    // },
    // {
    //   name: 'audit',
    //   slug: 'audit',
    //   sub: [
    //     {
    //       title: 'interfi',
    //       link: 'https://github.com/interfinetwork/project-delivery-data/blob/main/Lucidia/Lucidia_AuditReport_InterFi.pdf',
    //     },
    //     {
    //       title: 'revoluzion eth',
    //       link: 'https://revoluzion.app/audits/presaleeth',
    //     },
    //     {
    //       title: 'revoluzion bsc',
    //       link: 'https://revoluzion.app/audits/presalebsc',
    //     },
    //   ],
    // },
    // {
    // {
    //   name: 'faq',
    //   slug: 'faq',
    //   type: 'internal',
    // },
  ];

  const icons = [
    {
      link: '',
      icon: <LiaTelegramPlane />,
    },
    {
      link: '',
      icon: <RxDiscordLogo />,
    },
    {
      link: '',
      icon: <TfiTwitter />,
    },
  ];

  const { pathname } = useLocation();

  const [audit, setAudit] = useState(false);

  const handleAudit = () => {
    setAudit((curr) => !curr);
  };

  const [navActive, setNav] = useState(false);
  const [navDesktopActive, setNavDesktop] = useState(false);

  const handleNav = () => {
    setNav((curr) => !curr);
  };

  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener('resize', updateDimension);

    if (screenSize.width >= 768) {
      setNav(false);
      setNavDesktop(false);
    }

    return () => {
      window.removeEventListener('resize', updateDimension);
    };
  }, [screenSize]);

  return (
    <>
      <nav
        className={`w-full sm:w-[25rem] h-screen right-0 top-0 bottom-0 bg-black z-30 fixed transition-all  ease-in-out duration-500 ${navActive ? 'translate-x-0 xl:translate-x-full' : 'translate-x-full'}`}
      >
        <div className="w-full h-[5rem] bg-prpl flex items-center justify-between px-4">
          <img src="/hero/logo.png" alt="Logo" className="w-52 -ml-5" />
          <MdClose className="text-cyan text-5xl cursor-pointer" onClick={handleNav} />
        </div>

        <div className="overflow-auto max-h-[90%] w-full pb-20 top-0 right-0">
          <ul className="text-white font-secondary font-semibold uppercase px-7 w-full py-12 text-sm">
            {!pathname.includes('apps')
              ? navMobile.map((items, i) => {
                  return items.type === 'external' ? (
                    <a
                      href={items.slug}
                      onClick={handleNav}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full h-full"
                      key={i}
                    >
                      <motion.li
                        initial={{ x: 100, opacity: 0 }}
                        animate={navActive ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.7, delay: 0.5 * (i * 0.1), ease: [0.16, 0.77, 0.47, 0.97] }}
                        className={`border-t-[1px] border-white/10 py-5 ${items.name === 'faq' ? 'border-b-[1px]' : ''} `}
                      >
                        {items.name}
                      </motion.li>
                    </a>
                  ) : items.type === 'internal' ? (
                    <Link to={`${items.slug}`} className="w-full h-full" key={i} onClick={handleNav}>
                      <motion.li
                        initial={{ x: 100, opacity: 0 }}
                        animate={navActive ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.7, delay: 0.5 * (i * 0.1), ease: [0.16, 0.77, 0.47, 0.97] }}
                        className={`border-t-[1px] border-white/10 py-5 ${items.name === 'faq' ? 'border-b-[1px]' : ''} `}
                      >
                        {items.name}
                      </motion.li>
                    </Link>
                  ) : items.name === 'audit' ? (
                    <motion.li
                      initial={{ x: 100, opacity: 0 }}
                      animate={navActive ? { x: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.7, delay: 0.5 * (i * 0.1), ease: [0.16, 0.77, 0.47, 0.97] }}
                      className={`border-t-[1px] border-white/10 py-5 group`}
                      onClick={handleAudit}
                      key={i}
                    >
                      <div className="w-full flex justify-between items-center cursor-pointer group-hover:text-cyan">
                        <p className="">{items.name}</p>
                        <MdKeyboardArrowUp
                          className={`text-2xl transition-all ease-in-out duration-300  ${audit ? 'rotate-0' : 'rotate-180'}`}
                        />
                      </div>
                      {/* <div
                    className={`text-footergry  flex flex-col gap-y-2  overflow-hidden transition-all ease-in-out duration-300 ${audit ? 'max-h-[5rem] mt-4' : 'max-h-0 mt-0'} `}
                  >
                    {items.sub?.map((items, i) => {
                      return (
                        <a
                          href={items.link}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="hover:text-white"
                          key={i}
                        >
                          {items.title}
                        </a>
                      );
                    })}
                  </div> */}
                    </motion.li>
                  ) : null;
                })
              : appNavMobile.map((items, i) => {
                  return items.type === 'external' ? (
                    <a href={items.slug} target="_blank" rel="noopener noreferrer" className="w-full h-full" key={i}>
                      <motion.li
                        initial={{ x: 100, opacity: 0 }}
                        animate={navActive ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.7, delay: 0.5 * (i * 0.1), ease: [0.16, 0.77, 0.47, 0.97] }}
                        className={`border-t-[1px] border-white/10 py-5 ${items.name === 'faq' ? 'border-b-[1px]' : ''} `}
                      >
                        {items.name}
                      </motion.li>
                    </a>
                  ) : items.type === 'internal' ? (
                    <Link to={`${items.slug}`} className="w-full h-full" key={i} onClick={handleNav}>
                      <motion.li
                        initial={{ x: 100, opacity: 0 }}
                        animate={navActive ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.7, delay: 0.5 * (i * 0.1), ease: [0.16, 0.77, 0.47, 0.97] }}
                        className={`border-t-[1px] border-white/10 py-5 ${items.name === 'faq' ? 'border-b-[1px]' : ''} `}
                      >
                        {items.name}
                      </motion.li>
                    </Link>
                  ) : items.name === 'audit' ? (
                    <motion.li
                      initial={{ x: 100, opacity: 0 }}
                      animate={navActive ? { x: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.7, delay: 0.5 * (i * 0.1), ease: [0.16, 0.77, 0.47, 0.97] }}
                      className={`border-t-[1px] border-white/10 py-5 group`}
                      onClick={handleAudit}
                      key={i}
                    >
                      <div className="w-full flex justify-between items-center cursor-pointer group-hover:text-cyan">
                        <p className="">{items.name}</p>
                        <MdKeyboardArrowUp
                          className={`text-2xl transition-all ease-in-out duration-300  ${audit ? 'rotate-0' : 'rotate-180'}`}
                        />
                      </div>
                      {/* <div
                    className={`text-footergry  flex flex-col gap-y-2  overflow-hidden transition-all ease-in-out duration-300 ${audit ? 'max-h-[5rem] mt-4' : 'max-h-0 mt-0'} `}
                  >
                    {items.sub?.map((items, i) => {
                      return (
                        <a
                          href={items.link}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="hover:text-white"
                          key={i}
                        >
                          {items.title}
                        </a>
                      );
                    })}
                  </div> */}
                    </motion.li>
                  ) : null;
                })}
          </ul>

          <div className="font-primary text-center -mt-2 px-6">
            <h2 className="text-neon font-semibold">Join the community</h2>
            <p className="font-medium text-white mt-6">
              For more details about our progress and workflow be sure to follow
            </p>

            <div className="text-white flex mx-auto w-fit mt-5 gap-x-6 text-2xl">
              {icons.map((items, i) => {
                return (
                  <Link to={items.link} target="_blank" rel="noopener noreferer" className="" key={i}>
                    {items.icon}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      <nav className="w-full h-auto px-5 xl:py-4 py-0  absolute top-0 left-0 z-20">
        <img
          src="/hero/navline.webp"
          alt="NavLine"
          className="w-full absolute left-0 2xl:block top-7 right-0 hidden pointer-events-none"
        />

        <div className="container w-full mx-auto flex justify-between items-center mt-5">
          <Link to="/" className="">
            <img src="/hero/newlogo.png" alt="Logo" className="w-52" />
          </Link>

          <ul className="font-secondary font-semibold text-sm uppercase items-center gap-x-12 text-white xl:flex hidden">
            {!pathname.includes('apps')
              ? navList.map((items, i) => {
                  return items.type === 'external' ? (
                    <Link to={items.slug} target="_blank" rel="noopener noreferrer" className="" key={i}>
                      <li className="cursor-pointer" key={i}>
                        {items.name}
                      </li>
                    </Link>
                  ) : (
                    <Link to={items.slug} className="" key={i}>
                      <li
                        className={clsx(
                          'cursor-pointer hover:text-[#0ED4FF]',
                          items.paths?.includes(pathname) && 'text-[#0ED4FF]',
                        )}
                        key={i}
                      >
                        {items.name}
                      </li>
                    </Link>
                  );
                })
              : appNavList.map((items, i) => {
                  return items.type === 'external' ? (
                    <Link to={items.slug} target="_blank" rel="noopener noreferrer" className="" key={i}>
                      <li className="cursor-pointer" key={i}>
                        {items.name}
                      </li>
                    </Link>
                  ) : (
                    <Link to={items.slug} className="" key={i}>
                      <li
                        className={clsx(
                          'cursor-pointer hover:text-[#0ED4FF]',
                          items.paths?.includes(pathname) && 'text-[#0ED4FF]',
                        )}
                        key={i}
                      >
                        {items.name}
                      </li>
                    </Link>
                  );
                })}
          </ul>

          <div className="flex items-center gap-x-8 relative">
            <button className="flex-col items-end gap-y-3 xl:hidden flex" onClick={handleNav}>
              <div className="w-8 h-[3px] bg-white"></div>
              <div className="w-6 h-[3px] bg-white"></div>
            </button>

            {/* <button
              className={` flex-col items-end gap-y-3 xl:flex hidden transition-all ease-in-out duration-300 ${navDesktopActive ? 'rotate-[360deg]' : 'rotate-0'}`}
              onClick={handleNavDesktop}
            >
              <div
                className={` transition-all ease-in-out duration-300 ${navDesktopActive ? 'bg-cyan rotate-[-45deg] w-8 translate-y-[9px] h-[3px]' : 'w-8 h-[3px] bg-white'}`}
              ></div>
              <div
                className={` transition-all ease-in-out duration-300  ${navDesktopActive ? 'bg-cyan rotate-[45deg] w-8 h-[3px] -translate-y-[6px]' : 'w-6 h-[3px] bg-white'}`}
              ></div>
            </button> */}

            <div
              className={`w-[16rem] h-[23rem] clipped bg-bl absolute z-10 top-[3.2rem] transition-height ease-in-out duration-300  -left-[14rem] ${navDesktopActive ? 'md:max-h-[23rem] max-h-[0rem]' : 'max-h-0'}`}
            >
              <div className="absolute bg-black w-[98%] h-[99%] left-0 top-0 right-0 bottom-0 m-auto clipped">
                <div className="overflow-x-hidden max-h-[100%] w-full top-0 right-0">
                  <ul className="font-secondary font-semibold uppercase p-4 px-7 w-full text-sm text-white">
                    {navMobile.slice(3, 9).map((items, i) => {
                      return items.type === 'external' ? (
                        <Link
                          to={items.slug}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full h-full"
                          key={i}
                        >
                          <motion.li
                            initial={{ x: 100, opacity: 0 }}
                            animate={navDesktopActive ? { x: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.7, delay: 0.5 * (i * 0.1), ease: [0.16, 0.77, 0.47, 0.97] }}
                            className={`border-b-[1px] border-white/10 py-5 `}
                          >
                            {items.name}
                          </motion.li>
                        </Link>
                      ) : items.type === 'internal' ? (
                        <Link to={`${items.slug}`} className="w-full h-full" key={i} onClick={handleNav}>
                          <motion.li
                            initial={{ x: 100, opacity: 0 }}
                            animate={navDesktopActive ? { x: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.7, delay: 0.5 * (i * 0.1), ease: [0.16, 0.77, 0.47, 0.97] }}
                            className={`border-b-[1px] border-white/10 py-5`}
                          >
                            {items.name}
                          </motion.li>
                        </Link>
                      ) : items.name === 'audit' ? (
                        <motion.li
                          initial={{ x: 100, opacity: 0 }}
                          animate={navDesktopActive ? { x: 0, opacity: 1 } : {}}
                          transition={{ duration: 0.7, delay: 0.5 * (i * 0.1), ease: [0.16, 0.77, 0.47, 0.97] }}
                          className={`border-b-[1px] border-white/10 py-5 group`}
                          onClick={handleAudit}
                          key={i}
                        >
                          <div className="w-full flex justify-between items-center cursor-pointer group-hover:text-cyan">
                            <p className="">{items.name}</p>
                            <MdKeyboardArrowUp
                              className={`text-2xl transition-all ease-in-out duration-300  ${audit ? 'rotate-0' : 'rotate-180'}`}
                            />
                          </div>
                        </motion.li>
                      ) : null;
                    })}
                  </ul>
                </div>
              </div>
            </div>

            {/* <a
              href="https://drive.google.com/file/d/1pT08KRpvPwnQcxwyGktETCeH8HtZi08v/view"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <button className=" w-full lg:w-[15rem] relative lg:block hidden h-12 clipped2 bg-white  font-bold flex items-center justify-center scale-x-[-1] group">
                <div className="absolute bg-[#2e194c] w-[98%] h-[96%] left-0 top-0 right-0 bottom-0 m-auto clipped2 group-hover:bg-white transition-bg ease-in-out duration-300 ">
                  <img
                    src="/hero/trans.webp"
                    alt="Herobg"
                    className="w-full h-full object-cover absolute top-0 left-0 group-hover:opacity-0 transition-opacity ease-in-out duration-300"
                  />
                </div>
                <h1 className="font-secondary relative z-10 font-[700] text-[12px] scale-x-[-1] group-hover:text-black  transition-colors ease-in-out duration-300 text-[14px] uppercase leading-normal font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-[#9586FF] to-[#0ED4FF]">
                  Launch App
                </h1>
              </button>
            </a> */}
            <Link to={!pathname.includes('apps') ? '/apps' : '/apps/login'}>
              <div className="w-full lg:w-[15rem] relative lg:block hidden">
                <div className="hover:text-white py-[13px] w-[237px] absolute font-secondary text-[14px] uppercase leading-normal font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-[#9586FF] to-[#0ED4FF] transition-colors ease-in-out duration-300">
                  {`${!pathname.includes('apps') ? 'Launch App' : 'Login'}`}
                </div>
                <img src="/assets/images/launch_app.svg" alt="LaunchApp" />
              </div>
            </Link>
          </div>
        </div>

        <div className="w-full h-[1px] bg-white/40 absolute left-0 right-0 -bottom-4 lg:block hidden 2xl:hidden"></div>
      </nav>
    </>
  );
};

export default Nav;
