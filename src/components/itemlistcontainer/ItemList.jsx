import './ItemList.css';
import Item from '../CardItem/Item';
import { Link } from 'react-router-dom';



const ItemList = ({ products }) => {
  return (
    <div className="ListGroup">
      {products.map (prod => (
        <Link to={`/Detalle/${prod.id}`} key={prod.id}>
          <Item {...prod} />
        </Link>))}
    </div>
  )};


export default ItemList;