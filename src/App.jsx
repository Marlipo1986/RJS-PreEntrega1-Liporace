import "./app.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import { DataProvider } from "./context/DataContext";

const App = () => {
  return (
    <DataProvider>
    <Router>
        <AppRouter />
    </Router>
    </DataProvider>
  );
};

export default App;

{
  /* <Routes className="saludo">
        <Route element={<Navbar />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/MenuCompleto" element={<ItemListContainer />} />
          <Route path="/Detalle/:id" element={<DetallePlato />} />
          <Route path="/Categoria/:tipoDePlato" element={<ItemListContainer/>}/>
          <Route path="/Comanda" element={<Comanda/>} /> 
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>*/
}
