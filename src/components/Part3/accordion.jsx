import styles from "./Part3.module.css";
import { useState } from "react";

const data = [
  {
    title: "Enhanced Learning Outcomes",
    content:
      "Exposure to other students who are different from themselves and the novel ideas and challenges that such exposure brings leads to improved cognitive skills, including critical thinking and problem-solving.",
  },
  {
    title: "Increased Intercultural Knowledge and Empathy",
    content:
      "Racially diverse educational settings are effective in reducing prejudice, by promoting greater contact between students of different races—both informally and in classroom settings—and by encouraging relationships and friendships across group lines.",
  },
  {
    title: "Better Preparation for Employment",
    content:
      "The more often first-year college students are exposed to diverse educational settings, the greater their “gains in leadership skills, psychological well-being, intellectual engagement, and intercultural effectiveness.”",
  },
  {
    title: "Increased Civil Engagement",
    content:
      "Students develop improved civic attitudes toward democratic participation, civic behaviors such as participating in community activities, and intentions to participate in civic activities resulting from diverse learning experiences.",
  },
  {
    title: "Proven Benefits",
    content:
      "Students benefit the most from racially and ethnically diverse campuses—inside and outside the classroom—when a set of mutually supportive and reinforcing experiences occur.",
  },
];

export default function Accordion() {
  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    if (selected == index) {
      return setSelected(null);
    }

    setSelected(index);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.accordion}>
        {data.map((item, index) => (
          <div
            key={index}
            className={`${styles.item} ${
              selected === index ? styles.selected : ""
            }`}
          >
            <div
              className={`${styles.title} ${
                selected === index ? styles.selected : ""
              }`}
              onClick={() => toggle(index)}
            >
              {item.title}
              <span>{selected === index ? "-" : "+"}</span>
            </div>
            <div
              className={`${styles.content} ${
                selected === index ? styles.show : ""
              }`}
            >
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
