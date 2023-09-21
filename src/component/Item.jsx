/* eslint-disable react/prop-types */
import { Row, Col } from "react-bootstrap";
import { BiSolidTrashAlt, BiSolidPencil } from "react-icons/bi";
import { useState } from "react";
import "./modulestyle.module.css";

export default function Item({ item, onDeleteItem, onToggleItem, onEditItem }) {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState("");

  const onEdit = () => {
    setValue("");
    setIsEdit(!isEdit);
  };

  const handleEdit = (e) => {
    e.preventDefault();

    if (!value) return;

    onEditItem(item.id, value);
    setIsEdit(!isEdit);
    setValue("");
  };
  return (
    <>
      {isEdit ? (
        <form
          key={item.id}
          action=""
          onSubmit={handleEdit}
          className="d-flex border border-1 rounded py-2 px-3 mb-4 "
        >
          <input
            type="text"
            value={value}
            placeholder={`Edit item :  ${item.name}`}
            onChange={(e) => setValue(e.target.value)}
            className=" p-2 border-0 col-10"
          />
          <button type="submit" className="btn btn-success me-2">
            Edit
          </button>
          <button onClick={onEdit} className="btn btn-warning">
            Cancel
          </button>
        </form>
      ) : (
        <li key={item.id} className="border border-1 rounded py-3 px-4 mb-4">
          <Row>
            <Col>
              <span
                style={item.checked ? { textDecoration: "line-through" } : {}}
              >
                {" "}
                {item.name}
              </span>
            </Col>
            <Col className="d-flex justify-content-end">
              <input
                style={{ cursor: "pointer" }}
                className="me-2 mt-2"
                type="checkbox"
                checked={item.checked}
                onChange={() => onToggleItem(item.id)}
              />
              <button onClick={onEdit} className="border-0 bg-white">
                <BiSolidPencil color="orange" />
              </button>
              <button
                onClick={() => onDeleteItem(item.id)}
                className="border-0 bg-white"
              >
                <BiSolidTrashAlt color="red" />
              </button>
            </Col>
          </Row>
        </li>
      )}
    </>
  );
}
