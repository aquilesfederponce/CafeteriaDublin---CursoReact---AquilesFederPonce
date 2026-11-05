import { NavLink } from "react-router-dom";
import logo from "../assets/logo cafe Dublin.png";

function Footer() {
  return (
    <footer className="border-t border-[#D97F30]/30 bg-[#080A14] px-10 py-8 text-[#F5E6D3]">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-2 items-center justify-items-center gap-12 px-16 py-12">
        <img
          className="h-32 w-auto object-contain"
          src={logo}
          alt="Logo Cafetería Dublin"
        />

        <nav className="flex w-full justify-center">
          <ul className="flex flex-col items-center gap-3">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `text-l font-medium transition-colors duration-200 hover:text-[#D97F30] ${
                    isActive ? "text-[#D97F30]" : "text-[#F5E6D3]"
                  }`
                }
              >
                Inicio
              </NavLink>
            </li>
            <li className="navbar__li">
              <NavLink
                className={({ isActive }) =>
                  `text-l font-medium transition-colors duration-200 hover:text-[#D97F30] ${
                    isActive ? "text-[#D97F30]" : "text-[#F5E6D3]"
                  }`
                }
                to="/category/cafe-en-grano"
              >
                Café en grano
              </NavLink>
            </li>
            <li className="navbar__li">
              <NavLink
                className={({ isActive }) =>
                  `text-l font-medium transition-colors duration-200 hover:text-[#D97F30] ${
                    isActive ? "text-[#D97F30]" : "text-[#F5E6D3]"
                  }`
                }
                to={"/category/panaderia"}
              >
                Panadería
              </NavLink>
            </li>
            <li className="navbar__li">
              <NavLink
                className={({ isActive }) =>
                  `text-l font-medium transition-colors duration-200 hover:text-[#D97F30] ${
                    isActive ? "text-[#D97F30]" : "text-[#F5E6D3]"
                  }`
                }
                to="/category/pasteleria"
              >
                Pastelería
              </NavLink>
            </li>
            <li className="navbar__li">
              <NavLink
                className={({ isActive }) =>
                  `text-l font-medium transition-colors duration-200 hover:text-[#D97F30] ${
                    isActive ? "text-[#D97F30]" : "text-[#F5E6D3]"
                  }`
                }
                to="/category/catalogo-de-bebidas"
              >
                Catálogo de bebidas
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
