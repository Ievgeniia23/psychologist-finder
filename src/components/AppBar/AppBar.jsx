import Logo from '../Logo/Logo.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import css from './AppBar.module.css';

const AppBar = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.leftWrapper}>
        <Logo />
        <Navigation />
      </div>

      <div className={css.rightWrapper}>
        <button className={css.logInWrapper} type="button">
          Log In
        </button>
        <button className={css.registrationWrapper} type="button">
          Registration
        </button>
      </div>
    </div>
  );
};

export default AppBar;
