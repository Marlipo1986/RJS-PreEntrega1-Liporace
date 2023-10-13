import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../assets/db";
import ItemCount from "../components/ItemCount/ItemCount";


const DetallePlato = () => {
  let { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  console.log(product);

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
      {product ? (
        <article className="CardItem">
          <header className="Header2">
            <h5 className="ItemHeader">{product.nombre}</h5>
          </header>
          <picture>
            <img
              src={product.imagen}
              alt={product.nombre}
              className="ItemImg"
            />
          </picture>
          <section>
            <p className="Info">Precio: ${product.precio}</p>
            <p className="Info Oculto">Stock:{product.stock}</p>
            <p className="Info">{product.categoria}</p>
            <p className="Info Oculto">{id}</p>
            <p className="Info">{product.descripcion}</p>
          </section>
          <ItemCount stock='100' initial='1' onAdd='{quantity}'/>
        </article>
      ) : (
        "Product not found"
      )}
    </div>
  );
};

export default DetallePlato;
