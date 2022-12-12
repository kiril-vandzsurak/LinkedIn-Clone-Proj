import { Container, Row, Col } from "react-bootstrap";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Sidebar2 from "./components/Sidebar2";

function App() {

  return (
    <Container className="main-con">
      <Row className="main-con-row">
        <Col md={6}>
          <Container className="placeholder"></Container>
        </Col>
        <Col md={2}>
          <Container className="placeholder2">
            <Sidebar />
          </Container>
          <Container className="placeholder3 mt-3">
            <Sidebar2 />
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
