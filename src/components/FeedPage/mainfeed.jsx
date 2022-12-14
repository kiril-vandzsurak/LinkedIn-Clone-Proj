import { Container, Row, Col } from "react-bootstrap";
import Footer from "../Footer";

const Mainfeed = () => {
  return (
    <Container className="main-con">
      <Row className="main-con-row">
        <Col md={2}>
          <Container className="placeholder2">
            <p>Abi profile compoenent here</p>
            <p>
                <img src="https://i.ibb.co/VN0gGN3/sidebar-example.png"/>
            </p>
          </Container>
        </Col>
        <Col md={4}>
          <Container style={{minHeight: "800px"}} className="placeholder2"></Container>
        </Col>
        <Col md={2}>
          <Container className="placeholder2"></Container>
          <Container className="placeholder3 mt-3"></Container>
        </Col>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
};

export default Mainfeed;
