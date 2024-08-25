import React, { useState } from "react";
import { getImageUrl } from "../../utils";
import styles from "./Part3.module.css";
import Accordion from "./accordion";
import Accordion2 from "./accordion2";
import { Link } from "react-router-dom";

const screens = [
  { id: 0, value: getImageUrl("part3/screen0.png") },
  { id: 1, value: getImageUrl("part3/screen1.png") },
  { id: 2, value: getImageUrl("part3/screen2.png") },
  { id: 3, value: getImageUrl("part3/screen10.png") },
  { id: 4, value: getImageUrl("part3/screen11.png") },
  { id: 5, value: getImageUrl("part3/screen6.png") },
];

const goalScreens = [
  { id: 6, value: getImageUrl("part3/screen3.png") },
  { id: 7, value: getImageUrl("part3/screen4.png") },
  { id: 8, value: getImageUrl("part3/screen5.png") },
];

const proposalScreens = [
  { id: 9, value: getImageUrl("part3/screen7.png") },
  { id: 10, value: getImageUrl("part3/screen8.png") },
  { id: 11, value: getImageUrl("part3/screen9.png") },
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
    } else if (screenData.id === 5) {
      setScreenData(proposalScreens[index]);
    }
  };

  const handlePrevious = () => {
    let index = val > 0 ? val - 1 : index;
    setVal(index);
    setScreenData(screens[index]);
  };

  const goHome = () => {
    window.location.href = "/SFUSD-website/";
  };

  const goBackToGoal = () => {
    setVal(2);
    setScreenData(screens[2]);
  };

  const goBackToProposal = () => {
    setVal(5);
    setScreenData(screens[5]);
  };

  // const handleLastSection = () => {
  //   window.location.href = "/SFUSD-website/part2";
  // };

  // const handleNextSection = () => {
  //   window.location.href = "/SFUSD-website/part4";
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

      <section
        className={styles.backgroundImage}
        onClick={
          screenData.id > 8
            ? goBackToProposal
            : screenData.id > 5
            ? goBackToGoal
            : null
        }
      >
        {screenData.id === 3 && (
          <div className={styles.accordionContainer}>
            <Accordion />
          </div>
        )}

        {screenData.id === 4 && (
          <div className={styles.accordionContainer}>
            <Accordion2 />
          </div>
        )}

        {screenData.id < 6 && (
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

            {screenData.id != 0 && (
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
            )}

            {screenData.id === 0 && (
              <button className={`${styles.btn} ${styles.leftButton}`}>
                <div className={`${styles.textBtn}`}>
                  <Link to="/part2">Last Section</Link>
                </div>
              </button>
            )}

            {screenData.id === screens.length - 1 && (
              <button className={`${styles.btn} ${styles.rightButton}`}>
                <div className={`${styles.textBtn}`}>
                  <Link to="/part4">Next Section</Link>
                </div>
              </button>
            )}

            {screenData.id != screens.length - 1 && (
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
            )}
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

        {screenData.id === 5 && (
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

        {screenData.id > 5 && screenData.id < 9 && (
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

        {screenData.id > 8 && (
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
