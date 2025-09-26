import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// 改為物件陣列，包含 title、description、color
const slides = [
  {
    img: "/web/web1.webp",
    title: "品牌形象",
    description: "捕捉人物情感與故事的瞬間。",
  },
  {
    img: "/web/web2.webp",
    title: "風景攝影",
    description: "展現大自然壯麗與細膩。",
  },
  {
    img: "/web/web3.webp",
    title: "風景攝影",
    description: "展現大自然壯麗與細膩。",
  },
];

const Web = () => {
  return (
    <div className="flex flex-col items-center justify-center  font-bold  bg-white/50 shadow-md  backdrop-blur rounded-lg z-50 border-blue-200 border-2 overflow-hidden">
      <div className="flex  gap-2 bg-gradient-to-r from-cyan-500 to-violet-200 px-4 py-2  w-full rounded-t-lg">
        <div className="rounded-full bg-white w-3 h-3"></div>
        <div className="rounded-full bg-white w-3 h-3"></div>
        <div className="rounded-full bg-white w-3 h-3"></div>
      </div>
      <Swiper
        direction={"vertical"}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        grabCursor={true}
        className=" aspect-video"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx} className={``}>
            <div className=" flex flex-col shadow-md  h-full items-center justify-center   overflow-hidden">
              <img src={slide.img} alt={slide.title} className="h-full " />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Web;
