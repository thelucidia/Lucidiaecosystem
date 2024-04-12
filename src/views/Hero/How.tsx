// import { MdOutlineOpenInNew } from 'react-icons/md';
// import { IoMdInformationCircleOutline } from 'react-icons/io';
// import { motion } from 'framer-motion';
import React from 'react';
import Overview from '../../../videos/home_overview.mp4';

const How: React.FC = () => {
  // const data = [
  //   {
  //     title: 'Option 1: Acquire Crypto via Card',
  //     value: [
  //       <p>
  //         Go to&nbsp;&nbsp;{' '}
  //         <a href="https://moonpay.com/buy" target="-blank" rel="noopener noreferrer" className="text-prpl">
  //           https://moonpay.com/buy
  //         </a>{' '}
  //       </p>,
  //       <p>
  //         Visit https://moonpay.com/buy and acquire cryptocurrency &#40;such as tokens&#41; using your card. The
  //         purchased crypto will be transfered to your wallet. It's advisable to procure a minimum of 20$ worth of tokens
  //         to accommodate the minimum purchase requirement.
  //       </p>,
  //       <p>Enter the amount you wish to invest</p>,
  //       <p>Choose your bonus option - it will be available one month after TGE</p>,
  //     ],
  //   },
  //   {
  //     title: 'Option 2: Purchase Tokens with Crypto',
  //     value: [
  //       <p>
  //         Ensure you have enough ETH or BNB in your wallet &#40;if not, refer to option 1&#41;. Enter the amount of
  //         $LUCID you want to purchase &#40;minimum $15&#41; and click Buy with ETH or Buy with BNB. Confirm the
  //         transaction in your wallet and review the gas cost
  //       </p>,
  //       <p>Enter the amount you wish to invest</p>,
  //       <p>Choose your bonus option - it will be available one month after TGE</p>,
  //     ],
  //   },
  //   {
  //     title: 'Option 3: Buy Tokens with USDT',
  //     value: [
  //       <p>Make sure you have at least $20 worth of USDT in your wallet.</p>,
  //       <p>Enter the amount you wish to invest</p>,
  //       <p>Choose your bonus option - it will be available one month after TGE</p>,
  //       <p>
  //         You will need to approve the purchase twice. The first approval is for the USDT contract, and the second is
  //         for the transaction amount. Complete both approval steps to finalize the transaction.
  //       </p>,
  //     ],
  //   },
  // ];

  return (
    <section className="container w-full mx-auto min-h-screen relative py-10 sm:pt-28 pt-16">
      {/* <img src="/tokentr.webp" alt="Coin" className="w-[5rem] absolute -top-7 right-0 sm:hidden block" /> */}
      <video
        autoPlay
        muted
        loop
        src={Overview}
        preload={'auto'}
        playsInline
        className="w-full h-screen object-cover absolute top-0 left-0"
      />
      {/* <div className="w-full h-full overflow-hidden px-5">
        <div className="container w-full mx-auto flex lg:gap-x-32 justify-center lg:flex-row flex-col lg:items-start items-center">
          <div className="md:w-[60%]  text-white relative z-10 text-center lg:text-left overflow-hidden">
            <motion.div
              initial={{ x: -150 }}
              whileInView={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 60 }}
              className=""
            >
              <div>
                <h1 className="font-medium text-transparent text-2xl sm:text-3xl md:text-4xl font-primary bg-clip-text bg-gradient-to-r from-white via-[#cab8ff] to-white sm:max-w-[12rem] mx-auto lg:mx-0">
                  How to buy $LUCID?
                </h1>
                <p className="font-primary font-medium mt-5">
                  Have more questions? Send them to our{' '}
                  <a href="https://t.me/Lucidia_io" className="text-prpl underline underline-offset-4">
                    Telegram Chat
                  </a>{' '}
                  and the Community Managers will answer them in a matter of minutes!
                </p>
              </div>
            </motion.div>

            <div className=" flex flex-col gap-y-4 mt-14 sm:mt-20 "></div>

            <img src="/coins.webp" alt="Coins" className="mt-16 w-[40rem] sm:block hidden" />
            <img
              src="/token.webp"
              alt="Coin"
              className="w-[15.5rem] absolute -bottom-[15rem] -right-20 sm:hidden block"
            />
          </div>

          <motion.div
            initial={{ x: 150 }}
            whileInView={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 60 }}
            className="sm:w-[58.9%] flex flex-col gap-y-5 sm:mt-0 mt-[10rem] overflow-hidden"
          >
            <div className="w-full h-auto clipped2 bg-gry relative scale-x-[-1] md:md:border-r-[0.5rem] border-[#70F] rounded-md">
              <div className="scale-x-[-1] text-white w-full h-full p-5 ">
                <h1 className="font-secondary font-bold text-[#70F] text-lg">STEP #01</h1>

                <h2 className="text-cyan font-primary font-medium text-lg w-fit mt-3">
                  <a
                    href="https://finance.lucidia.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-x-[5px]"
                  >
                    Launch{' '}
                    <span className="text-white">
                      <MdOutlineOpenInNew />
                    </span>{' '}
                    App
                  </a>
                </h2>

                <p className="mt-8">
                  Click the "<span className="text-[#70F] text-lg">Connect Wallet</span>" button in the top right corner
                  and log in using your preferred wallet. Make sure you have a browser extension wallet like{' '}
                  <span className="inline-flex items-center relative w-5">
                    <img
                      src="/metamask.webp"
                      alt="Metamask"
                      className="inline-image w-6 absolute left-0 -bottom-[3px]"
                    />
                  </span>{' '}
                  MetaMask installed on your desktop or use a supported mobile wallet like{' '}
                  <span className="inline-flex items-center relative w-5">
                    <img src="/shield.webp" alt="Metamask" className="inline-image w-6 absolute left-0 -bottom-[3px]" />
                  </span>{' '}
                  Trust Wallet
                </p>

                <div className="flex items-center gap-x-[6px] text-sm font-primary font-medium mt-6">
                  <IoMdInformationCircleOutline className="text-3xl" />
                  <p className="text-[16px]">
                    We recommend using MetaMask on desktop for a smoother experience, or Trust Wallet on mobile.
                  </p>
                </div>

                <h3 className="font-primary font-medium mt-8">
                  Click the "<span className="text-grn">Log in</span>" button.
                </h3>
              </div>
              <div className="scale-x-[-1] text-white w-full h-full p-5 pb-6">
                <h1 className="font-secondary font-bold text-[#70F] text-lg">STEP #02</h1>

                <div className="flex flex-col gap-y-6">
                  {data.map((items, i) => {
                    return (
                      <div key={i} className="font-primary">
                        <h2 className="text-white font-primary font-medium text-lg w-fit mt-3">{items.title}</h2>
                        <ul className="mt-8 font-medium">
                          {items.value.map((items, i) => {
                            return (
                              <li className="flex items-start gap-x-2" key={i}>
                                •{items}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div> */}
    </section>
  );
};

export default How;
