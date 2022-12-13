import { Container, Card } from "react-bootstrap";

const ExperienceCard = (props) => {
  return (
    <>
      <Container fluid>
        <Card>
          <Card.Body>
            <h1>{props.data.role} at {props.data.company}</h1>
            <h3></h3>
            <h2>{props.data.area}</h2>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default ExperienceCard;
