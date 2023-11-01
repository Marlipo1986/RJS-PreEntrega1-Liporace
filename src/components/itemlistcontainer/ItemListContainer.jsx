import { useState, useEffect } from "react";
import { products } from "../../assets/db";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import "./ItemList.css"

const ItemListContainer = () => {
  const [product, setProducts] = useState([]);

  const { tipoDePlato } = useParams();
  console.log(tipoDePlato ? "estoy intentando filtrar" : "no filtro nada");

  useEffect(() => {
    const prodFiltrado = products.filter(
      (product) => product.categoria === tipoDePlato
    );
    const recupero = new Promise((resolve) => {
      resolve(tipoDePlato ? prodFiltrado : products);
    });
    recupero
      .then((res) => setProducts(res))
      .catch((error) => console.log(error));
  }, [tipoDePlato]);

  return (
    <div className="grid">
      <ItemList products={product} />
    </div>
  );
};

export default ItemListContainer;
