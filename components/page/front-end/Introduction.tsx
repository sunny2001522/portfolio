import Image from "next/image";

const Introduction = () => {
  return (
    <div className="relative w-full h-full snap-center snap-always  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 items-center justify-center">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
        <p>歡迎來到</p>
        <h2 className="text-4xl font-bold text-center col-span-full">
          EXuan Art盲盒店
        </h2>
      </div>

      <div className="w-80 rotate-3  z-20 absolute left-3/4 top-20">
        <h2 className="text-xl font-bold p-3 bg-gradient-to-l from-white/50 to-white/20 text-nowrap backdrop-blur-sm border-2 shadow-sm rounded-full rotate-3">
          PM
        </h2>
      </div>
      <div className="w-96  z-20 -rotate-3 absolute left-10 top-1/3">
        <h2 className="text-xl font-bold p-3 bg-gradient-to-l from-white/50 to-white/20 text-nowrap backdrop-blur-sm border-2 shadow-sm rounded-full rotate-3">
          前端工程師
        </h2>
      </div>
      <div className=" z-20 -rotate-6 absolute bottom-20 right-20">
        <h2 className="text-xl font-bold p-3 bg-gradient-to-l from-white/50 to-white/20 text-nowrap backdrop-blur-sm border-2 shadow-sm rounded-full rotate-3">
          UIUX
        </h2>
      </div>
      <div className=" z-20 -rotate-6 absolute top-20 left-20">
        <h2 className="text-xl font-bold p-3 bg-gradient-to-l from-white/50 to-white/20 text-nowrap backdrop-blur-sm border-2 shadow-sm rounded-full rotate-3">
          平面與動態設計師
        </h2>
      </div>

      {/* 裝飾 */}

      <Image
        src="/shape/shape10.webp"
        alt="decoration 2"
        className="absolute left-1/2 top-20 z-10 w-40 animate-spin"
        unoptimized
        width={32}
        height={32}
      />
      <Image
        src="/shape/shape11.webp"
        alt="decoration 2"
        className="absolute left-1/6 top-20 z-10 w-40 animate-spin"
        unoptimized
        width={32}
        height={32}
      />
      <Image
        src="/shape/shape16.webp"
        alt="decoration 2"
        className="absolute left-0 top-20 z-10 "
        unoptimized
        width={700}
        height={700}
      />
      <Image
        src="/shape/shape3.webp"
        alt="decoration 3"
        className="absolute left-10 bottom-1/2 z-10 w-40 spin"
        data-animate="rotate"
        unoptimized
        width={32}
        height={32}
      />
      <Image
        src="/shape/shape4.webp"
        alt="decoration 4"
        className="absolute right-10 top-1/3 z-0 w-40"
        unoptimized
        width={32}
        height={32}
      />
      <Image
        src="/shape/shape14.webp"
        alt="liquid background"
        className="absolute top-0 z-0 "
        unoptimized
        width={300}
        height={32}
      />
      <Image
        src="/shape/shape17.webp"
        alt="decoration 44"
        className="absolute right-0 top-0 z-0 h-dvh"
        unoptimized
        width={600}
        height={2000}
      />
      <Image
        src="/shape/shape12.webp"
        alt="decoration 1"
        className="absolute left-3/4 top-20 z-0 w-40"
        unoptimized
        width={32}
        height={32}
      />
      <Image
        src="/shape/shape18.webp"
        alt="decoration 2"
        className="absolute left-1/10 bottom-1/4 z-10 "
        unoptimized
        width={200}
        height={200}
      />
    </div>
  );
};

export default Introduction;
