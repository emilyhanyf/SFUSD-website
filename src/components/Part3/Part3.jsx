import React, { useState } from "react";
import { getImageUrl } from "../../utils";
import styles from "./Part3.module.css";
import Accordion from "./accordion";

const screens = [
  { id: 0, value: getImageUrl("part3/screen0.png") },
  { id: 1, value: getImageUrl("part3/screen1.png") },
  { id: 2, value: getImageUrl("part3/screen2.png") },
  { id: 3, value: getImageUrl("part3/screen10.png") },
  { id: 4, value: getImageUrl("part3/screen6.png") },
];

const goalScreens = [
  { id: 5, value: getImageUrl("part3/screen3.png") },
  { id: 6, value: getImageUrl("part3/screen4.png") },
  { id: 7, value: getImageUrl("part3/screen5.png") },
];

const proposalScreens = [
  { id: 8, value: getImageUrl("part3/screen7.png") },
  { id: 9, value: getImageUrl("part3/screen8.png") },
  { id: 10, value: getImageUrl("part3/screen9.png") },
];

export const Part3 = () => {
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

  const handleLearnMoreClick = (index) => {
    if (screenData.id === 2) {
      setScreenData(goalScreens[index]);
    } else if (screenData.id === 4) {
      setScreenData(proposalScreens[index]);
    }
  };

  const handlePrevious = () => {
    let index = val > 0 ? val - 1 : index;
    setVal(index);
    setScreenData(screens[index]);
  };

  const goHome = () => {
    window.location.href = "/";
  };

  const goBackToGoal = () => {
    setVal(2);
    setScreenData(screens[2]);
  };

  const goBackToProposal = () => {
    setVal(4);
    setScreenData(screens[4]);
  };

  return (
    <section className={styles.backgroundImage}>
      {screenData.id === 3 && (
        <div className={styles.accordionContainer}>
          <Accordion />
        </div>
      )}

      {screenData.id < 5 && (
        <>
          <button
            className={`${styles.btn} ${styles.homeButton}`}
            onClick={goHome}
          >
            <img
              src={getImageUrl("part3/homeIcon.png")}
              alt="Home"
              className={styles.icon}
            />
          </button>
          <button
            className={`${styles.btn} ${styles.leftButton}`}
            onClick={handlePrevious}
          >
            <img
              src={getImageUrl("part3/leftArrow.png")}
              alt="Previous"
              className={styles.icon}
            />
          </button>
          <button
            className={`${styles.btn} ${styles.rightButton}`}
            onClick={handleNext}
          >
            <img
              src={getImageUrl("part3/rightArrow.png")}
              alt="Next"
              className={styles.icon}
            />
          </button>
        </>
      )}

      <img
        src={screenData.value}
        className={styles.mainImage}
        alt={`Screen ${screenData.id}`}
      />
      {screenData.id === 2 && (
        <div className={styles.btnContainer}>
          <button
            className={styles.learnMoreBtn}
            onClick={() => handleLearnMoreClick(0)}
          >
            {" "}
            Learn More{" "}
          </button>
          <button
            className={styles.learnMoreBtn}
            onClick={() => handleLearnMoreClick(1)}
          >
            {" "}
            Learn More{" "}
          </button>
          <button
            className={styles.learnMoreBtn}
            onClick={() => handleLearnMoreClick(2)}
          >
            {" "}
            Learn More{" "}
          </button>
        </div>
      )}

      {screenData.id === 4 && (
        <div className={styles.btnContainer2}>
          <button
            className={styles.learnMoreBtn}
            onClick={() => handleLearnMoreClick(0)}
          >
            {" "}
            Learn More{" "}
          </button>
          <button
            className={styles.learnMoreBtn}
            onClick={() => handleLearnMoreClick(1)}
          >
            {" "}
            Learn More{" "}
          </button>
          <button
            className={styles.learnMoreBtn}
            onClick={() => handleLearnMoreClick(2)}
          >
            {" "}
            Learn More{" "}
          </button>
        </div>
      )}

      {screenData.id > 4 && screenData.id < 8 && (
        <>
          <button
            className={`${styles.btn} ${styles.homeButton}`}
            onClick={goBackToGoal}
          >
            <img
              src={getImageUrl("part2/leftArrow.png")}
              alt="Back"
              className={styles.icon}
            />
          </button>
        </>
      )}

      {screenData.id > 7 && (
        <>
          <button
            className={`${styles.btn} ${styles.homeButton}`}
            onClick={goBackToProposal}
          >
            <img
              src={getImageUrl("part2/leftArrow.png")}
              alt="Back"
              className={styles.icon}
            />
          </button>
        </>
      )}

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
    </section>
  );
};