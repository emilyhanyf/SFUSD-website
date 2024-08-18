import React, { useState } from "react";
import { getImageUrl } from "../../utils";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleMouseEnter = (button) => {
    setHoveredButton(button);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const getBackgroundImage = () => {
    switch (hoveredButton) {
      case "part1":
        return getImageUrl("home/part1.png");
      case "part2":
        return getImageUrl("home/part2.png");
      case "part3":
        return getImageUrl("home/part3.png");
      case "part4":
      default:
        return getImageUrl("home/default.png");
    }
  };

  const getButtonColor = (button) => {
    switch (button) {
      case "part1":
        return "#694220"; // brown
      case "part2":
        return "#3D3D3D"; // dark grey
      case "part3":
        return "#000000"; // black
      case "part4":
      default:
        return "#FFFFFF"; // white
    }
  };

  const getTextColor = (button) => {
    switch (button) {
      case "part1":
        return "#FCEBD8"; // beige
      case "part2":
        return "#F2F2F2"; // light grey
      case "part3":
        return "#FFFFFF"; // white
      case "part4":
      default:
        return "#1276A8"; // blue
    }
  };

  const getBorderColor = (button) => {
    switch (button) {
      case "part1":
        return "#694220"; // brown
      case "part2":
        return "#969696"; // light grey
      case "part3":
        return "#000000"; // black
      case "part4":
      default:
        return "#FFFFFF"; // white
    }
  };

  const getMainButtonColor = (button) => {
    switch (button) {
      case "part1":
        return "#FCEBD8"; // beige
      case "part2":
        return "#FFFFFF"; // white
      case "part3":
        return "#FFFFFF"; // white
      case "part4":
      default:
        return "#5FAED5"; // light blue
    }
  };

  return (
    <div className={styles.backgroundImage}>
      <img
        src={getBackgroundImage()}
        className={styles.mainImage}
        alt={`Homepage Image`}
      />

      <div className={styles.buttonContainer}>
        <button
          className={styles.btn}
          onMouseEnter={() => handleMouseEnter("part1")}
          onMouseLeave={handleMouseLeave}
          style={{ backgroundColor: getButtonColor(hoveredButton) }}
        >
          <Link to="/part1">
            <p style={{ color: getTextColor(hoveredButton) }}>
              Resegregation
            </p>
            <p style={{ color: getTextColor(hoveredButton) }}>
              (1954-2008)
            </p>
          </Link>
        </button>
        <button
          className={styles.btn}
          onMouseEnter={() => handleMouseEnter("part2")}
          onMouseLeave={handleMouseLeave}
          style={{ backgroundColor: getButtonColor(hoveredButton) }}
        >
          <Link to="/part2">
            <p style={{ color: getTextColor(hoveredButton) }}>
              Current Policy
            </p>
            <p style={{ color: getTextColor(hoveredButton) }}>
              (2011-Present)
            </p>
          </Link>
        </button>
        <button
          className={styles.btn}
          onMouseEnter={() => handleMouseEnter("part3")}
          onMouseLeave={handleMouseLeave}
          style={{ backgroundColor: getButtonColor(hoveredButton) }}
        >
          <Link to="/part3">
            <p style={{ color: getTextColor(hoveredButton) }}>
              New Priorities
            </p>
            <p style={{ color: getTextColor(hoveredButton) }}>
              (2018)
            </p>
          </Link>
        </button>
        <button
          className={styles.btn}
          onMouseEnter={() => handleMouseEnter("part4")}
          onMouseLeave={handleMouseLeave}
          style={{ backgroundColor: getButtonColor(hoveredButton) }}
        >
          <Link to="/part4">
            <p style={{ color: getTextColor(hoveredButton) }}>
              Ongoing Decisions
            </p>
            <p style={{ color: getTextColor(hoveredButton) }}>
              (2018-Present)
            </p>
          </Link>
        </button>
        <button
          className={styles.mainBtn}
          onMouseEnter={() => handleMouseEnter("default")}
          onMouseLeave={handleMouseLeave}
          style={{
            backgroundColor: getMainButtonColor(hoveredButton),
            borderColor: getBorderColor(hoveredButton),
          }}
        >
          <Link to="/part1">
            <p style={{ color: getBorderColor(hoveredButton) }}>Get Started</p>
          </Link>
        </button>
      </div>
    </div>
  );
};
