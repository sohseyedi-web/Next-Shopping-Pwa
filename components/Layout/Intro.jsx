import Image from "next/image";
import Slide1 from "../../public/images/slide-1.png";
import Slide2 from "../../public/images/slide-2.png";
import Slide3 from "../../public/images/slide-3.png";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

// const slideData = [Slide1, Slide2, Slide3];

const Intro = () => {
  return (
    <header className="h-[500px] bg-black">
      <Image src={Slide3} alt={"Nike"} className="mx-auto h-full w-full object-contain"/>
    </header>
  );
};

export default Intro;

// bg-[#b3e240]
