import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { IoIosPersonAdd } from "react-icons/io";

const NewPeople = (props) => {
  return (
    <ListGroup.Item className="peopleCard">
      <Row>
        <Col md={2}>
          {" "}
          <img
            className="people-icon my-auto"
            src={props.image ? props.image : "https://via.placeholder.com/50"}
            alt=""
          />
        </Col>
        <Col md={10}>
          <Container className="d-flex flex-column">
            <Container>
              <p>
                <div className="title-text">
                  <span id="name-text">
                    {props.name} • 1st
                    <br />
                  </span>
                </div>
                <span> {props.location}</span>
              </p>
            </Container>
            <Container>
              <Button id="people-btn" variant="outline-secondary">
                <span id="btn-icon">
                  <IoIosPersonAdd />
                </span>
                Connect
              </Button>
            </Container>
          </Container>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default NewPeople;
