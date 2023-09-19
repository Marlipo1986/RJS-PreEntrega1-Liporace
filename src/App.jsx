import "./app.css";
import MuiNavBar from "./components/navbar/navbar";
import ItemListContainer from "./components/itemlistcontainer/ItemListContainer";

const App = () => {
  return (
    <div>
      <header className="Header">
        <MuiNavBar />
      </header>
      <div className="SeccionMenu">
        <ItemListContainer categorias='Entradas' plato="Sopa de cebolla" precio='$45'/>
        <ItemListContainer categorias='Entradas' plato="Provoleta" precio='$55'/>
        <ItemListContainer categorias='Entradas' plato="Muzzarella Milanesa" precio='$35'/>
        <ItemListContainer categorias='Principales' plato="Ravioles con salsa scarparo" precio='$75'/>
        <ItemListContainer categorias='Principales' plato="Lomo a la pimienta con papas" precio='$85'/>
        <ItemListContainer categorias='Principales' plato="Pollo a la naranja con ensalada" precio='$65'/>
        <ItemListContainer categorias='Principales' plato="Lasagna de verduras" precio='$75'/>
        <ItemListContainer categorias='Postres' plato="Ensalada de frutas" precio='$45'/>
        <ItemListContainer categorias='Postres' plato="Pavlova con frutillas" precio='$55'/>
        <ItemListContainer categorias='Postres' plato="Flan con dulce de leche" precio='$35'/>
        <ItemListContainer categorias='Bebidas' plato="Agua" precio='$25'/>
        <ItemListContainer categorias='Bebidas' plato="Cerveza" precio='$35'/>
        <ItemListContainer categorias='Bebidas' plato="Vino de la casa" precio='$38'/>
      </div>
    </div>
  );
};

export default App;
