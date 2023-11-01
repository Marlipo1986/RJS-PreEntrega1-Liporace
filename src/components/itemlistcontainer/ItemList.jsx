import Item from "../CardItem/Item";
import { useContext } from "react";
import DataContext from "../../context/DataContext";
import "./ItemList.css";

const ItemList = () => {
  const { data } = useContext(DataContext);
  return data.map((product) => {
    return (
      <div className="ListGroup" key={product.id}>
          <Item product={product} />
      </div>
    );
  });
};

export default ItemList;

