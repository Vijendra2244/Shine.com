import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./Swiper.module.css"

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function SwiperImage() {
  return (
    <div className={styles.swiperMainStyleSwipe}>
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
        <SwiperSlide>
          <img className={styles.imageSwiperStyleSwipe} src="https://staticcand.shine.com/c/s1/images/candidate/banner/niims_web.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.imageSwiperStyleSwipe} src="https://www.shine.com/_next/image?url=https%3A%2F%2Fstaticcand.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2FDesktop_16Oct.webp&w=1920&q=75" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.imageSwiperStyleSwipe} src="https://www.shine.com/_next/image?url=https%3A%2F%2Fstaticcand.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2FICICI_D.webp&w=1920&q=75" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.imageSwiperStyleSwipe} src="https://www.shine.com/_next/image?url=https%3A%2F%2Fstaticcand.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2FInfosys.webp&w=1920&q=75" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
