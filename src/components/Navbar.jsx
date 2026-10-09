import CartWidget from "./CartWidget";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <img className="navbar__img" src="./src/assets/logo cafe Dublin.png" />
        <nav className="navbar__nav">
          <ul className="navbar__ul">
            <li className="navbar__li">
              <a className="navbar__a " href="">
                Café en grano
              </a>
            </li>
            <li className="navbar__li">
              <a className="navbar__a " href="">
                Panadería
              </a>
            </li>
            <li className="navbar__li">
              <a className="navbar__a " href="">
                Pastelería
              </a>
            </li>
            <li className="navbar__li">
              <a className="navbar__a " href="">
                Catálogo de bebibas
              </a>
            </li>
            <li className="navbar__li">
              <a className="navbar__a " href="">
                Congelados
              </a>
            </li>
          </ul>
        </nav>
        <CartWidget />
      </div>
    </div>
  );
}

export default Navbar;
