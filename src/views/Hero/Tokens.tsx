import TokenBox from '../../components/TokenBox';
import React from 'react';

interface IToken {
  id: string;
}

interface IData {
  landing: {
    title: string;
    slug: string;
    desc: string;
    img: string;
  }[];
  'our-products': {
    title: string;
    slug: string;
    desc: string;
    img: string;
  }[];
  [key: string]: {
    title: string;
    slug: string;
    desc: string;
    img: string;
  }[];
}

const data: IData = {
  landing: [
    {
      title: 'play2earn',
      slug: 'play',
      desc: 'Earn $LUCID by participating in Lucidia games and achieving high scores',
      img: 'play.webp',
    },
    {
      title: 'compete',
      slug: 'compete',
      desc: 'Compete with others in the e-tournaments and win big rewards in the of $LUCID tokens',
      img: 'learn.webp',
    },
    {
      title: 'train & practice',
      slug: 'train',
      desc: 'Play the games and sharpen your skills in order to be victorious in the e-tournaments',
      img: 'train.webp',
    },
    {
      title: 'unleash your creativitiy',
      slug: 'fit',
      desc: 'Make the most out of Lucidia by utilizing our Dev Tools to build and develop your projects',
      img: 'fit.webp',
    },
  ],
  'our-products': [
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
  ],
};

const Tokens: React.FC<IToken> = ({ id }: IToken) => {
  const item = data[id];
  return (
    <section className="w-full h-auto px-5 py-7 md:py-10 bg-bg relative pb-10 md:pb-28">
      <div className="container mx-auto w-full h-auto">
        {id === 'hero' && (
          <h1 className="font-medium md:text-center text-transparent text-[32px] sm:text-3xl md:text-4xl font-primary  ">
            <span className="bg-clip-text bg-gradient-to-r from-white via-[#cab8ff] to-white">Earn $LUCID?</span>
            <span className="bg-clip-text bg-gradient-to-r from-white to-lavender"> Tokens</span>
          </h1>
        )}

        <div className="md:mt-20 mt-5 flex flex-wrap items-center justify-center gap-5 overflow-hidden">
          {item.map((items, i) => {
            return <TokenBox key={i} title={items.title} slug={items.slug} desc={items.desc} img={items.img} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Tokens;
