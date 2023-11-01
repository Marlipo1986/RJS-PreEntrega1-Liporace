import "./ItemCount.css";
import { useState } from "react";

const ItemCount = ({ stock }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    } else {
      alert("No disponemos de esta cantidad de platos");
    }
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="counter">
      <div className="controls">
        <button className="button btn btn-danger" onClick={decrement}>
          -
        </button>
        <h4 className="Number">{quantity}</h4>
        <button className="button btn btn-primary" onClick={increment}>
          +
        </button>
      </div>
      <div>
        <button
          className="button btn btn-info"
          onClick={() => console.log(quantity)}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;

//disabled={!stock}
