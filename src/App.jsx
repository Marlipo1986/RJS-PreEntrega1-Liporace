import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

//PAGES
//import Bebidas from "./pages/Bebidas";
//import Entradas from "./pages/Entradas";
//import PlatosPrincipales from "./pages/PlatosPrincipales";
//import Postres from "./pages/Postres";
//import Guarniciones from "./pages/Guarniciones";
import MenuCompleto from "./pages/MenuCompleto";
//import Comanda from "./pages/Comanda";
import NotFound from "./pages/NotFound";
import DetallePlato from "./pages/DetallePlato";

const App = () => {
  return (
    <Router>
      <div className="App">
          <NavBar />
        <Routes className="saludo">
          <Route path="/" element= {<MenuCompleto />} />
          <Route path="/MenuCompleto" element={<MenuCompleto/>} />
          <Route path="/Detalle/:id" element={<DetallePlato/>} />
          {/* <Route path="/Entradas" element={<Entradas/>} />
          <Route path="/PlatosPrincipales" element={<PlatosPrincipales/>} />
          <Route path="/Guarniciones" element={<Guarniciones/>} />
          <Route path="/Postres" element={<Postres/>} />
          <Route path="/Bebidas" element={<Bebidas/>} />
          <Route path="/Comanda" element={<Comanda/>} /> */}
          <Route path="*" element={<NotFound/>} />
        </Routes>
      
    </div>
    </Router>
  );
};

export default App;


{/* <ItemListContainer greeting='Hola, bienvenidos! Que comemos hoy?'/> */}