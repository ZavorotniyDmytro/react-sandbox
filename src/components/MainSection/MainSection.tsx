import { FC } from "react";
import Button from "../Button/Button";
import styles from "./MainSection.module.css";

const photoLink =
  "https://images01.nicepage.com/c461c07a441a5d220e8feb1a/eb721b4bb40c5827955dca5a/JohnCenaRunningPNG.png";

const MainSection: FC = () => {
  return (
    <section className={styles.mainSection}>
      <div>
        <div className={styles.item}>
          <h1>Come Run With Us</h1>
          <p>
            We have programs for all levels of ability, and coaches and mentors
            in place to help you
          </p>
          <Button>START NOW</Button>
        </div>

        <div className={styles.item}>
          <div className={styles.rectangle}></div>
          <h1>All Levels. Every Surface. Any Distance.</h1>
          <p>
            The beauty of running is that it can be done in a variety of places,
            by people of all abilities, at distances both short and long.
          </p>
        </div>
      </div>
      <img src={photoLink} alt="not found" />
    </section>
  );
};

export default MainSection;
