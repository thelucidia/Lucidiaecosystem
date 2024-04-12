// import React, { useRef, useEffect } from 'react';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
const LazyModel = React.lazy(() => import('./Model'));

const Join: React.FC = () => {
  return (
    <section className="container mx-auto bg-bg-w-full h-auto py-10 sm:px-5 relative mt-10">
      <div className="w-full h-auto mx-auto relative">
        <div className="absolute h-[400px] z-10">
          <Canvas camera={{ position: [-0.5, 1, 2], zoom: 1.5 }} shadows>
            <ambientLight intensity={0.8} />
            <directionalLight position={[3.3, 1.0, 4.4]} castShadow intensity={Math.PI} />
            <Suspense fallback={null}>
              <LazyModel />
            </Suspense>
            <OrbitControls target={[0, 1, 0]} />
          </Canvas>
        </div>
        <div className="py-[20px] w-[17rem] h-auto clipped3 bg-[#B0EB10] z-10 items-center justify-center scale-x-[-1] text-white mt-2 sm:flex hidden"></div>

        <div className="h-[300px] w-full sm:clipped2 bg-[#B0EB10] flex items-center justify-center scale-x-[-1]">
          <div className="w-full h-full scale-x-[-1]">
            <div className="flex flex-wrap sm:gap-x-[8rem] gap-x-16 gap-y-[2.5rem] items-center justify-end px-5 py-9">
              <h2 className="relative text-primary sm:max-w-[430px] sm:text-[46px] text-[26px] sm:text-left max-w-[260px] font-[700] text-[#000000] ">
                Join community of <span className="text-[#fff]">40k+</span> Lucidians
                <img
                  src="/assets/images/join_icon.png"
                  alt="join"
                  className="absolute sm:bottom-[15px] sm:right-[30px] bottom-[7px] right-[30px]  sm:w-[36px] sm:y-[47px] w-[20px] y-[27px]"
                />
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
