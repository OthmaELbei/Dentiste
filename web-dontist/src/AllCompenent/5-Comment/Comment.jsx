// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "./comment.css";
import "../../../public/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
export default function Comment() {
  return (
    <>
      <div className="comment">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper SwiperComent"
        >
          <SwiperSlide>
            <div className="boxComent">
              <h2>E</h2>
              <p>
                Très compétente, serviable et surtout humaine... Je recommande
                !!
              </p>

              <div className="icon">
                <div className="icon-star2"></div>
                <div className="icon-star2"></div>
                <div className="icon-star2"></div>
                <div className="icon-star2"></div>
                <div className="icon-star2"></div>
              </div>
              <h5>ELHAm yawan</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="boxComent">
              <h2 style={{ backgroundColor: "#4CD080" }}>E</h2>
              <p>
                Très compétente, serviable et surtout humaine... Je recommande
                !!
              </p>

              <div className="icon">
                <div className="icon-star2"></div>
                <div className="icon-star2"></div>
                <div className="icon-star2"></div>
                <div className="icon-star2"></div>
                <div className="icon-star2"></div>
              </div>
              <h5>ELHAm yawan</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="boxComent">
              <h2 style={{ backgroundColor: "#2AA7FF" }}>E</h2>
              <p>
                Très compétente, serviable et surtout humaine... Je recommande
                !!
              </p>

              <div className="icon">
                <div className="icon-star2"></div>
                <div className="icon-star2"></div>
                <div className="icon-star2"></div>
                <div className="icon-star2"></div>
                <div className="icon-star2"></div>
              </div>
              <h5>ELHAm yawan</h5>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
