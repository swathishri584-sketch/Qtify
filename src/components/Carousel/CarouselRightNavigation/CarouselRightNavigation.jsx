import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { ReactComponent as RightArrow } from "../../../assets/RightArrow.svg";
import styles from "./CarouselRightNavigation.module.css";

function CarouselRightNavigation() {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    const update = () => setIsEnd(swiper.isEnd);
    update();
    swiper.on("slideChange", update);
    swiper.on("reachEnd", update);
    swiper.on("fromEdge", update);
    swiper.on("resize", update);
    return () => {
      swiper.off("slideChange", update);
      swiper.off("reachEnd", update);
      swiper.off("fromEdge", update);
      swiper.off("resize", update);
    };
  }, [swiper]);

  return (
    <div
      className={`${styles.rightNavigation} ${isEnd ? styles.hidden : ""}`}
      onClick={() => swiper.slideNext()}
      aria-label="Next"
    >
      <RightArrow />
    </div>
  );
}

export default CarouselRightNavigation;
