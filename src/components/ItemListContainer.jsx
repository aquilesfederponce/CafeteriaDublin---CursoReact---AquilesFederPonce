import getProducts from "../mock/asyncMock";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const cargarProductos = async () => {
      const productos = await getProducts();
      const categoria = id ? id.replaceAll("-", " ") : null;
      if (categoria) {
        const productosFiltrados = productos.filter((producto) => {
          return producto.category.toLowerCase() === categoria.toLowerCase();
        });
        setItems(productosFiltrados);
      } else {
        setItems(productos);
      }
    };

    cargarProductos();
  }, [id]);
  return (
    <div className="bg-[#010326] px-4">
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;
