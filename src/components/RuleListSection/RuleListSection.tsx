import { FC } from "react";
import styles from "./RuleListSection.module.css";

interface Rule {
  title: string;
  description: string;
}

const rules: Rule[] = [
  {
    title: "FAST",
    description:
      "For those runners looking to challenge their previous best and cross the finish line faster than ever before. This option is built around improving your personal",
  },
  {
    title: "FINISH",
    description:
      "Whether it's a new distance, a new race, or the chance to check something off the bucket list, this option will train you to get you across the finish line safely.",
  },
  {
    title: "NO BOUNDARIES",
    description:
      "Our iconic beginner program for those brand new to running. The program helps you cross the finish line of your first 5K race! Cconsectetur adipiscing elit",
  },
  {
    title: "WALKFIT",
    description:
      "Take steps toward a healthier lifestyle with this low-impact program that helps you safely incorporate walking into a regular fitness routine.",
  },
];

const RuleListSection: FC = () => {
  return (
    <section className={styles.sectionRuleList}>
      <ul className={styles.ulRuleList}>
        {rules.map((rule) => {
          return (
            <li key={rule.title} className={styles.liRule}>
              <div className={styles.rectangle}></div>
              <h2>{rule.title}</h2>
              <p className={styles.pItalic}>{rule.description}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default RuleListSection;
