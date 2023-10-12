import Item from "../components/CardItem/Item";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../assets/db";
import { getProducts } from "../assets/db";

const DetallePlato = () => {
  let { id } = useParams(); // para usar el ID como parametro hook useparams

  const [product, setProduct] = useState(null); 

  useEffect(() => {
    getProductById(id) 
      .then(response => {
        console.log(response);
        setProduct(response);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]); 

  return (
    <div>
      <Item product={product}/>
    </div>
  );
};

export default DetallePlato;