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
                Cafe en grano
              </a>
            </li>
            <li className="navbar__li">
              <a className="navbar__a " href="">
                Panaderia
              </a>
            </li>
            <li className="navbar__li">
              <a className="navbar__a " href="">
                Pasteleria
              </a>
            </li>
            <li className="navbar__li">
              <a className="navbar__a " href="">
                Catalogo de bebibas
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
