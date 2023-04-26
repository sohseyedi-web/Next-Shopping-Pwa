import Image from "next/image";
import Slide1 from "../../public/images/slide-1.png";
import Slide2 from "../../public/images/slide-2.png";
import Slide3 from "../../public/images/slide-3.png";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const slideData = [Slide1, Slide2, Slide3];

const Intro = () => {
  return (
    <header>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        pagination
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation
        className="mySwiper"
      >
        {slideData.map((item, i) => (
          <SwiperSlide key={i}>
            <Image src={item} alt={"nike"} className="mx-auto cursor-pointer" />
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  );
};

export default Intro;
