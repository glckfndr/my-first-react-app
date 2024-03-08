import { MouseEventHandler, useState } from "react";
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  const [activeIndex, setActiveIndex] = useState(-1);

  //items = [];
  const message = items.length == 0 && <p>No city is found</p>;

  return (
    <>
      <h1>{heading}</h1>
      {message}
      <ul className="list-group">
        {items.map((city, i) => (
          <li
            key={city}
            className={
              i == activeIndex ? "list-group-item active" : "list-group-item"
            }
            onClick={() => {
              setActiveIndex(i);
              onSelectItem(city);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
