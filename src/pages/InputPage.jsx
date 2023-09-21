/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { BiBook } from "react-icons/bi";
import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";

export default function Input({ onAddItem }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;

    const newItem = { id: Date.now(), name, checked: false };
    onAddItem(newItem);
    setName("");
    navigate("/");
  }

  return (
    <>
      <Container className="mt-5">
        <Button as={Link} to="/" variant="warning">
          Back
        </Button>
        <h2 className="text-center fw-bold">Todo Input</h2>
        <Form className="border border-1 rounded p-3" onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1" className="bg-info">
              {<BiBook />}
            </InputGroup.Text>
            <Form.Control
              style={{ boxShadow: "none" }}
              type="text"
              placeholder="Input Todo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputGroup>
          <Button
            className="col-12 mt-3"
            as="input"
            type="submit"
            value="Submit"
          />
        </Form>
      </Container>
    </>
  );
}
