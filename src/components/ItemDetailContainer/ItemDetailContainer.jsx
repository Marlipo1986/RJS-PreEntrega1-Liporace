import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import { getProductById  } from '../../assets/db';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams()

    useEffect(() => {
        
        
        getProductById(id)
            .then(response => {
                setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
    },[id])

  return (
    <div className='ItemDetailContainer'>
        <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer