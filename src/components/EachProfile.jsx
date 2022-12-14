import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiSearch } from "react-icons/bi";

const EachProfile = ({ profile }) => {
  return (
    <>
      <Container className="d-flex">
        <Row>
          <Col className="my-2" style={{ fontWeight: "bold" }}>
            <BiSearch className="mr-4" />
            {profile.name} {profile.surname}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EachProfile;
