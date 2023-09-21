/* eslint-disable react/prop-types */
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";

export default function Search({ onSearch }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onSearch(value);

    setValue("");
  }

  return (
    <>
      <Container className="justify-content-center align-items-start border border-1 rounded p-3">
        <Row className="mb-3">
          <Col className="col-6">
            <Form onSubmit={handleSubmit}>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1" className="bg-info">
                  {<BsSearch />}
                </InputGroup.Text>
                <Form.Control
                  style={{ boxShadow: "none" }}
                  size="md"
                  type="text"
                  placeholder="Search Todo"
                  onChange={(e) => setValue(e.target.value)}
                />
              </InputGroup>
              <Button type="submit" className="col-12 " variant="primary">
                Search
              </Button>
            </Form>
          </Col>
          <Col className="d-flex justify-content-end align-items-end">
            <Button
              className="col-md-6"
              as={Link}
              to="/input-page"
              variant="primary"
            >
              Add new Task
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
