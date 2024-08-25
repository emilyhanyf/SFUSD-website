import React, { useState } from "react";
import { getImageUrl } from "../../utils";
import styles from "./Part1.module.css";
import { Link } from "react-router-dom";

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

  // const handleNextSection = () => {
  //   window.location.href = "/SFUSD-website/part2";
  // };

  return (
    <div>
      <div className={styles.buttonContainer}>
        <button className={styles.topBtn}>
          <Link to="/part1">
            <p>Resegregation</p>
            <p>(1954-2008)</p>
          </Link>
        </button>
        <button className={styles.topBtn}>
          <Link to="/part2">
            <p>Current Policy</p>
            <p>(2011-Present)</p>
          </Link>
        </button>
        <button className={styles.topBtn}>
          <Link to="/part3">
            <p>New Priorities</p>
            <p>(2018)</p>
          </Link>
        </button>
        <button className={styles.topBtn}>
          <Link to="/part4">
            <p>Ongoing Decisions</p>
            <p>(2018-Present)</p>
          </Link>
        </button>
      </div>

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

        {screenData.id != 0 && (
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
        )}

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
        {screenData.id === screens.length - 1 && (
          <button
            className={`${styles.btn} ${styles.rightButton}`}
          >
            <div className={`${styles.textBtn}`}>
             <Link to="/part2">
              Next Section
            </Link>
            </div>
          </button>
        )}
      </section>
      
      {/* <div className={styles.thumbnailContainer}>
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
      </div> */}
    </div>
  );
};
