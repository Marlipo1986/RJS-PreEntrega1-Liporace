import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/navbar";


//PAGES

import Comanda from "./pages/Comanda";
import NotFound from "./pages/NotFound";
import DetallePlato from "./pages/DetallePlato";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const App = () => {
  return (
    <Router>
      <Routes className="saludo">
        <Route element={<Navbar />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/MenuCompleto" element={<ItemListContainer />} />
          <Route path="/Detalle/:id" element={<DetallePlato />} />
          <Route path="/Categoria/:tipoDePlato" element={<ItemListContainer/>}/>
          <Route path="/Comanda" element={<Comanda/>} /> 
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;

{/* <Route path="/Entradas" element={<Entradas/>} />
          <Route path="/PlatosPrincipales" element={<PlatosPrincipales/>} />
          <Route path="/Guarniciones" element={<Guarniciones/>} />
          <Route path="/Postres" element={<Postres/>} />
          <Route path="/Bebidas" element={<Bebidas/>} />*/}