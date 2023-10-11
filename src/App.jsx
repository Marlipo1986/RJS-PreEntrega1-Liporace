import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

//PAGES
import Bebidas from "./pages/Bebidas";
import Entradas from "./pages/Entradas";
import Home from "./pages/Home";
import PlatosPrincipales from "./pages/PlatosPrincipales";
import Postres from "./pages/Postres";
import Guarniciones from "./pages/Guarniciones";

const App = () => {
  return (
    <Router>
      <div className="App">
          <NavBar />
        <Routes className="saludo">
          <Route path="/" element= {<Home />} />
        </Routes>
      
    </div>
    </Router>
  );
};

export default App;


{/* <ItemListContainer greeting='Hola, bienvenidos! Que comemos hoy?'/> */}