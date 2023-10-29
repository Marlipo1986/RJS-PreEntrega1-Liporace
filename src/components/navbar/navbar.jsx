import "./Navbar.css";
import CartWidget from "./CartWidget/CartWidget";
import { Link, Outlet } from "react-router-dom";
//import Comanda from "../../pages/Comanda";

const Navbar = () => {
  return (
    <>
      <nav className="Header">
        <Link to="/MenuCompleto">
        <h5>
          RESTAURAPP - del celu a tu mesa - Trabajo Final React - Martin Liporace
        </h5>
        </Link>
        <ul className="listaNav">
          <Link to="/MenuCompleto">
            Menu Completo
          </Link>
          <Link to="/Categoria/Entradas">
            Entradas
          </Link>
          <Link to="/Categoria/Principales">
            Platos Principales{" "}
          </Link>
          <Link to="/Categoria/Guarniciones">
            Guarniciones
          </Link>
          <Link to="/Categoria/Postres">
            Postres
          </Link>
          <Link to="/Categoria/Bebidas">
            Bebidas
          </Link>
          <Link to="/Comanda">
            {<CartWidget />}
          </Link>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
