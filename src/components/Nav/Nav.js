import './Nav.scss';

const Nav = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <li>
          <i className="fa-brands fa-instagram" />
          <span className="nav-logo-letter">Westagram</span>
        </li>
        <li>
          <input className="nav-input" type="text" placeholder="검색" />
        </li>
        <li className="nav-icon-area">
          <i className="fa-regular fa-compass" />
          <i className="fa-regular fa-heart" />
          <i className="fa-regular fa-user" />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
