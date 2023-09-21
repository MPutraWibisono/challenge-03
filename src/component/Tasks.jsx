/* eslint-disable react/prop-types */
import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import Filter from "./Filter";
import "./modulestyle.module.css";
import Item from "./Item";

export default function Tasks({
  items,
  onDeleteItem,
  onToggleItem,
  onClearDone,
  onClearItems,
  onEditItem,
}) {
  const [sortBy, setSortBy] = useState("input");

  function handleFiltered(e) {
    setSortBy(e);
  }

  let sortedItems;

  switch (sortBy) {
    case "todo":
      sortedItems = items.filter((item) => !item.checked);
      break;
    case "checked":
      sortedItems = items.filter((item) => item.checked);
      break;
    default:
      sortedItems = items;
      break;
  }
  return (
    <>
      <Row>
        <Col>
          <Filter onSetSortBy={handleFiltered} />
        </Col>
      </Row>
      <Row>
        <Col>
          <ul className=" list mt-3">
            {sortedItems.map((item) => (
              <Item
                item={item}
                key={item.id}
                onDeleteItem={onDeleteItem}
                onToggleItem={onToggleItem}
                onEditItem={onEditItem}
              />
            ))}
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <button className="btn btn-danger col-12" onClick={onClearDone}>
            Delete done tasks
          </button>
        </Col>
        <Col>
          <button className="btn btn-danger col-12" onClick={onClearItems}>
            Delete all tasks
          </button>
        </Col>
      </Row>
    </>
  );
}
