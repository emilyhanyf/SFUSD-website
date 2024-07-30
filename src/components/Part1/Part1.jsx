import React, { useState } from "react";
import { getImageUrl } from "../../utils";
import styles from "./Part1.module.css";

const screens = [
  { id: 0, value: getImageUrl("part1/screen0.png") },
  { id: 1, value: getImageUrl("part1/screen1.png") },
  { id: 2, value: getImageUrl("part1/screen2.png") },
  { id: 3, value: getImageUrl("part1/screen3.png") },
  { id: 4, value: getImageUrl("part1/screen4.png") },
];

export const Part1 = () => {
  const [screenData, setScreenData] = useState(screens[0]);
  const [val, setVal] = useState(0);

  const handleClick = (index) => {
    setVal(index);
    const screenSlider = screens[index];
    setScreenData(screenSlider);
  };

  const handleNext = () => {
    let index = val < screens.length - 1 ? val + 1 : index;
    setVal(index);
    setScreenData(screens[index]);
  };

  const handlePrevious = () => {
    let index = val > 0 ? val - 1 : index;
    setVal(index);
    setScreenData(screens[index]);
  };

  const goHome = () => {
    window.location.href = "/SFUSD-website/";
  };

  return (
    <div>
      <section className={styles.container}>
        <button
          className={`${styles.btn} ${styles.homeButton}`}
          onClick={goHome}
        >
          <img
            src={getImageUrl("part1/homeIcon.png")}
            alt="Home"
            className={styles.icon}
          />
        </button>
        <button
          className={`${styles.btn} ${styles.leftButton}`}
          onClick={handlePrevious}
        >
          <img
            src={getImageUrl("part1/leftArrow.png")}
            alt="Previous"
            className={styles.icon}
          />
        </button>
        <div className={styles.imgContainer}>
          <img
            src={screenData.value}
            className={styles.mainImage}
            alt={`Screen ${screenData.id}`}
          />
        </div>
        {screenData.id != screens.length - 1 && (
          <button
            className={`${styles.btn} ${styles.rightButton}`}
            onClick={handleNext}
          >
            <img
              src={getImageUrl("part1/rightArrow.png")}
              alt="Next"
              className={styles.icon}
            />
          </button>
        )}
      </section>
      <div className={styles.thumbnailContainer}>
        {screens.map((data, i) => (
          <img
            key={data.id}
            className={`${styles.thumbnail} ${
              screenData.id === i ? styles.clicked : ""
            }`}
            src={data.value}
            onClick={() => handleClick(i)}
            alt={`Thumbnail ${data.id}`}
          />
        ))}
      </div>
    </div>
  );
};
