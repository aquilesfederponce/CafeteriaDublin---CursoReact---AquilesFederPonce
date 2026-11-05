import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo cafe Dublin.png";

function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-[#080A14] text-[#F5E6D3] shadow-lg border-b border-[#D97F30]/30">
      <div className="relative mx-auto flex w-full max-w-7xl translate-x-3 items-center justify-between px-10 py-4">
        <img
          className="h-20 w-auto object-contain"
          src={logo}
          alt="Logo Cafetería Dublin"
        />
        <nav className="absolute left-1/2 -translate-x-1/2">
          <ul className="flex flex-nowrap items-center gap-6 whitespace-nowrap">
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
        <div>
          <CartWidget />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
