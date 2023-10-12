import './ItemList.css';
import Item from '../Item/Item';
import { Link } from 'react-router-dom';

const ItemList = ({ products }) => {
  return (
    <div className="ListGroup">
      <Link className='LinkListGroup'>
        {products.map(prod => <Item key={prod.id}{...prod} />)}
      </Link>
    </div>
  )
}

export default ItemList