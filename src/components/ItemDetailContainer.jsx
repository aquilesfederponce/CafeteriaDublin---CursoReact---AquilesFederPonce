import { getProductById } from "../mock/asyncMock";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    getProductById("01")
      .then((resultado) => {
        setProducto(resultado);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  if (error) {
    return <p>Ocurrio en error al cargar los productos, lo sentimos.</p>;
  }

  if (producto === null) {
    return <p>Cargando producto...</p>;
  }

  return <ItemDetail producto={producto} />;
}

export default ItemDetailContainer;
