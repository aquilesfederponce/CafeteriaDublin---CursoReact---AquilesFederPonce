import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <section className="flex min-h-[calc(100vh-112px)] flex-col items-center justify-center bg-[#010326] px-4 py-10 text-[#F5E6D3]">
      <h2 className="text-l font-medium">
        Lo sentimos, no pudimos encontrar la pagina que buscas
      </h2>
      <NavLink
        className="mt-6 inline-block rounded-lg bg-[#D97F30] px-4 py-2 text-center font-medium text-white transition hover:bg-[#c46e28]"
        to="/"
      >
        Volver al Inicio
      </NavLink>
    </section>
  );
}

export default NotFound;
