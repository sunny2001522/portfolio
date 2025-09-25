import Image from "next/image";
// import Photo from "./photo";
// import Web from "./web";
// import Film from "./film";
// import Design from "./design";
import { decor1, decor2, decor3, decor7, decor44 } from "./asset";

const Hero = () => {
  return (
    <div className="relative w-full h-screen snap-center snap-always overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 items-center justify-center">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
        <p>歡迎來到</p>
        <h2 className="text-4xl font-bold text-center col-span-full">
          EXuan Art盲盒店
        </h2>
      </div>

      <div className="w-80 rotate-3 overflow-hidden z-20 absolute left-3/4 top-20">
        <h2 className="text-xl font-bold p-3 bg-gradient-to-l from-white/50 to-white/20 text-nowrap backdrop-blur-sm border-2 shadow-sm rounded-full rotate-3">
          影片製作人
        </h2>
      </div>
      <div className="w-96 overflow-hidden z-20 -rotate-3 absolute left-10 bottom-10">
        <h2 className="text-xl font-bold p-3 bg-gradient-to-l from-white/50 to-white/20 text-nowrap backdrop-blur-sm border-2 shadow-sm rounded-full rotate-3">
          前端工程師
        </h2>
      </div>
      <div className="overflow-hidden z-20 -rotate-6 absolute bottom-20 right-20">
        <h2 className="text-xl font-bold p-3 bg-gradient-to-l from-white/50 to-white/20 text-nowrap backdrop-blur-sm border-2 shadow-sm rounded-full rotate-3">
          攝影師
        </h2>
      </div>
      <div className="overflow-hidden z-20 -rotate-6 absolute top-20 left-20">
        <h2 className="text-xl font-bold p-3 bg-gradient-to-l from-white/50 to-white/20 text-nowrap backdrop-blur-sm border-2 shadow-sm rounded-full rotate-3">
          平面設計師
        </h2>
      </div>

      {/* 裝飾 */}
      <Image
        src={decor1}
        alt="decoration 1"
        className="absolute left-3/4 top-20 z-0 w-40"
      />
      <Image
        src={decor2}
        alt="decoration 2"
        className="absolute left-1/2 top-20 z-10 w-40"
      />
      <Image
        src={decor3}
        alt="decoration 3"
        className="absolute left-10 bottom-1/2 z-10 w-40 spin"
        data-animate="rotate"
      />
      <Image
        src={decor7}
        alt="decoration 7"
        className="absolute right-10 top-1/3 z-0 w-40"
      />
      <Image
        src={liquidP1}
        alt="liquid background"
        className="absolute top-0 z-0 h-dvh"
      />
      <Image
        src={decor44}
        alt="decoration 44"
        className="absolute -right-12 bottom-0 z-0 h-1/2"
      />
    </div>
  );
};

export default Hero;
