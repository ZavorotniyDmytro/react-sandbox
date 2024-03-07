import { FC } from "react";
import styles from "./BenefitListSection.module.css";
import b1 from './benefit-1.png';
import b2 from './benefit-2.png';
import b3 from './benefit-3.png';
import b4 from './benefit-4.png';

interface Benefit {
  img: string;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    img: b1,
    title: "TRAINING",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
  },
  {
    img: b2,
    title: "MARATHONS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
  },
  {
    img: b3,
    title: "COMMUNITY",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
  },
  {
    img: b4,
    title: "RUNNERS CLUB",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
  },
];

const BenefitListSection: FC = () => {
  return (
    <section className={[styles.sectionBenefit, styles.diagonalGradient].join(" ")}>
      <ul className={styles.ulBenefit}>
        {benefits.map((benefit) => {
            console.log(b1)
          return (
            <li key={benefit.title} className={[styles.liBenefit, styles.font].join(" ")}>
              <img className={styles.imgSize} src={benefit.img} alt="not found" />
              <h2 className={styles.font}>{benefit.title}</h2>
              <p className={styles.pFontSize}>{benefit.description}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default BenefitListSection;
