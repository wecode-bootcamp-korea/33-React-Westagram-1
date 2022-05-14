import './Nav.scss';

const Nav = () => {
  return (
    <nav className="navContainer">
      <ul className="navList">
        <li>
          <i className="fa-brands fa-instagram" />
          <span className="navLogoLetter">Westagram</span>
        </li>
        <li>
          <input className="navInput" type="text" placeholder="검색" />
        </li>
        <li className="navIconArea">
          <i className="fa-regular fa-compass" />
          <i className="fa-regular fa-heart" />
          <i className="fa-regular fa-user" />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
