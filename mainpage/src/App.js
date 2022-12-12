import { Container, Row, Col } from "react-bootstrap";
import Footer from "./components/Footer";
function App() {
  return (
    <Container fluid className="main-con">
      <Row className="justify-space-between">
        <Col md={6}></Col>
        <Col md={4}></Col>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}

export default App;
