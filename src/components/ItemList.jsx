import Item from "./Item";

function ItemList({ items }) {
  return (
    <section className="flex justify-center bg-[#010326] px-4 pt-16 pb-10 text-[#F5E6D3]">
      <div className="flex flex-wrap justify-center gap-6">
        {items.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
}

export default ItemList;
