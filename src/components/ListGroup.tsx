import { MouseEventHandler, useState } from "react";

function ListGroup() {
  const [activeIndex, setActiveIndex] = useState(-1)
  let cities = [
    "New York",
    "Tokyo",
    "Kyiv",
    "London",
    "Paris",
    "Berlin",
    "Rome",
  ];
  //cities = [];
  const message = cities.length == 0 && <p>No city is found</p>

  return (
    <>
      <h1>City List</h1>
      {message}
      <ul className="list-group">
        {cities.map((city, i) => (
          <li key={city} className={i == activeIndex ? "list-group-item active" : "list-group-item"}
          onClick={() => setActiveIndex(i)}>
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
