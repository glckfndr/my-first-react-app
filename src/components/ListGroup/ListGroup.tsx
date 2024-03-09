import { MouseEventHandler, useState } from "react";
import styled from "styled-components";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

interface LineItemProps {
  active: boolean;
}
const List = styled.ul`
list-style: none;
  padding: 0;
`
const ListItem = styled.li<LineItemProps>`
padding: 5px 0;
background: ${props => props.active ? 'blue': 'none'};
`
function ListGroup({ items, heading, onSelectItem }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  //items = [];
  const message = items.length == 0 && <p>No city is found</p>;

  return (
    <>
      <h1>{heading}</h1>
      {message}
      <List>
        {items.map((city, i) => (
          <ListItem
            active={i === activeIndex}
            key={city}
            onClick={() => {
              setActiveIndex(i);
              onSelectItem(city);
            }}
          >
            {city}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
