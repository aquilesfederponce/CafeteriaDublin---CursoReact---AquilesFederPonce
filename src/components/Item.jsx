import { NavLink } from "react-router-dom";

function Item({ item }) {
  return (
    <div className="flex w-full max-w-xl flex-col gap-3 rounded-2xl bg-[#17192D] p-4 shadow-xl">
      <div className="flex gap-4">
        <div className="flex w-2/5 shrink-0 items-center justify-center rounded-xl bg-[#222438] p-3">
          <img
            className="h-40 w-full object-contain"
            src={item.img}
            alt={item.textAlt}
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <p className="text-xs uppercase tracking-wider text-[#D97F30]">
            {item.category}
          </p>

          <h2 className="text-lg font-bold text-[#F5E6D3]">{item.name}</h2>

          <p className="text-xl font-semibold text-[#D97F30]">${item.price}</p>

          <p className="line-clamp-2 text-sm leading-relaxed text-gray-300">
            {item.description}
          </p>
        </div>
      </div>

      <NavLink
        className="block w-full rounded-lg bg-[#D97F30] px-4 py-2 text-center font-medium text-white transition hover:bg-[#c46e28]"
        to={`/item/${item.id}`}
      >
        Ver más
      </NavLink>
    </div>
  );
}

export default Item;
