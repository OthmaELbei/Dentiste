// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./navs.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import TittleaAndtext from "./TittleaAndtext";

const imagNave = [
  {
    id: "1",
    img: "/tinified (4)/dentist-428645_1280.jpg",
    alt: "dentist-428645_1280",
  },
  {
    id: "2",
    img: `/tinified (4)/dentist-372792_1280.jpg`,
    alt: "dentist-372792_1280",
  },
  {
    id: "3",
    img: `/tinified (4)/dentistry-668191_1280.jpg`,
    alt: "dentistry-668191_1280",
  },
  {
    id: "4",
    img: `/tinified (4)/doctor-563429_1280.jpg`,
    alt: "doctor-563429_1280",
  },
  {
    id: "5",
    img: `/tinified (4)/orthodontist-287285_1280.jpg`,
    alt: "orthodontist-287285_1280",
  },
];

export default function PritionNav() {
  return (
    <>
      <div id="root" className="parnNav" style={{ position: "relative" }}>
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {imagNave.map((imgs) => (
            <SwiperSlide key={imgs.id}>
              <div id={imgs.id} className="prittionNav">
                <img src={imgs.img} alt={imgs.alt} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <TittleaAndtext />
      </div>
    </>
  );
}
