import React, { useState } from "react";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Filters from "../Filters/Filters";
import styles from "./Section.module.css";

// type "album": Show all / Collapse toggle between carousel and grid
// type "song": genre tabs (from filters), carousel only, no toggle button
function Section({ title, data, type = "album", filters }) {
  // true = carousel ("Show all" button), false = full grid ("Collapse" button)
  const [carouselToggle, setCarouselToggle] = useState(true);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);

  const showButton = type === "album";
  const allFilters = filters ? [{ key: "all", label: "All" }, ...filters] : [];

  const selectedKey = allFilters[selectedFilterIndex]?.key || "all";
  const visibleData =
    filters && selectedKey !== "all"
      ? data.filter((item) => item.genre?.key === selectedKey)
      : data;

  const handleToggle = () => {
    setCarouselToggle((prev) => !prev);
  };

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h3>{title}</h3>
        {showButton && (
          <button className={styles.toggleText} onClick={handleToggle}>
            {carouselToggle ? "Show all" : "Collapse"}
          </button>
        )}
      </div>
      {filters && (
        <Filters
          filters={allFilters}
          selectedFilterIndex={selectedFilterIndex}
          setSelectedFilterIndex={setSelectedFilterIndex}
        />
      )}
      {data.length === 0 ? (
        <CircularProgress className={styles.loader} />
      ) : carouselToggle || !showButton ? (
        <Carousel
          data={visibleData}
          renderComponent={(item) => <Card data={item} type={type} />}
        />
      ) : (
        <div className={styles.grid}>
          {visibleData.map((item) => (
            <Card key={item.id} data={item} type={type} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Section;
