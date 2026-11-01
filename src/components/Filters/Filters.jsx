import React from "react";
import { Tab, Tabs } from "@mui/material";
import styles from "./Filters.module.css";

function Filters({ filters, selectedFilterIndex, setSelectedFilterIndex }) {
  const handleChange = (event, newValue) => {
    setSelectedFilterIndex(newValue);
  };

  return (
    <Tabs
      value={selectedFilterIndex}
      onChange={handleChange}
      className={styles.tabs}
      TabIndicatorProps={{ className: styles.indicator }}
      variant="scrollable"
      scrollButtons={false}
    >
      {filters.map((filter) => (
        <Tab key={filter.key} label={filter.label} className={styles.tab} disableRipple />
      ))}
    </Tabs>
  );
}

export default Filters;
