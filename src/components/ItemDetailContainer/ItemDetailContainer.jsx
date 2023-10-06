import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import { getProductById } from '../../assets/db';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        getProductById('16')
            .then(response => {
                setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
    },[])

  return (
    <div className='ItemDetailContainer'>
        <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer