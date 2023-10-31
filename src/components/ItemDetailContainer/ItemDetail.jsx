import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export const ItemDetail = ({ id, nombre, imagen, categoria, precio, stock, descripcion }) => {
  
  const [quantityAdded, setQuantityAdded] = useState(0);
  
  const { addItem } = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id, nombre, precio
    }

    addItem(item,quantity)
  };

  return (
    <article className="CardItem">
      <header className="Header2">
        <h2 className="ItemHeader">{nombre}</h2>
      </header>
      <picture>
        <img src={imagen} alt={nombre} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Precio: ${precio}</p>
        <p className="Info">{stock}</p>
        <p className="Info">{categoria}</p>
        <p className="Info">{descripcion}</p>
      </section>
      <footer className="ItemFooter">
        {quantityAdded > 0 ? (
          <Link to="/Comanda" className="Option">
            Finalizar pedido
          </Link>
        ) : (
          <ItemCount
            stock={stock}
            onAdd={handleOnAdd}
          />
        )}
      </footer>
    </article>
  );
};
