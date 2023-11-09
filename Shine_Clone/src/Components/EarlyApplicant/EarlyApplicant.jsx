import React from "react";
import styles from "./EarlyApplicant.module.css";
import { useRef, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function EarlyApplicant() {
  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(6);
  const prependNumber = useRef(1);

  const [slides, setSlides] = useState(
    Array.from({ length: 6 }).map((_, index) => `Slide ${index + 1}`)
  );

  

  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };

  const append = () => {
    setSlides([...slides, "Slide " + ++appendNumber.current]);
  };

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };
  return (
    <div className={styles.mainApplicant}>
      <h1 className={styles.applicantHeading}>Be An Early Applicant</h1>
      <div>
        <Swiper
          modules={[Virtual, Navigation, Pagination]}
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          virtual
        >
          {slides.map((slideContent, index) => (
            <SwiperSlide key={slideContent} virtualIndex={index}>
                 {<div>

              <div>img</div>
              
                 </div>}
            </SwiperSlide>
          ))}
        </Swiper>
        <p className="append-buttons">
       
      </p>
      </div>
    </div>
  );
}

export default EarlyApplicant;
