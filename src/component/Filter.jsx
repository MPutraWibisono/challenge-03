/* eslint-disable react/prop-types */
import { Row, Col, Button } from "react-bootstrap";

export default function Filter({ onSetSortBy }) {
  return (
    <>
      <Row>
        <Col className="d-flex justify-content-around">
          <Button
            className="col-3"
            variant="primary"
            value={"all"}
            onClick={(e) => onSetSortBy(e.target.value)}
          >
            All
          </Button>{" "}
          <Button
            className="col-3"
            variant="primary"
            value={"checked"}
            onClick={(e) => onSetSortBy(e.target.value)}
          >
            Done
          </Button>{" "}
          <Button
            className="col-3"
            variant="primary"
            value={"todo"}
            onClick={(e) => onSetSortBy(e.target.value)}
          >
            Todo
          </Button>{" "}
        </Col>
      </Row>
    </>
  );
}
