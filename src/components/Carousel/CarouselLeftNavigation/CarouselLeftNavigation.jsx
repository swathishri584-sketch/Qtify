import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { ReactComponent as LeftArrow } from "../../../assets/LeftArrow.svg";
import styles from "./CarouselLeftNavigation.module.css";

function CarouselLeftNavigation() {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  useEffect(() => {
    const update = () => setIsBeginning(swiper.isBeginning);
    swiper.on("slideChange", update);
    swiper.on("reachBeginning", update);
    swiper.on("fromEdge", update);
    return () => {
      swiper.off("slideChange", update);
      swiper.off("reachBeginning", update);
      swiper.off("fromEdge", update);
    };
  }, [swiper]);

  return (
    <div
      className={`${styles.leftNavigation} ${isBeginning ? styles.hidden : ""}`}
      onClick={() => swiper.slidePrev()}
      aria-label="Previous"
    >
      <LeftArrow />
    </div>
  );
}

export default CarouselLeftNavigation;
