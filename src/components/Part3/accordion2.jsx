import styles from "./Part3.module.css";
import { useState } from "react";

const data = [
  {
    title: "Socioeconomic status of peers determines academic performance of students.",
    study:
      "The Effect of Peer Socioeconomic Status on Student Achievement: A Meta-Analysis",
    content:
      "van Ewijk, Reyn and Sleegers, Peter, The Effect of Peer Socioeconomic Status on Student Achievement: A Meta-Analysis (April 1, 2009). Available at SSRN: https://ssrn.com/abstract=1402645 or http://dx.doi.org/10.2139/ssrn.1402645",
  },
  {
    title: "Economically-diverse classrooms cause wealthy students to discriminate less against other poor children even outside of school.",
    study:
      "Familiarity Does Not Breed Contempt: Generosity, Discrimination, and Diversity in Delhi Schools",
    content:
    "Rao, Gautam. 2019. 'Familiarity Does Not Breed Contempt: Generosity, Discrimination, and Diversity in Delhi Schools.' American Economic Review, 109 (3): 774–809. DOI: 10.1257/aer.20180044"
  },
  {
    title: "Interventions that increase diversity through increased contact among ethnic and racial groups decrease prejudice",
    study: "The Contact Hypothesis Re-evaluated",
    content:
      "Paluck, Elizabeth Levy and Green, Seth and Green, Donald P. The Contact Hypothesis Re-evaluated (May 24, 2017). Available at SSRN: https://ssrn.com/abstract/2973474 or http://dx.doi.org/10.2139/ssrn.2973474. ",
  },
];

export default function Accordion2() {
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
