import Logo from '../Logo/Logo.jsx';
import Navigation from '../Navigation/Navigation.jsx';
// import css from './AppBar.module.css';

const AppBar = () => {
  return (
    <div>
      <header>
        <Logo />
        <Navigation />

        <div>
          <button type="button">Log In</button>
          <button type="button">Registration</button>
        </div>
      </header>
    </div>
  );
};

export default AppBar;
