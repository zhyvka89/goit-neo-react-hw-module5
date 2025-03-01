import { NavLink } from 'react-router-dom';
// import Container from '../Container';
// import styles from './Navigation.module.scss';

function Navigation() {
  return (
    <nav>
      <NavLink
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
      >
        Movies
      </NavLink>
    </nav>
  );
}

export default  Navigation