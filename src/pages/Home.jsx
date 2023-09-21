/* eslint-disable react/prop-types */
import Search from "../component/Search";
import Tasks from "../component/Tasks";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";

export default function Home({ items, setItems, onEditItem }) {
  const [search, setSearch] = useState("");
  const [itemFilter, setItemFilter] = useState([]);

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function handleSearch(itemCari) {
    setSearch(itemCari);
  }

  useEffect(() => {
    const filterSearch = items.filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase());
    });
    setItemFilter(filterSearch);
  }, [items, search]);

  function handleClearDone() {
    setItems((items) => items.filter((item) => item.checked == false));
  }

  function handleClearItems() {
    setItems([]);
  }
  return (
    <>
      <Container className="mt-5 p-5 d-flex flex-column justify-content-center align-content-center border border-2 rounded ">
        <Row>
          <h1 className="text-center fw-bold">TodoSearch</h1>
          <Col>
            <Search onSearch={handleSearch} />
          </Col>
        </Row>
        <h1 className="text-center my-4">Todo List</h1>
        <Tasks
          items={itemFilter}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
          onClearDone={handleClearDone}
          onClearItems={handleClearItems}
          onEditItem={onEditItem}
        />
      </Container>
    </>
  );
}
