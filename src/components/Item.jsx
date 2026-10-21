function Item({ item }) {
  return (
    <div className="cafesCard">
      <h2 className="cafesCard__h2">{item.name}</h2>
      <img className="cafesCard__img" src={item.img} alt={item.textAlt} />
      <p className="cafesCard__p">${item.price}</p>
      <p className="cafesCard__p">{item.description}</p>
    </div>
  );
}

export default Item;
