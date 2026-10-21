import Item from "./Item";

function ItemList({ items }) {
  return (
    <div className="cafesCard__container">
      {items.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </div>
  );
}

export default ItemList;
