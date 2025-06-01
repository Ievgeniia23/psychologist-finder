import React from 'react';
import woman1x from "../../assets/images/woman_web@1x.webp"
import woman2x from "../../assets/images/woman_web@2x.webp"
import icons from "../../assets/images/sprite.svg"
import css from "./Home.module.css"

const Home = () => {
  return (
    <div>
      <div>
        <h1>
          The road to the <span>depths</span> of the human soul
        </h1>
        <p>
          We help you to reveal your potential, overcome challenges and find a
          guide in your own life with the help of our experienced psychologists.
        </p>
        <button type="button">Get started</button>
      </div>

      <div>
        <img
          src={woman1x}
          srcSet={`${woman1x} 1x, ${woman2x} 2x`}
          alt="woman"
        />
        <svg className={css.iconStyle}>
          <use href={icons + '#icon-question'}></use>
        </svg>
        <svg>
          <use href={icons + '#icon-users'}></use>
        </svg>
      </div>
    </div>
  );
};

export default Home;
