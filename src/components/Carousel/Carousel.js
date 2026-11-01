import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";
import styles from "./Carousel.module.css";

function Controls({ data }) {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0, 0);
  }, [data, swiper]);

  return null;
}

function Carousel({ data, renderComponent }) {
  return (
    <div className={styles.wrapper}>
      <Swiper slidesPerView="auto" spaceBetween={40} allowTouchMove>
        <Controls data={data} />
        <CarouselLeftNavigation />
        <CarouselRightNavigation />

        {data.map((item, index) => (
          <SwiperSlide
            key={item.id || index}
            className={styles.slide}
          >
            {renderComponent(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
