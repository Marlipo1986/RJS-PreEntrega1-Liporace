import "./navbar.css";
//import FoodBankIcon from '@mui/icons-material/FoodBank';
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import MenuCompleto from "../../pages/MenuCompleto";
import PlatosPrincipales from "../../pages/PlatosPrincipales";
import Guarniciones from "../../pages/Guarniciones";
import Entradas from "../../pages/Entradas";
import Postres from "../../pages/Postres";
import Bebidas from "../../pages/Bebidas";
import Comanda from "../../pages/Comanda";

const NavBar = () => {
  return (
    <nav className="Header">
      <h6>
        RESTAURAPP - del celu a tu mesa - PreEntrega React - Martin Liporace
      </h6>
      <ul className="listaNav">
        <Link to="/MenuCompleto" element={<MenuCompleto />}>
          Menu Completo
        </Link>
        <Link to="/Entradas" element={<Entradas />}>
          Entradas
        </Link>
        <Link to="/PlatosPrincipales" element={<PlatosPrincipales />}>
          Platos Principales{" "}
        </Link>
        <Link to="/Guarniciones" element={<Guarniciones />}>
          Guarniciones
        </Link>
        <Link to="/Postres" element={<Postres />}>
          Postres
        </Link>
        <Link to="/Bebidas" element={<Bebidas />}>
          Bebidas
        </Link>
        <Link to="/Comanda" element={<Comanda />}>
          Comanda {<CartWidget />}
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
