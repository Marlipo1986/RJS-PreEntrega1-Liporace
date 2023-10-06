import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({ id, nombre, imagen, categoria, precio, stock }) => {
  return (
    <article className="CardItem">
      <header className="Header2">
        <h2 className="ItemHeader">
            {nombre}
        </h2>
      </header>
      <picture>
        <img src={imagen} alt={nombre} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">
            Precio: ${precio}
        </p>
        <p className="Info">
            {stock}
        </p>
        <p className="Info">
            {categoria}
        </p>
      </section>
      <footer className="ItemFooter">
        <ItemCount initial={1} stock='10' onAdd={(quantity) =>console.log('Cantidad agregada ' ,quantity)}/>
      </footer>
    </article>
  );
};

export default ItemDetail;
