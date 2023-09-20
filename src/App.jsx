import "./app.css";
import MuiNavBar from "./components/navbar/navbar";
import ItemListContainer from "./components/itemlistcontainer/ItemListContainer";

const App = () => {
  return (
    <div>
      <header className="header2">
        <MuiNavBar />
      </header>
      <div className="saludo">
        <ItemListContainer greeting='Hola, bienvenidos! Que comemos hoy?'/>
      </div>
    </div>
  );
};

export default App;
