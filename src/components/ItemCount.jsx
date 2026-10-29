import { useState } from "react";

function ItemCount({ stock }) {
  const [cantidad, setCantidad] = useState(stock > 0 ? 1 : 0);

  function sumarCantidad() {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  }

  function restarCantidad() {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  }

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={restarCantidad}
        disabled={cantidad <= 1}
        className="h-10 w-10 rounded-lg bg-[#D97F30] text-xl font-semibold text-[#010326] disabled:opacity-50"
      >
        −
      </button>

      <span className="min-w-8 text-center text-lg font-semibold">
        {cantidad}
      </span>

      <button
        onClick={sumarCantidad}
        disabled={cantidad >= stock}
        className="h-10 w-10 rounded-lg bg-[#D97F30] text-xl font-semibold text-[#010326] disabled:opacity-50"
      >
        +
      </button>
    </div>
  );
}

export default ItemCount;
