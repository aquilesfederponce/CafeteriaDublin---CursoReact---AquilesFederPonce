import ItemCount from "./ItemCount";

function ItemDetail({ producto }) {
  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-[#010326] px-4 py-6 text-[#F5E6D3]">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 rounded-2xl bg-[#17192D] p-8 shadow-xl md:grid-cols-2 md:gap-12 md:p-12">
        <div className="flex min-h-80 items-center justify-center rounded-xl bg-[#222438] p-8">
          <img
            src={producto.img}
            alt={producto.textAlt}
            className="max-h-96 w-full object-contain"
          />
        </div>

        <div className="flex flex-col gap-6 p-2 md:p-4">
          <div>
            <p className="mb-3 text-sm uppercase tracking-wider text-[#D97F30]">
              {producto.category}
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">{producto.name}</h2>
          </div>

          <p className="text-3xl font-semibold text-[#D97F30]">
            ${producto.price}
          </p>

          <p className="leading-relaxed text-gray-300">
            {producto.description}
          </p>

          <p className="text-sm text-gray-400">
            Stock disponible: {producto.stock}
          </p>

          <div className="mt-2">
            <p className="mb-4 font-medium">Cantidad</p>
            <ItemCount stock={producto.stock} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ItemDetail;
