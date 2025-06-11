import React from 'react';
import woman1x from '../../assets/images/woman_web@1x.webp';
import woman2x from '../../assets/images/woman_web@2x.webp';
import icons from '../../assets/images/sprite.svg';
import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css.homeWrapper}>
      <div className={css.leftWrap}>
        <h1>
          The road to the <span className={css.italic}>depths</span> of the
          human soul
        </h1>
        <p className={css.description}>
          We help you to reveal your potential, overcome challenges and find a
          guide in your own life with the help of our experienced psychologists.
        </p>
        <button className={css.buttonWrap} type="button">
          Get started
          <svg className={css.arrowStyle}>
            <use href={icons + '#icon-arrow'}></use>
          </svg>
        </button>
      </div>

      <div className={css.rightWrap}>
        <img
          className={css.woman}
          src={woman1x}
          srcSet={`${woman1x} 1x, ${woman2x} 2x`}
          alt="woman"
        />
        <div className={css.questionWrap}>
          <svg className={css.questionStyle}>
            <use href={icons + '#icon-question'}></use>
          </svg>
        </div>
        <div className={css.usersWrap}>
          <svg className={css.usersStyle}>
            <use href={icons + '#icon-users'}></use>
          </svg>
        </div>
        <div className={css.greenWrap}>
          <div className={css.checkWrap}>
            <svg className={css.checkStyle}>
              <use href={icons + '#icon-fe_check'}></use>
            </svg>
          </div>
          <div className={css.informationWrap}>
            <p className={css.paragraphStyle}>Experienced psychologists</p>
            <p className={css.numberStyle}>15,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
