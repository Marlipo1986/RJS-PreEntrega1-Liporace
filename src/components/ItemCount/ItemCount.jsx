//Este JSX servira para agregar platos al carrito

import './ItemCount.css';
import { useState } from 'react';

const ItemCount = ({ stock, onAdd }) => {
  
  const [quantity,setQuantity] = useState(1)
  
  const increment = () => {
    if(quantity <= stock) {
        setQuantity(quantity + 1)
    }
  }
  const decrement =() => {
    if(quantity >= 1) {
        setQuantity(quantity-1)
    }
  }

    return (
    <div className='counter'>
        <div className='controls'>
            <button className='button btn btn-danger' onClick={decrement}>-</button>
            <h4 className='Number'>{quantity}</h4>
            <button className='button btn btn-primary' onClick={increment}>+</button>
        </div>
        <div>
            <button className='button btn btn-info' onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al Carrito</button>
        </div>
    </div>
  )
}

export default ItemCount;