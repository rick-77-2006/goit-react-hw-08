import { DocumentTitle } from '../components/DocumentTitle';
import css from './Pages.module.css';
import { NavLink } from 'react-router-dom';

const Home = () => {
 
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <div className={css.container}>
        <img src="https://media1.tenor.com/m/NYtoQSpUyJwAAAAC/flip.gif" alt="Phone gif" className={css.gif} />
        <h1 className={css.title}>
        </h1>
          <p className={css.link}>Do you want to <NavLink to="/register" className={css.span}>Register</NavLink> or <NavLink to="/login" className={css.span}>Log In</NavLink> ?</p>
      </div>
    </>
  );
}

export default Home;
