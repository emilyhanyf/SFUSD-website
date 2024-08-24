import React, { useState } from "react";
import { getImageUrl } from "../../utils";
import styles from "./Part4.module.css";
import { Link } from "react-router-dom";

const screens = [
  { id: 0, value: getImageUrl("part4/screen0.png") },
  { id: 1, value: getImageUrl("part4/screen1.png") },
  { id: 2, value: getImageUrl("part4/screen5.png") },
  { id: 3, value: getImageUrl("part4/screen6.png") },
  { id: 4, value: getImageUrl("part4/screen7.png") },
];

const featuresScreens = [
  { id: 5, value: getImageUrl("part4/screen2.png") },
  { id: 6, value: getImageUrl("part4/screen3.png") },
  { id: 7, value: getImageUrl("part4/screen4.png") },
];

const moreLinks = [
  { text: "SFUSD Website", url: "https://www.sfusd.edu/" },
  {
    text: "Frequently Asked Questions",
    url: "https://www.sfusd.edu/schools/enroll/student-assignment-policy/student-assignment-changes/frequently-asked-questions",
  },
  {
    text: "SFUSD Student Assignment Biweekly Updates",
    url: "https://www.sfusd.edu/schools/enroll/student-assignment-policy/student-assignment-changes/student-assignment-newsletter",
  },
  {
    text: "SFUSD Student Assignment Blogs",
    url: "https://www.sfusd.edu/schools/enroll/student-assignment-policy/student-assignment-changes/student-assignment-blog",
  },
  {
    text: "More on SFUSD's New School Assignment Policy",
    url: "https://drive.google.com/file/d/1e6-A2y8Mk27WKZGUje17WNC71qlMKs-E/view",
  },
];

export const Part4 = () => {
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

  const handleLearnMoreClick = (index) => {
    setScreenData(featuresScreens[index]);
  };

  const goBack = () => {
    setVal(1);
    setScreenData(screens[1]);
  };

  const handleLastSection = () => {
    window.location.href = "/SFUSD-website/part3";
  };

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
        onClick={screenData.id > 4 ? goBack : null}
      >
        {screenData.id < 5 && (
          <>
            <button
              className={`${styles.btn} ${styles.homeButton}`}
              onClick={goHome}
            >
              <img
                src={getImageUrl("part4/homeIcon.png")}
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
                  src={getImageUrl("part4/leftArrow.png")}
                  alt="Previous"
                  className={styles.icon}
                />
              </button>
            )}

            {screenData.id !== screens.length - 1 && (
              <button
                className={`${styles.btn} ${styles.rightButton}`}
                onClick={handleNext}
              >
                <img
                  src={getImageUrl("part4/rightArrow.png")}
                  alt="Next"
                  className={styles.icon}
                />
              </button>
            )}
          </>
        )}

        {screenData.id === 0 && (
          <button
            className={`${styles.btn} ${styles.leftButton}`}
            onClick={handleLastSection}
          >
            <img
              src={getImageUrl("part4/leftArrow.png")}
              alt="Last"
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
      </section>

      {screenData.id === 1 && (
        <div className={styles.btnContainer}>
          <button
            onClick={() => handleLearnMoreClick(0)}
            className={styles.btn}
          >
            <img
              src={getImageUrl("part4/zones.png")}
              alt="Zones"
              className={styles.iconBtn}
            />
          </button>
          <button
            onClick={() => handleLearnMoreClick(1)}
            className={styles.btn}
          >
            <img
              src={getImageUrl("part4/diversity.png")}
              alt="Diversity"
              className={styles.iconBtn}
            />
          </button>
          <button
            onClick={() => handleLearnMoreClick(2)}
            className={styles.btn}
          >
            <img
              src={getImageUrl("part4/tiebreaker.png")}
              alt="Tiebreaker"
              className={styles.iconBtn}
            />
          </button>
        </div>
      )}

      {screenData.id > 4 && (
        <>
          <button
            className={`${styles.btn} ${styles.homeButton}`}
            onClick={goBack}
          >
            <img
              src={getImageUrl("part4/backArrow.png")}
              alt="Back"
              className={styles.icon}
            />
          </button>
        </>
      )}

      {screenData.id === 3 && (
        <div>
          <div className={styles.linkContainer2}>
            <button
              className={styles.linkBtn}
              onClick={() =>
                window.open(
                  "https://www.sfusd.edu/resource-alignment-initiative/focus-area-5-create-new-portfolio-schools/get-involved",
                  "_blank"
                )
              }
            >
              Get Involved
            </button>
            <button
              className={styles.linkBtn}
              onClick={() =>
                window.open(
                  "https://www.sfusd.edu/resource-alignment-initiative/resource-alignment-initiative-weekly-updates",
                  "_blank"
                )
              }
            >
              Stay Updated
            </button>
          </div>
          <div className={styles.linkBtnClearContainer}>
            <button
              className={styles.linkBtnClear}
              onClick={() =>
                window.open(
                  "https://www.sfusd.edu/about-sfusd/board-education/board-meeting-calendar-and-agendas",
                  "_blank"
                )
              }
            >
              Board Meeting
            </button>

            <button
              className={styles.linkBtnClear}
              onClick={() =>
                window.open("https://familylink.sfusd.edu/hc/en-us", "_blank")
              }
            >
              Family Resource
            </button>
          </div>
        </div>
      )}

      {screenData.id === 4 && (
        <div className={styles.linkContainer}>
          {moreLinks.map((link, index) => (
            <button
              key={index}
              className={styles.linkBtn}
              onClick={() => window.open(link.url, "_blank")}
            >
              {link.text}
            </button>
          ))}
        </div>
      )}

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
