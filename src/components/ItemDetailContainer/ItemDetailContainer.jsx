//activo

import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import { products  } from '../../assets/db';
import {ItemDetail} from './ItemDetail';
import { useParams } from 'react-router-dom';


// inActivo
// import './ItemDetailContainer.css';
// import { useState, useEffect } from 'react';
// import { getProductById  } from '../../assets/db';
// import ItemDetail from './ItemDetail';
// import { useParams } from 'react-router-dom';


// const ItemDetailContainer = () => {
//     const [product, setProduct] = useState({})
//     const { id } = useParams()

//     useEffect(() => {
        
        
//         getProductById(id)
//             .then(response => {
//                 setProduct(response)
//         })
//         .catch(error => {
//             console.error(error)
//         })
//     },[id])

//   return (
//     <div className='ItemDetailContainer'>
//         <ItemDetail {...product} />
//     </div>
//   )
// }

// export default ItemDetailContainer











const ItemDetailContainer = () => {
    const [productSelected, setProductSelected] = useState({})
    const { id } = useParams()

    useEffect(() => {
        let producto = products.find((product)=>product.id ===+id);
        const getProduct = new Promise ((resolve,reject)=> {
            resolve(producto);
            reject("error");
        });

        getProduct
            .then((res) => setProductSelected(res))
            .catch((err) => console.log(err));
        },[id]);

    const onAdd = (quantity) => {
        let comida = {
            ...productSelected,
            quantity: quantity,
        };
        console.log("Este es el producto que se agrega: ", comida)
    }
  return (
    <div className='ItemDetailContainer'>
      
        <ItemDetail productSelected={productSelected} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetailContainer