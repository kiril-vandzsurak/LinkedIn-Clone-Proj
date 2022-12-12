import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { IoIosPersonAdd } from "react-icons/io";
const PeopleCards = (props) => {
  return (
    <>
      <ListGroup.Item>
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
              <Container className="peopleCard">
                <p>
                  <div className="title-text">
                    <span id="name-text">{props.name} • 1st</span>
                  </div>
                  <span> {props.location}</span>
                </p>
              </Container>
            </Container>
          </Col>
          <Button
            id="people-btn"
            className="my-auto mx-auto"
            variant="outline-secondary"
          >
            <span id="btn-icon">
              <IoIosPersonAdd />
            </span>
            Connect
          </Button>
        </Row>
        {/* <Container className="d-flex flex-row people-card">
          <img
            className="people-icon my-auto"
            src={props.image ? props.image : "https://via.placeholder.com/50"}
            alt=""
          />
          <Container>
            <span id="name-text">{props.name} </span>
            <span> {props.location}</span>
            <br />
            {props.title}
            <Button id="people-btn" variant="outline-secondary">
              <span id="btn-icon">
                <IoIosPersonAdd />
              </span>
              Connect
            </Button>
          </Container>
        </Container> */}
      </ListGroup.Item>
    </>
  );
};

export default PeopleCards;
