import { getProductById } from "../mock/asyncMock";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  useEffect(() => {
    getProductById("01").then((resultado) => {
      setProducto(resultado);
    });
  }, []);

  if (producto === null) {
    return <p>Cargando producto...</p>;
  }

  return <ItemDetail producto={producto} />;
}

export default ItemDetailContainer;
