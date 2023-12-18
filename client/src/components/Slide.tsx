import "./Slide.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slide = () => {
  return (
    <div className="div1">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="slide1">
          RELIABLE PLUMBERS
          <h4 className="p3h2">
            COUNT ON US TO FLUSH OUT YOUR PLUMBING PROBLEMS!
          </h4>
        </SwiperSlide>
        <SwiperSlide className="slide2">
          PROFESSIONAL ELECTRICIANS
          <h4 className="p3h2">
            WE'LL SHED LIGHT ON YOUR ELECTRICAL PROBLEMS!
          </h4>
        </SwiperSlide>
        <SwiperSlide className="slide3">
          ELECTRICIANS AND PLUMBERS
          <h4 className="p3h2">EMPOWERING YOUR SATISFACTION JOURNEY</h4>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slide;
