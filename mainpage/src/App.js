import { Container, Row, Col } from "react-bootstrap";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <Container className="main-con">
      <Row className="main-con-row">
        <Col md={6}>
          <Container className="placeholder"></Container>
        </Col>
        <Col md={3}>
          <Container className="placeholder">
            <Sidebar />
          </Container>
        </Col>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}

export default App;
