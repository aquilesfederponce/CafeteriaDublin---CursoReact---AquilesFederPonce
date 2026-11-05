import { getProductById } from "../mock/asyncMock";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  const [error, setError] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    getProductById(id)
      .then((resultado) => {
        setProducto(resultado);
      })
      .catch(() => {
        setError(true);
      });
  }, [id]);

  if (error) {
    return <p>Ocurrio en error al cargar los productos, lo sentimos.</p>;
  }

  if (producto === null) {
    return <p>Cargando producto...</p>;
  }

  return <ItemDetail producto={producto} />;
}

export default ItemDetailContainer;
