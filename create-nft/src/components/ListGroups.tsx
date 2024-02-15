import { Fragment } from "react";

function ListGroup() {
  let items = ["nyc", "seoul", "sf"];
  let selected = true; 

  const getMessage = () => {
    return items.length === 0 ? <p> No items found</p> : null;
  };

  return (
    <Fragment>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
