import React from 'react';

const Token: React.FC = () => {
  const our_products = [
    {
      title: 'play2earn',
      slug: 'play',
      desc: 'Earn $LUCID by participating in Lucidia games and achieving high scores',
      img: 'play.svg',
    },
    {
      title: 'nft integration',
      slug: 'nft',
      desc: 'NFT integration for seamless interoperability between games and the blockchain',
      img: 'nft.svg',
    },
    {
      title: 'web 3 entry',
      slug: 'web3',
      desc: 'Providing cost effective solutions for an affordable transition to a Web3 model',
      img: 'web3.svg',
    },
    {
      title: 'dev tools hub',
      slug: 'fit',
      desc: 'Lucidia is committed to champion growth and innovation within the gaming and blockchain spaces',
      img: 'fit.svg',
    },
  ];

  return (
    <section className="container w-full h-full mx-auto text-white py-[70px]">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-[45px]">
        {our_products.map((item, i) => {
          return (
            <div
              key={i}
              className="rounded-[10px] border-[2px] border-cyan max-w-[682px] max-h-[425px] relative bg-gradient-to-b from-black via-cyan/10 to-cyan/70"
            >
              <div className="pl-[52px] pt-[50px] pb-[166px]">
                <img src={`/token/${item.img}`} alt={item.slug} className="mb-5" />
                <h3 className="text-[36px] text-white uppercase font-primary font-bold">{item.title}</h3>
                <h5 className="text-[20px] text-[#B4B6BF] text-primary font-semibold max-w-[458px]">{item.desc}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Token;
