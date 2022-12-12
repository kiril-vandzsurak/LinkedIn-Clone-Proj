import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { IoIosPersonAdd } from "react-icons/io";
const PeopleCards = (props) => {
  
  return (
    <>
      <ListGroup.Item>
        <Container className="d-flex flex-row people-card">
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
            <Button id="people-btn" variant="secondary">
              <span id="btn-icon">
                <IoIosPersonAdd />
              </span>
              Connect
            </Button>
          </Container>
        </Container>
      </ListGroup.Item>
    </>
  );
};

export default PeopleCards;
