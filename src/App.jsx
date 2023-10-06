import "./app.css";
import MuiNavBar from "./components/navbar/navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

const App = () => {
  return (
    <>
      <header className="header2">
        <MuiNavBar />
      </header>
      <div className="saludo">
        <ItemListContainer greeting='Hola, bienvenidos! Que comemos hoy?'/>
        <ItemDetailContainer />
      </div>
    </>
  );
};

export default App;
