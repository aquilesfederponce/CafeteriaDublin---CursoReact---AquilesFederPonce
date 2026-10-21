import getProducts from "../mock/asyncMock";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const cargarProductos = async () => {
      const productos = await getProducts();
      setItems(productos);
    };

    cargarProductos();
  }, []);
  return (
    <div className="Itemlist">
      <h1 className="Itemlist__h1">{greeting}</h1>
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;
