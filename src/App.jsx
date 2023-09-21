import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import InputPage from "./pages/InputPage";
import todoList from "./data/toDoList.json";
import { useState } from "react";

export default function App() {
  const [items, setItems] = useState(todoList);

  function handleAddItem(itemBaru) {
    setItems([...items, itemBaru]);
  }

  function handleEdit(id, name) {
    setItems((items) =>
      items.map((item) => {
        return item.id === id ? { ...item, name } : item;
      })
    );
  }

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home items={items} setItems={setItems} onEditItem={handleEdit} />
            }
          />
          <Route
            path="/input-page"
            element={<InputPage onAddItem={handleAddItem} />}
          />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}
