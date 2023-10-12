import { useState, useEffect } from 'react';
import {getProducts} from '../../assets/db';
import ItemList from '../ItemList/ItemList';



const ItemListContainer = ({greeting}) => {
    
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }),[]
    return(
        <div>
        <ItemList products={products}/>
        </div>
        
        
    )
}

export default ItemListContainer;

